<template>
  <div>
    <transition-group name="list" tag="ul">
    <!-- <ul> -->
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">
          {{todoItem.item}}
        </span>
        <span class=" removeBtn">
          <i class="fas fa-trash-alt" v-on:click="removeTodo({todoItem,index})"></i>
        </span>
      </li>
    <!-- </ul> -->
    </transition-group>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  //props: ["propsdata"],
  methods:{
    ...mapMutations({
      removeTodo: 'removeOneItem',
    }),
    ...mapMutations({
      toggleComplete: 'completeOneItem',
    })
  },
  computed: {
    ...mapGetters(['storedTodoItems'])
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

  /* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>