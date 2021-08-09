<template>
  <div>
    <section>
      <user-profile :userinfo="itemInfo">
        <router-link slot="userName" :to="`/user/${itemInfo.user}`">{{itemInfo.user}}</router-link>
        <template slot="time">
          {{'Posted ' + itemInfo.time_ago}}
        </template>
      </user-profile>
      <!-- <div class="user-container">
        <div class="user-desc">
          <router-link :to="`/user/${itemInfo.user}`">
            {{itemInfo.user}}
          </router-link>
          <div class="time">
            {{itemInfo.time_ago}}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{itemInfo.title}}</h2>
    </section>
    <section>
      <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
  components:{
    UserProfile
  },
  computed: {
    itemInfo(){
      return this.$store.state.itemInfo;
    }
  },
  created(){
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

