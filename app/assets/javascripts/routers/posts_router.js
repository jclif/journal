Journal.Routers.PostsRouter = Backbone.Router.extend({

  initialize: function ($rootEl, posts) {
    this.$rootEl = $rootEl;
    this.posts = posts;
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show"
  },

  new: function () {
    var that = this;

    var newPostView = new Journal.Views.NewPostView({
      collection: that.posts
    });

    that.$rootEl.html(newPostView.render().$el);
  },

  show: function (id) {
    var that = this;

    var post = that.posts.get(id);
    var postDetailView = new Journal.Views.PostDetailView({
      model: post
    });

    that.$rootEl.html(postDetailView.render().$el);
  },

  index: function () {
    var that = this;

    that.$rootEl.empty();
  }

});