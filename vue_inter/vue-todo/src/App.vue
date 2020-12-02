<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
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
      
    }
  },
  methods:{

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
