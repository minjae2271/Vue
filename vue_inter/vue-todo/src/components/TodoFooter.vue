<template>
  <div>
      <span v-on:click="clearAll">Clear All</span>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  methods: {
    ...mapMutations({
      clearAll: 'clearAllItems'
    })
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