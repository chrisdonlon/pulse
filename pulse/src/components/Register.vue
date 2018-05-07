<template>
  <div>
    <h1>Register</h1>

    <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email" />
      <br>
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password" />
      <br>
      <button
        @click="register">Register</button>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9B9B9B;
  margin-top: 60px;
  background-color: #111111;
}
</style>
