<template>
    <div style="margin-bottom:20px">
    <v-card>
        <v-container>
            {{post}}
            {{me}}
            <post-images :images="post.Images || []"/>
            <v-card-title>
                <h3>
                    <nuxt-link :to="'/user/' + post.id">{{post.User.nickname}}</nuxt-link>
                    <v-btn v-if="canFollow" @click="onFollow">팔로우</v-btn>
                    <v-btn v-if="canUnfollow" @click="onUnfollow">언팔로우</v-btn>
                </h3>
            </v-card-title>
            <v-card-text>
                <div>
                    <nuxt-link :to="'/post/' + post.id">{{post.content}}</nuxt-link>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn>
                    <v-icon color="green darken-2">mdi-twitter-retweet</v-icon>
                </v-btn>
            <!-- </v-card-action>
            <v-card-action> -->
                <v-btn @click="onClickHeart">
                    <v-icon color="green darken-2">{{heartIcon }}</v-icon>
                </v-btn>
            <!-- </v-card-action>
            <v-card-action> -->
                <v-btn @click="onToggleComment">
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
            </v-card-actions>
        </v-container>
    </v-card>
    <template v-if="commentOpened">
        <comment-form :postId="post.id" />
        <v-list>
            <v-list-item v-for="c in post.comments" :key="c.id">
                <v-list-item-avatar color="teal">
                    <span>{{c.user.nickname[0]}}</span>
                </v-list-item-avatar>
                <v-list-item-content>
                    <h3>{{c.user.nickname}}</h3>
                    <div>{{c.content}}</div>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </template>
    </div>

</template>

<script>
import CommentForm from "~/components/commentForm"
import PostImages from "~/components/PostImages"

export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    components: {
        CommentForm,
        PostImages,
    },
    data(){
        return {
            commentOpened: false,
        }
    },
    computed: {
        me(){
            return this.$store.state.users.me;
        },
        liked() {
            const me = this.$store.state.users.me;
            return !!(this.post.Likers || []).find(v => v.id === (me && me.id));
        },
        heartIcon() {
            return this.liked ? 'mdi-heart' : 'mdi-heart-outline'
        },
        canFollow() {
            return this.me && this.post.User.id !== this.me.id && !this.me.Followings.find(v => v.id === this.post.User.id)
        },
        canUnfollow() {
            return this.me &&  this.post.User.id !== this.me.id && this.me.Followings.find(v => v.id === this.post.User.id)
        },
    },
    methods: {
        onRemovePost(){
            this.$store.dispatch('posts/remove', {
                postId: this.post.id
            })
        },
        onEditPost(){

        },
        onToggleComment(){
            if(!this.commentOpened){
                this.$store.dispatch('posts/loadComments', {
                    postId: this.post.id
                })
            }
            this.commentOpened = !this.commentOpened;
        },
        onRetweet() {
            if(!this.me){
                return alert('로그인이 필요합니다.');
            }
            return this.$store.dispatch('posts/retweet', {
                postId: this.post.id,
            });
        },
        onClickHeart(){
            if(!this.me){
                return alert('로그인이 필요합니다.');
            }
            if(this.liked){
                return this.$store.dispatch('posts/unlikePost', {
                    postId: this.post.id,
                });
            }
            return this.$store.dispatch('posts/likePost', {
                postId: this.post.id,
            });
        },
        onFollow(){
            this.$store.dispatch('users/follow', {
                userId: this.post.User.id
            })
        },
        onUnfollow(){
            this.$store.dispatch('users/unfollow', {
                userId: this.post.User.id
            })
        }
    }

}
</script>

<style scoped>

a
{
    color: inherit;
    text-decoration: none;
}

.icons
{
    color: #27ae60;
}

</style>