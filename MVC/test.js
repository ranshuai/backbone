var testTemp = require('./temp/testTemp.hbs');

$(function () {
    var Model = Backbone.Model.extend({
        defaults: {
            "name": "red"
        }
    });

    var Collection = Backbone.Collection.extend({
        model: Model,
        url: "./data/test.json",
        initialize: function () {
            var self = this;
            this.fetch({
                "success": function (c, r, o) {
                    self.trigger('testData:load', r.data);
                }
            });
        }
    });

    var collectionMain = new Collection();
    var View = Backbone.View.extend({

        tagName: "div",

        initialize: function () {
            this.collection.on('testData:load', function (respont) {
                this.render(respont);
            }, this);
            this.listenTo(this.collection, 'reset', function () {
                var aList = [];
                this.collection.each(function (model) {
                    aList.push(model.toJSON())
                });
                this.render(aList);
            });
        },

        render: function (respont) {
            this.$el.html(this.template({
                list:respont
            }))
        },

        template: testTemp
    });

    var view = new View({
        collection: collectionMain
    });
    $('#box1').html(view.el);


    /*-----------------------------------------------------------------------------*/
//大的视图模型
    var BodyView = Backbone.View.extend({
        el: "body",
        events: {
            'click button': 'clickBtn'
        },
        clickBtn: function (e) {
            var $this = $(e.target);
            var data = $this.attr('data');

            var Collection = Backbone.Collection.extend({
                url: "./data/testBtn" + data + ".json"
            });
            var collection = new Collection();
            collection.fetch({
                success: function (c, r, o) {
                    collectionMain.reset(r.data);
                }
            });
        }
    });

    var bodyView = new BodyView();
});
