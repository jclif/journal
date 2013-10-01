Journal.Views.PostDetailView = Backbone.View.extend({

  render: function () {
    var that = this;

    var renderedContent = JST["posts/detail"]({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  }
});