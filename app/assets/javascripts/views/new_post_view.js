Journal.Views.NewPostView = Backbone.View.extend({

  events: {
    "click button.submit": "submit",
    "click button.cancel": "cancel",
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/new"]();
    that.$el.html(renderedContent);
    return that;
  },

  submit: function () {
    event.preventDefault()
    var that = this;
    var formData = $(event.currentTarget).find('form').serializeJSON();
    var post = new Journal.Models.Post(formData.post);

    that.collection.add(post);
    post.save();
    Backbone.history.navigate("#/");
  },

  cancel: function () {
    event.preventDefault();
    $(event.currentTarget).find('form').val('')
    Backbone.history.navigate("#/");
  }

});