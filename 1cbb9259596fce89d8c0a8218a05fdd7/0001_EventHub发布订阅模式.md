---
title: EventHub发布订阅模式
date: 2022-06-04
description: 介绍发布订阅模式，手写eventhub并测试
tags: ['javascript']
layout: blog-post
---
在面试中会经常被问：如何实现一个Event，如果你还不知道什么是发布订阅模式，一起学起来~

## 发布订阅模式 Pub-sub pattern
发布订阅是一种主流框架都采用的一种设计模式，而EventHub是基于这种设计模式实现的一种实例.
![订阅发布模式](../assets/EventHub.png)
举个例子，有A,B,C三位用户订阅羊城晚报，A用户选择报纸放到邮箱，B用户选择报纸放门口，C用户选择报纸放窗台，所以在配送中心会形成这样的一个cache:
```javascript
Cache = {
    "羊城晚报": [fn1, fn2, fn3],
}
```
这就是一个事件有多位监听者,当事件”羊城晚报“被触发时，会依次执行fn1, fn2, fn3.....
整体的实现逻辑大概是这样的：Subscriber_1告诉调度中心，我想要注册一个名叫XXX的事件，当这个事件被触发时，就执行fn_1函数;Subscriber_2告诉调度中心,我也要注册XXX事件，当这个事件被触发时，执行fn_2处理函数,调度中心将Subscriber_1, Subscriber_2的注册信息保存下来。当有个模块想要执行subscriber对应的方法时，只需要告诉调度中心，我想要触发XXX事件，并可以传入参数...args.事件调度中心会找到XXX事件对应的fn数组，传入参数依次执行.

发布订阅模式降级之后就是观察者模式，相较于观察者模式，发布订阅模式可以将发布者和观察者之间完全解耦（耦合：dependency,不同模块之间的依赖程度），提高不同模块之间的通信效率。在react中，非父子组件，用发布订阅模式的Event模块，对于父子组件：父=>子直接Props，子=>父用callback回调。当然也可以用context API~

## 手写EventHub
```typescript
class EventHub {
    //用于记录事件和对应的处理函数数组
    cache:{[key:string] : Array<(data:unknown) => void >} = {};
    //subscribe
    on(eventName:string, fn:((data:unknown) => void)){
        this.cache[eventName] = this.cache[eventName] || [];
        this.cache[eventName].push(fn);
    }
    //publishe
    emit(eventName:string, data?:unknown){
        (this.cache[eventName] || []).forEach(fn => fn(data));
    }
    //cancel
    off(eventName:string, fn:(data:unknown) => void){
        let index = this.cache[eventName].indexOf(fn);  
        if(index === -1){
            return;
        }
        this.cache[eventName].splice(index, 1);
    }
}

export default EventHub;
```

## 测试代码
测试命令：ts-node  xxx.ts(your test file name)

```typescript
import EventHub from "../src/index"

type TestCase = (message:string) => void;

const test1:TestCase = message => {
    const eventHub = new EventHub();
    console.assert(eventHub instanceof Object === true, "eventHub是个对象");
    console.log(message);
}

const test2:TestCase = message => {
    const eventHub = new EventHub();
    let called = false;
    eventHub.on("xxx", y => {
        called = true;
        console.assert(y[0] === "你说今晚月亮很美");
        console.assert(y[1] === "我说是的");
    });
    eventHub.emit("xxx", ["你说今晚月亮很美", "我说是的"]);
    console.assert(called);
    console.log(message);

};

const test3:TestCase = message => {
    const eventHub = new EventHub();
    let called = false;
    let count = 1;
    const fn1 = () => {
        called = true;
    }
    const fn2 = () => {
        count++;
    }
    eventHub.on('yyy', fn1);
    eventHub.on('yyy', fn2);
    eventHub.off('yyy', fn1);
    eventHub.emit('yyy');
    console.assert(count !== 1);
    console.assert(called === false);
    console.log(message);

};

test1("EventHub 可以创建对象");
test2(".on 注册之后， .emit 会触发 .on 的函数");
test3(".off 有用");
```

## 参考文章
[深入发布订阅模式](https://www.clloz.com/programming/front-end/js/2020/10/18/observer-pub-sub-pattern/)  
[面试官:既然React/Vue可以用Event Bus进行组件通信,你可以实现下吗?](https://juejin.cn/post/6844903587043082247)  
[手写EventHub](https://github.com/FrankFang/source-eventhub)
