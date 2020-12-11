<template>
  <v-container>
      <v-card>
          <v-form>
              <v-container>
                  <v-text-field
                    label="Email"
                    type="email"
                    required 
                  />
                  <v-text-field
                    label="password"
                    type="password"
                    required 
                  />
                  <v-btn type="submit">Login</v-btn>
                  <v-btn nuxt to="/signup">회원가입</v-btn>
              </v-container>
          </v-form>
      </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>