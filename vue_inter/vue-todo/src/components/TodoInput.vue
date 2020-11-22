<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      newTodoItem: ""
    }
  },
  methods:{
    addTodo: function(){
      var obj = {
        completed: false,
        item: this.newTodoItem
      }
      if(this.newTodoItem !== ''){
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }

    },
    clearInput: function(){
      this.newTodoItem = "";
    }
  }
}
</script>

<style scoped>
  input:focus
  {
    outline: none;
  }

  .inputBox
  {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input
  {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer
  {
    background: linear-gradient(to right, #3498db, #2980b9);
    float: right;
    height: 50px;
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn
  {
    color: white;
    vertical-align: middle;
  }

</style>