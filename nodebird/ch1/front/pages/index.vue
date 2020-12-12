<template>
<v-container>
  <div>
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

export default {
    data() {
        return {
            name: "nuxt.js"
        }
    },
    components: {
      PostCard,
    }
}
</script>

<style>

</style>