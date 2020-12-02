<template>
  <div>
      <span v-on:click="clearAll">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll(){
      //this.$emit("clearAll");
      this.$store.commit('clearAllItems');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer
  {

  }

  .clearAllBtn
  {

  }
</style>