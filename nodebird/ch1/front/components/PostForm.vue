<template>
  <v-card style="margin-bottom:20px"> 
      <v-container>
          <v-card-title>Post</v-card-title>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-textarea
            outlined
            auto-grow
            clearable
            :rules="textareaRule"
            :hide-details="hideDetails"
            :success="success"
            :success-message="successMessage"
            label="글을 작성하세요!"
            v-model="content"
            @input="onChangeTextarea"></v-textarea>
            <v-btn type="submit" absolute right>등록</v-btn>
            <v-btn>이미지 업로드</v-btn>
          </v-form>   
      </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data(){
    return {
      valid: false,
      content: '',
      hideDetails: true,
      success: false,
      successMessage: "",
      //rules
      textareaRule: [
        v => !!v.trim() || "내용을 입력하세요"
      ]
    }
  },
  methods: {
    async onSubmitForm() {
      if(this.$refs.form.validate()){
        try{
          await this.$store.dispatch('posts/add',{
            content: this.content,
            user: {
              nickname: this.me.nickname
            },
            images:[],
            comments:[],
            id: Date.now(),
            createdAt: Date.now()
          })
          } catch {
            alert("oops post failed")
          }
    } else {
      alert('양식이 맞지 않습니다.')
    }
      
    },
    onChangeTextarea() {
      this.hideDetails = true
      this.success = false
      this.successMessage = ''
    }
  },
  computed: {
    // me(){
    //   return this.$store.state.users.me;
    // }
    ...mapState('users',['me'])
  }
}
</script>

<style>

</style>