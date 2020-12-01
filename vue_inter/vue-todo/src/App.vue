<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
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
    // ES5
    // 'TodoHeader': TodoHeader,
    // 'TodoInput': TodoInput, 
    // 'TodoList' : TodoList,
    // 'TodoFooter': TodoFooter,

    // ES6 속성명 축약
    TodoInput, 
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data(){
    return {
      todoItems:[]
    }
  },
  methods:{
    // completeOneItem(todoItem, index){
    //   // 안티루트
    //   //todoItem.completed = !todoItem.completed
    //   this.todoItems[index].completed = !this.todoItems[index].completed
    //   // localstrorage는 update가 없다,,
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    // },
    clearAllItems(){
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
