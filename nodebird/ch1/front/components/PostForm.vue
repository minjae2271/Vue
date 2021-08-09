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
            :success-messages="successMessages"
            label="글을 작성하세요!"
            v-model="content"
            @input="onChangeTextarea"></v-textarea>
            <v-btn type="submit" absolute right>등록</v-btn>
            <input ref="imageInput" type="file" multiple hidden @change="onChangeImages">
            <v-btn type="button" @click="onClickImageUpload">이미지 업로드</v-btn>
            <div v-for="(p, i) in imagePaths" :key="p" style="display: inline-block">
              <img :src="`http://localhost:3085/${p}`" :alt="p" style="width: 200px">
              <div>
                <button @click="onRemoveImage(i)" type="button">제거</button>
              </div>
            </div>
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
      successMessages: "",
      //rules
      textareaRule: [
        v => !!v.trim() || "내용을 입력하세요"
      ]
    }
  },
  methods: {
    async onSubmitForm() {
      if(this.$refs.form.validate()){
        this.$store.dispatch('posts/add',{
          content: this.content,
          // user: {
          //   nickname: this.me.nickname
          // },
          // images:[],
          // comments:[],
          // id: Date.now(),
          // createdAt: Date.now()
        })
        .then(() => {
            //this.textareaRule = true
            this.hideDetails = false;
            this.success = true;
            this.successMessages = '게시글 등록 성공!';
        })
          
        .catch (() =>{
            alert("oops post failed")
          })
    } else {
      alert('양식이 맞지 않습니다.')
    }
      
    },
    onChangeTextarea(value) {
        if (value.length) {
          this.content = '';
          this.hideDetails = true;
          this.success = false;
          this.successMessages = '';
        }
    },
    onClickImageUpload() {
      this.$refs.imageInput.click();
    },
    onChangeImages(e) {
      console.log(e.target.files);
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imageFormData.append('image', f); //{ image: [file1, file2]}
      });
      console.log(imageFormData.getAll('image'));
      this.$store.dispatch('posts/uploadImages', imageFormData);
    },
    onRemoveImage(index){
      this.$store.commit('posts/removeImagePath', index);
    }
  },
  computed: {
    // me(){
    //   return this.$store.state.users.me;
    // }
    ...mapState('users', ['me']),
    ...mapState('posts', ['imagePaths']),
  }
}
</script>

<style>

</style>