<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
      </span>
        <!-- use the modal component, pass in the prop -->
        <Modal v-if="showModal" @close="showModal = false">
          <!--
            you can use custom content here to overwrite
            default content
          -->
          <h3 slot="header">
            warning
            <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
            </h3>
          <div slot="body">내용을 입력하세요</div>
        </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal';

export default {
  data: function(){
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods:{
    addTodo: function(){
      if(this.newTodoItem !== ''){
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }

    },
    clearInput: function(){
      this.newTodoItem = "";
    }
  },
  components:{
    Modal: Modal,
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

  .closeModalBtn
  {
    color: #3498db
  }

</style>