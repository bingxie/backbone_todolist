window.TodoItem = Backbone.Model.extend({
  urlRoot: '/todos', 
  
  toggleStatus: function(){
    if(this.get('status') == 'incomplete'){
      this.set({'status': 'complete'});
    }else{
      this.set({'status': 'incomplete'});
    }

    this.save();  /* sync changes to server */
  }
});
