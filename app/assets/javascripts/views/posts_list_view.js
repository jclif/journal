Journal.Views.PostsListView = Backbone.View.extend({

  events: {
    "click .remove": "remove",
  },

  initialize: function () {
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/list"]({
      posts: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  },

  remove: function () {
    var that = this;
    var post_id = $(event.target).data("id")
    var post = that.collection.get(post_id);

    post.destroy
    that.collection.remove(post);
  }
});