<template>
  <div>
    <!-- <app-header v-bind:프롭스데이터 속성="상위컴포넌트 데이터"></app-header> -->
    <app-header v-bind:propsdata="str" v-on:reset="resetStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  data: function(){
    return {
      str: "Hi"
    }
  },
  methods:{
    resetStr: function(){
      this.str = "Reset"
    }
  },
  components:{
    'app-header': AppHeader
  }
}
</script>

<style>

</style>