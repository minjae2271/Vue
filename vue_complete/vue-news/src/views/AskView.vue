<template>
  <list-item></list-item>
</template>

<script>
// import {  mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin';

export default {
  components:{
    ListItem
  },
  mixins: [ListMixin],

}
</script>