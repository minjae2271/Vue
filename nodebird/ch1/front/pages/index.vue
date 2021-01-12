<template>
<v-container>
  <div>
    <post-form v-if="me"/>
    <post-card v-for="p in mainPosts" :key="p.id" :post="p"/>
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
      }
    }
}
</script>

<style>

</style>