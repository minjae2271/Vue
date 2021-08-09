<template>
<div>
    <ul class="news-ist">
        <li v-for="(item,i) in ListItems" :key="i" class="post">
        <div class="points">
            {{item.points || 0}}
        </div>
        <div>
            <p class="news-title">
                <template v-if="item.domain">
                    <a :href="item.url">{{item.title}}</a>
                </template>
                <template v-else>
                    <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
                </template>
            </p>
            <small class="link-text">
                by 
                <router-link v-if="item.user" class="link-text" :to="`/user/${item.user}`">{{item.user}}</router-link>
                <a v-else :href="item.url">{{item.domain}}</a>
            </small>
        </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  computed: {
    ListItems(){
        return this.$store.state.list;
        // const name = this.$route.name;
        // if(name === 'news'){
        // return this.$store.state.news;
        // } else if(name === 'ask'){
        //     return this.$store.state.asks;
        // } else {
        //     return this.$store.state.jobs;
        // }
    }
  },
}
</script>

<style scoped> 
.news-list{
  margin: 0;
  padding: 0;

}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
  margin: 0;
}
.link-text{
    color: #828282;
}
</style>