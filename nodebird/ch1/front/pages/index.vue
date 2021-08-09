<template>
<v-container>
  <div>
    <post-form v-if="me"/>
    <post-card v-for="(p, i) in mainPosts" :key="i" :post="p"/>
  </div>
</v-container>
</template>

<script>
import PostCard from '../components/PostCard';
import PostForm from '~/components/PostForm';

export default {
    data() {
        return {
            name: "nuxt.js"
        }
    },
    components: {
      PostCard,
      PostForm
    },
    computed: {
      me() {
        return this.$store.state.users.me
      },
      mainPosts(){
        return this.$store.state.posts.mainPosts
      },
      hasMorePost(){
        return this.$store.state.posts.hasMorePost
      }
    },
    fetch({store}) {
      store.dispatch('posts/loadPosts')
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll(){
        if( document.documentElement.clientHeight + window.scrollY > document.documentElement.scrollHeight -300){
          if(this.hasMorePost){
            this.$store.dispatch('posts/loadPosts')
          }
        }
      }
    }

}
</script>

<style>

</style>