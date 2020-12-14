<template>
  <v-container>
      <v-card v-if="!me">
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
              <v-container>
                  <v-text-field
                    label="Email"
                    v-model="email"
                    :rules="emailRules"
                    type="email"
                    required 
                  />
                  <v-text-field
                    label="password"
                    v-model="password"
                    :rules="passwordRules"
                    type="password"
                    required 
                  />
                  <v-btn type="submit" :disabled="!valid">Login</v-btn>
                  <v-btn nuxt to="/signup">회원가입</v-btn>
              </v-container>
          </v-form>
      </v-card>
      <v-card v-else>
        <v-container>
          {{me.nickname}}님 로그인 되었어요!
          <v-btn @click="logOut">로그아웃</v-btn>
        </v-container>
      </v-card>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      valid: false,
      email: '',
      password: '',
      //rules
      emailRules: [
        v => !!v || '이메일을 입력해주세요 :)',
        v => /.+@.+\..+/.test(v) || '이메일 형식을 지켜주세요.',
      ],
      passwordRules: [
        v => !!v || '비밀번호를 입력해주세요.'
      ]
    };
  },
  methods: {
    onSubmitForm(){
      if(this.$refs.form.validate()){
        this.$store.dispatch('users/logIn', {
          email: this.email,
          nickname: "mjmj",
        })
      }else{
        alert('로그인 실패 ㅠㅠ')
      }
    },
    logOut(){
      this.$store.dispatch('users/logOut')
    },
  },
  computed: {
      me(){
        return this.$store.state.users.me;
    }
}
}
</script>

<style>

</style>