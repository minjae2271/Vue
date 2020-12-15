<template>
  <div>
    <TodoHeader />
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from './components/todoInput';
import TodoHeader from './components/todoHeader';
import TodoList from './components/todoList';

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput
  }
}
</script>

<style>
body
{
  display: flex;
  justify-content: center;
}

input 
{
  border: groove;
}
</style>