<template>
    <div>
        <v-container>
            <v-card style="margin-bottom:20px">
                <v-container>
                    <v-subheader>
                        <h2>Profile</h2>
                    </v-subheader>
                    <v-form>
                        <v-text-field 
                        label="nickname"
                        type="nickname"
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
                    <follow-list></follow-list>
                </v-container>
            </v-card>  
            <v-card style="margin-bottom:20px">
                <v-container>
                    <v-subheader>
                        <h3>follower</h3>
                    </v-subheader>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>
<script>
import FollowList from '~/components/FollowList';

export default {
    data() {
        return {
            name: "nuxt.js"
        }
    },
    components: {
        FollowList,
    },
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