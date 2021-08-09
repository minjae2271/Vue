<template>
    <div>
        <v-container>
            <v-card style="margin-bottom:20px">
                <v-container>
                    <v-subheader>
                        <h2>Profile</h2>
                    </v-subheader>
                    <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                        <v-text-field 
                        label="nickname"
                        type="nickname"
                        v-model="nickname"
                        :rules="changeNicknameRule"
                        />
                        <v-btn type="submit">수정</v-btn>
                    </v-form>
                </v-container>
            </v-card>
            <v-card style="margin-bottom:20px">
                <v-container>
                    <v-subheader>
                        <h3>follow</h3>
                    </v-subheader>
                    <follow-list :users="followingList" :remove="removeFollowing"/>
                </v-container>
            </v-card>  
            <v-card style="margin-bottom:20px">
                <v-container>
                    <v-subheader>
                        <h3>follower</h3>
                    </v-subheader>
                    <follow-list :users="followerList" :remove="removeFollower"/>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>
<script>
import FollowList from '~/components/FollowList';

export default {
    
    components: {
        FollowList,
    },
    data() {
        return {
            valid: false,
            nickname: "", 
            changeNicknameRule: [
                v => !!v || "닉네임을 입력하세요"
            ]
        }
    },
    watch: {
        me(newVal, oldVal){
            if(oldVal){
                this.$router.push({
                    path: '/',
                })
            }
        }
    },
    methods:{
        onSubmitForm(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('users/changeNickname',{
                    nickname: this.nickname
                    
                })
            //console.log(this.nickname);
            }
        },
        removeFollowing(id){
            this.$store.dispatch('users/removeFollowing',{
                id
            })
        },
        removeFollower(id){
            this.$store.dispatch('users/removeFollower',{
                id
            })
        }
    },
    computed: {
        me(){
            return this.$store.state.users.me;
        },
        followingList(){
            return this.$store.state.users.followingList;
        },
        followerList(){
            return this.$store.state.users.followerList;
        }
    },
    middleware: 'authenticated',
    // nuxt가 지원해주는 것들!
    //layout: 'admin',
    head() {
        return {
            title: '프로필'
        }
    }
}
</script>

<style>

</style>