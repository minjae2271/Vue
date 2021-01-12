<template>
    <v-card style="margin-bottom:20px">
        <v-container>
            <v-img />
            <v-card-text>
                <div>
                    <h1>{{post.user.nickname}}</h1>
                    <div>{{post.content}}</div>
                </div>
            </v-card-text>
            <v-card-action>
                <v-btn>
                    <v-icon color="green darken-2">mdi-twitter-retweet</v-icon>
                </v-btn>
            <!-- </v-card-action>
            <v-card-action> -->
                <v-btn>
                    <v-icon color="green darken-2">mdi-heart-outline</v-icon>
                </v-btn>
            <!-- </v-card-action>
            <v-card-action> -->
                <v-btn>
                    <v-icon color="green darken-2">mdi-comment-outline</v-icon>
                </v-btn>
            <!-- </v-card-action>
            <v-card-action> -->
                <!-- <v-memu offset-y open-on-hover>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on">
                            <v-icon color="green darken-2">mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                        <div>
                            <v-btn>Delete</v-btn>
                            <v-btn>Edit</v-btn>
                        </div>      
                </v-memu> -->
            <v-menu
                open-on-hover
                top
                offset-y
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                v-bind="attrs"
                v-on="on"
                >
                <v-icon color="green darken-2">mdi-dots-horizontal</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                link
                @click="onRemovePost"
                >
                <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
                <v-list-item
                link
                @click="onEditPost"
                >
                <v-list-item-title>Edit</v-list-item-title>
                </v-list-item>
            </v-list>
    </v-menu>
            </v-card-action>
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    data(){
        return {
            
        }
    },
    methods: {
        onRemovePost(){
            this.$store.dispatch('posts/remove', {
                id: this.post.id
            })
        },
        onEditPost(){

        }
    }

}
</script>

<style scoped>

.icons
{
    color: #27ae60;
}

</style>