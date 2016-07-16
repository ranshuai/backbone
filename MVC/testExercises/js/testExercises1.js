
var Model = Backbone.Model.extend({
    defaults:{
        "color":""
    }
});

var Collection = Backbone.Collection.extend({
    model:Model,
    comparator:function(m1,m2){
        var n1 = m1.get('id');
        var n2 = m2.get('id');
        if(n1<n2){
            return 1;
        }else{
            return 0;
        }
    },
    initialize:function () {
        this.on('add',function(){
            console.log('models add');
        });
        this.on('remove',function(){
            console.log('models remove');
        });
        this.on('reset',function(){
            console.log('models reset');
        });
    }
});

//实例化模型对象
var model1 = new Model({
    "color":"red"
});
var model2 = new Model({
    "color":"yellow"
});
var model3 = model1.clone();
model3.set("color","green");

var collection = new Collection();
//添加model
// collection.add(model1);
// collection.add(model3);
//删除model
// collection.remove(model3);
//重置reset collection
collection.reset([{"color":"yellow","id":"1"},{"color":"block","id":"2"}]);
console.log(collection);

//sort
// collection.sort();

/*
1.model定义一下数据格式

2.model与collection进行关联
    collection 添加 model 会触发 add事件 collection.add({"color1":"red1"});

* */