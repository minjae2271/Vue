<template>
  <div>
      <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span>
        <i class="fas fa-plus-square" v-on:click="addTodo"></i>
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
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.newTodoItem = ""
    }
  }
}
</script>

<style scoped>

</style>