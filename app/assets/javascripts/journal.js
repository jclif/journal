window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  // ...

  initialize: function ($sidebar, $content, postsData) {
    var posts = new Journal.Collections.Posts(postsData);

    this._installSidebar($sidebar, posts);

    // startup a router
    new Journal.Routers.PostsRouter($content, posts);
    // begin listening for navigation events
    Backbone.history.start();
  },

  _installSidebar: function ($sidebar, posts) {
    var that = this;

    var postsListView = new Journal.Views.PostsListView({
      collection: posts
    });

    $sidebar.html(postsListView.render().$el);
  }
};