# 组件传值: 

``` 
    项目结构有三个组件: 
                    1. App 组件 ， 负责视图的结构并且负责公共数据的传递
                    2. search组件，负责把用户输入的数据传递给父组件App
                    3. UserList组件，负责接收到用户的搜索条件然后发送请求
                    4. userListItem组件，负责接收userList组件请求回来的数据渲染


    每个组件各司其职，互不干扰，这里通过props传递值，完成组件之间的通信, 这里需要主要的一个点就是，公共的数据最好放在父组件的state中，由父组件来传递 给每个子组件，好吧，这不是重点，重点是为大家介绍，父传子通信的方式是什么样的。

        1. 父传子数据的方式： <UserList userName={this.state.userName}></UserList>    ， userName就是我们自定义的一个要传递给子组件的名字。
        2. 子组件接收父组件的数据： this.props.userName  , 从组件实例props对象中取出你定义的字段

    接下来就是子传父的数据方式了。

        1. 父组件中定义一个函数名，然后在函数的回调中获取子组件传递过来的值:

            <Search setSearchName={this.setSearchName}></Search>   // this.setSearchName是我们在父组件中定义的函数 ， setSearchName是我们定义的传递给子组件的名称 

            // 父组件中定义的函数
            setSearchName = (userName) => {
                this.setState({
                userName:userName
                })
            }
        
        2. 父组件定义好字段后，子组件接收这个字段，并通过这个函数返回你需要传递给父组件 的数据 ：

            this.props.setSearchName(this.state.userName)
```