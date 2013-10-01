Journal.Views.NewPostView = Backbone.View.extend({

  events: {
    "click button.submit": "submit",
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/new"]();
    that.$el.html(renderedContent);
    return that;
  },

  submit: function () {
    var that = this;
    console.log(event)
    var formData = $(event).serializeJSON();
    var post = new Journal.Models.Post(formData.post);

    that.collection.add(post);
    post.save();
    Backbone.history.navigate("#/");
  }

});