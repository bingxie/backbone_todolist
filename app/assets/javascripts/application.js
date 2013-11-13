//= require jquery
//= require jquery_ujs
//= require backbone-rails
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require router

$(function(){ 
	TodoApp.start();

	$('#new').on('keypress', function(e){
		if (e.which == 13) {
			var newTodoItem = new TodoItem({description: this.value, status: "incomplete"});
			
			newTodoItem.save(null, {success: function(model){  // if you have options, the first argument need to be set as null
				TodoApp.todoItems.add(model);
			}});
			
         	$(this).val("");
    	}
	});
});