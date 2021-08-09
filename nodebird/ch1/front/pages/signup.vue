<template>
  <div>
    <v-container>
        <v-card>
            <v-container>
                <v-subheader>Sign Up Form</v-subheader>
                <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                    <v-text-field 
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                        type="email"
                        required
                    />
                    <v-text-field 
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        required
                    />
                    <v-text-field
                        v-model="passwordCheck"
                        :rules="passwordCheckRules"
                        label="Password Check"
                        type="password"
                        required
                    />
                    <v-text-field 
                        v-model="nickname"
                        :rules="nicknameRules"
                        label="nickname"
                        type="nickname"
                        required
                    />
                    <v-checkbox 
                        v-model="checkbox"
                        :rules="checkboxRules"
                        label="노예 계약서"
                        required
                    />
                    <v-btn type="submit">Sign Up </v-btn>
                </v-form>
            </v-container>
        </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: "nuxt.js",
            valid: false,
            email: '',
            password: '',
            passwordCheck: '',
            nickname: '',
            checkbox: false,
            //Ruels
            emailRules: [
                v => !!v || 'email required!',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || '비밀번호는 필수사항이에요.'
            ],
            passwordCheckRules: [
                v => !!v || '비밀번호 체크는 필수사항이에요.',
                v => this.password === v || '비밀번호가 불일치합니다.'
            ],
            nicknameRules: [
                v => !!v || '닉네임을 입력해주세요 ㅠㅠ'
            ],
            checkboxRules: [
                v => !!v || '내 노예가 되어라'
            ]
        }
    },
    watch: {
        me(newVal, oldVal){
            if(newVal){
                this.$router.push({
                    path: '/',
                })
            }
        }
    },
    computed: {
        me(){
            return this.$store.state.users.me;
        }
    },
    methods: {
        // then / catch
        // onSubmitForm(){
        //     if(this.$refs.form.validate()){
        //         this.$store.dispatch('users/signUp',{
        //             nickname: this.nickname,
        //             password: this.password,
        //         }).then(() => {
        //             this.$router.push({
        //                 path: '/',
        //             });
        //         }).catch(() => {
        //             alert('oops login faliled')
        //         })
        //     }else{
        //         alert('invalid form')
        //     }
        // }
        async onSubmitForm(){
            if(this.$refs.form.validate()){
                try{
                    await this.$store.dispatch('users/signUp', {
                    email: this.email,
                    nickname: this.nickname,
                    password: this.password,
                })
                } catch {
                    alert('oops login faliled')
                }
            }else{
                alert('invalid form')
            }
        }
    },
    middleware: 'anonymous',
    head() {
        return {
            title: '회원가입'
        }
    }
}
</script>

<style>

</style>