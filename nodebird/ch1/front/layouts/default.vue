<template>
    <v-app>
        <div>
            <v-toolbar dark color="green">
                <v-toolbar-title>
                    <nuxt-link to="/">NodeBird</nuxt-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-form @submit.prevent="onSearchHashtag">
                        <div :style="{ display: 'flex', height: '100%' , alignItems : 'center'}">
                            <v-text-field 
                            v-model="hashtag"
                            hide-details label="search" 
                            prepend-icon="mdi-magnify" 
                            />
                        </div>
                    </v-form>
                    <v-btn text nuxt to="/profile">
                        <div>프로필</div>
                    </v-btn>
                    <v-btn text nuxt to="/signup">
                        <div>회원가입</div>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-row no-gutters>
                <v-col cols="12" md="4">
                    <login-form />
                </v-col>
                <v-col cols="12" md="8">
                    <nuxt />
                </v-col>
            </v-row>
        </div>
    </v-app>
</template>

<script>
import LoginForm from '../components/LoginForm';

export default {
    components: {
        LoginForm,
    },
    data(){
        return {
            hashtag: ''
        }
    },
    methods: {
        onSearchHashtag(){
            this.$router.push({
                path: `/hashtag/${this.hashtag}`
            })
            this.hashtag = ''
        }
    }
}
</script>

<style>

</style>