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
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList' : TodoList,
    'TodoFooter': TodoFooter,
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
    width: 200px;
  }

  button
  {
    border-style: groove;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
  }
</style>
