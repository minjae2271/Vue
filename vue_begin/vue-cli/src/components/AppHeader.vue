<template>
  <header>
      <h1>{{propsdata}}</h1>
      <button v-on:click="resetData">RESET</button>
  </header>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    resetData: function(){
      this.$emit('reset');
    }
  }
}
</script>

<style>

</style>