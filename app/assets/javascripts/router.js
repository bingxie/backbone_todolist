window.TodoApp = new (Backbone.Router.extend({
  routes: {
    "": "index",
    "todos/:id": "show",
    "todos/hide/:id": "hide"
  },

  initialize: function(){
    this.todoItems = new TodoItems();
    this.todosView = new TodosView({collection: this.todoItems});
    this.todosView.render();
  },

  index: function(){
    $('#app').html(this.todosView.el);
    this.todoItems.fetch();
  },

  start: function(){
    Backbone.history.start();
  },

  show: function(id){
    this.todoItems.focusOnTodoItem(id);
  },

  hide: function(id){
    var hideTodoItem = this.todoItems.get(id);

    hideTodoItem.destroy({  // destroy can trigger remove event on collection
      success: function(){
        console.log("destroy success");
      }
    });
  }
}));