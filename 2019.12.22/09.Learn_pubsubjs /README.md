# 组件通信之消息订阅与发布

```
    需要使用到一个工具库 PubSubjs ，你也可以选择其他的库。

    pubsubjs使用:
                1.发送消息：PubSub.publish(名称,参数)
                2.订阅消息：PubSub.subscrib(名称,函数)
                3.取消订阅：PubSub.unsubscrib(名称)

    下载：npm install pubsub-js —save

    使用了这个库之后，我们就可以不依赖于父组件而达到通信的效果了。

    1. 在search组件引入这个库: import pubsub from 'pubsub-js'
    2. 然后发布一条消息: 
                    pubsub.publish('Mysearch',this.state.userName) // 第一个参数是事件名称， 第二个参数是你需要传递的 值

    3. 在userList组件引入这个库: import pubsub from 'pubsub-js';
    4. 然后订阅这条消息:
                     pubsub.subscribe('Mysearch', () => {
                         doSomeing...
                     })
```