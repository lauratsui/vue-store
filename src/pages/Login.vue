<template>
  <div class="page-flex">
    <form class="form-box-flex">
      <h1> Sign In</h1>
      <p><input label="Username" type="text" v-model="username" /></p>
      <p><input lavel="Password" type="password" v-model="password" /></p>
      <div class="buttons-box-flex">
        <button type ="button" @click="login">Login</button>
      </div>
    </form>
    </div>
</template>


<script>
export default {
  name: 'Login',
  data (){
    return{
      username: '',
      password: ''
    }
  },
  methods: {
      login (){
        this.$store.commit('setToken', this.username + '-' + Date.now())
        this.$router.push('/products')
        window.localStorage.setItem('my-token', token)
      }
  }
}
</script>

<style scoped>
.page-flex {
  display: flex;
  flex-direction: row;
  height: calc(100vh);
  justify-content: center;
  align-items: center;

}

.page-flex h1{
  width: 320 px;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
}

.form-box-flex {
  border: 1px solid;
  border-radius: 5px;
  padding: 15px;
  background: lightgray;
}

.form-box-flex input, .form-box-flex button {
  margin-top: 15px;
}

.form-box-flex input{
  flex: 1 1 auto;
}

</style>