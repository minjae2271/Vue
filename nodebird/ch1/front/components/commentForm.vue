<template>
    <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea 
            auto-grow
            filled
            :hide-details="hideDetails"
            :success="success"
            :success-messages="successMessages"
            label="댓글을 입력하세요!"
            v-model="content"
            @input="onchangeTextarea"
        ></v-textarea>
        <v-btn color="green" dark type="submit">빼액</v-btn>
    </v-form>
</template>

<script>
export default {
    props: {
        postId:{
            type: String,
            required: true
        }
    },
    data(){
        return {
            valid: false,
            content: "",
            hideDetails: true,
            success: false,
            successMessages: ""
        }
    },
    methods: {
        onSubmitForm(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('posts/addComment', {
                    //id: Date.now(),
                    postId: this.postId,
                    content: this.content,
                    //user: {
                    //    nickname: this.me.nickname,
                    //}
                })
                .then(()=>{
                    this.content = "";
                    this.success = true;
                    this.successMessages = "댓글완료 ^^ ";
                    this.hideDetails = false;
                })
                .catch(()=>{

                })
            }
        },
        onchangeTextarea(){
            this.success = false;
            this.successMessage = '';
            this.hideDetails = true;
        }
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        }
    }

}
</script>

<style>

</style>