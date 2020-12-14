<template>
<v-container>
  <div>
    <post-form v-if="me"/>
    <post-card />
    <post-card />
    <post-card />
    <post-card />
    <post-card />
    <post-card />
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
      }
    }
}
</script>

<style>

</style>