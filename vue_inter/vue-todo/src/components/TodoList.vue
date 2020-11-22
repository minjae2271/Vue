<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">
          {{todoItem.item}}
        </span>
        <span class=" removeBtn">
          <i class="fas fa-trash-alt" v-on:click="removeTodo(todoItem,index)"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
    removeTodo: function(todoItem,index){
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    },
    toggleComplete: function(todoItem){
      todoItem.completed = !todoItem.completed
      // localstrorage는 update가 없다,,
      localStorage.removeItem(todoItem);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
  }
}
</script>

<style scoped>
  ul
  {
    list-style-type: none;
    margin-top: 0;
    padding-left: 0;
    text-align: left;
  }

  li
  {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px ;
    border: slategrey;
    border-radius: 5px;
    background: white;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
  }

  .removeBtn
  {
    margin-left: auto;
    color: tomato;
  }

  .checkBtn
  {
    line-height: 45px;
    margin-right: 5px;
  }

  .checkBtnCompleted
  {
    color: #636e72;
  }
</style>