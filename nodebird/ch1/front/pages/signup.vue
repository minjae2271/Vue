<template>
  <div>
    <v-container>
        <v-card>
            <v-container>
                <v-subheader>Sign Up Form</v-subheader>
                <v-form>
                    <v-text-field 
                        label="Email"
                        type="email"
                        required
                    />
                    <v-text-field 
                        label="Password"
                        type="password"
                        required
                    />
                    <v-text-field 
                        label="Password Check"
                        type="password"
                        required
                    />
                    <v-text-field 
                        label="nickname"
                        type="nickname"
                        required
                    />
                    <v-checkbox 
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
            name: "nuxt.js"
        }
    },
    head() {
        return {
            title: '회원가입'
        }
    }
}
</script>

<style>

</style>