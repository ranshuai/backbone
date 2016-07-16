
//model

var Model = Backbone.Model.extend({
    url:"../data/testModel.json",
    defaults:{
        "color":""
    },
    parse:function(response){

        if(response['color'] === "redModel"){
            return {
                "color":"redparse"
            }
        }
    },
    initialize:function(){
        this.on('remove',function(){
            console.log('1')
        });
    }
});

var model = new Model();
model.fetch({
    reset:true,
    success:function(m,r,o){
        model.set(r);
    }
});

console.log(model);

//
// var Collection = Backbone.Collection.extend({
//
// });
// var collection = new Collection({"colorinit":"red"});
// collection.add(model);
// collection.remove(model);
// console.log(collection);
