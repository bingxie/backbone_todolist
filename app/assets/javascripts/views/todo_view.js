window.TodoView = Backbone.View.extend({
  template: _.template('<h3 class="<%= status %>"><input type=checkbox <%= status == "complete" ? "checked=checked" : "" %>/> <%= description %><a class="hide" href="/#todos/hide/<%= id %>">✄</a> <a class="go" href="/#todos/<%= id %>">☞</a></h3>'),

  events: {
    'change input': 'toggleStatus'
  },

  initialize: function(){
    this.model.on('change', this.render, this);  /* model notify changed, then view re-renders */
    this.model.on('hide', this.remove, this);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  remove: function(){
    this.$el.remove();
  },

  toggleStatus: function(){
    this.model.toggleStatus()
  }
});

