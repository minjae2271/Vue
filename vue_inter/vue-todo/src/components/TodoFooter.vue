<template>
  <div>
      <span v-on:click="clearAll">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll: function(){
      this.$emit("clearAll");
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