<template>
  <!-- <div>
      <v-container>
          <v-card>
              <v-container>
                  <v-list-item>
                      <v-list-item-content>
                          <v-list-item-content-title>BoReum</v-list-item-content-title>
                      </v-list-item-content>
                  </v-list-item>
              </v-container>
          </v-card>
      </v-container>
  </div> -->
    <v-list>
        <v-list-item v-for="f in users" :key="f.id">
            <span>{{f.nickname}}</span>
            <v-icon @click="remove(f.id)">mdi-minus-circle-outline</v-icon>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    props:{
        users: {
            type: Array,
            required: true
        },
        remove: {
            type: Function,
            required: true
        }
    },
    data(){
        return {

        }
    },
    computed:{
        followingList(){
            return this.$store.state.users.followingList;
        }
    },
    methods:{

    }

}
</script>

<style>

</style>