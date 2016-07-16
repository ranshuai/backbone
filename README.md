
# 相关技术

## Backbone & Underscore

>1. http://www.css88.com/doc/underscore/
>1. http://www.css88.com/doc/backbone/


collection 的操作  http://www.cnblogs.com/linjiqin/p/3723936.html
                   http://www.gbtags.com/gb/share/2002.htm
                   http://blog.csdn.net/chszs/article/details/24422533
    向集合中添加模型
    collection.add()
                .push()
                .unshift()
     从集合中删除模型
     collection.remove()
                .pop()
                .shift()
    在集合中查找模型
    collection.get()
              .getByCid()
              .at()
              .where() 相对复杂的查找规则 通过传递的{属/值}的形式 返回的是数组，如果没有匹配就会返回空的数组，用underscore的isEmpty()检查返回值是否为空
    集合的排序 构造函数中 comparator
        comparator 接收两个参数 相邻的两个model进行比较

     从服务器获取集合数据
       collection.fetch() 用于从服务器接口获取集合的初始化数据，覆盖或追加到集合列表中
                  fetch() 默认是覆盖之前的数据
                  fetch({
                    add:true 追加
                  })

                 create() 在集合中创建一个新的模型，并将其同步到服务器


model 的操作 http://www.myexception.cn/web/1068081.html
    model.fetch() //拉取数据 一个对象时
    parse：function(){ 只有fetch之后才能出发parse事件}
    model.set() //设置model
    this.on('change',functioin(){ 只有设置之后才能设置change事件})

