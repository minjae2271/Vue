<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodoItem="removeOneItem" v-on:completeTodoItem="completeOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  components:{
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList' : TodoList,
    'TodoFooter': TodoFooter,
  },
    created: function(){
    if(localStorage.length > 0){
      for(var i=0; i < localStorage.length; i++){
        if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
          // this.todoItems.push(localStorage.key(i))
        }
      }
    }
  },
  data: function(){
    return {
      todoItems:[]
    }
  },
  methods:{
    addOneItem: function(item){
      var obj = {
        completed: false,
        item: item
      };
      localStorage.setItem(item, JSON.stringify(obj));
      this.todoItems.push(obj)
    },
    removeOneItem: function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    completeOneItem: function(todoItem, index){
      // 안티루트
      //todoItem.completed = !todoItem.completed
      this.todoItems[index].completed = !this.todoItems[index].completed
      // localstrorage는 update가 없다,,
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItems: function(){
      localStorage.clear();
      this.todoItems = [];
    }
  }
}
</script>

<style>
  body
  {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    background-color: #ecf0f1;
  }

  input
  {
    border-style: groove;
    width: 400px;
  }

  button
  {
    border-style: groove;
  }
  
  .shadow
  {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>
