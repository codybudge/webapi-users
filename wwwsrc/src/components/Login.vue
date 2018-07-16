<template>
    <div class="login">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="login-page">
              <div v-if="logister">
                <h1>This is the Login Page</h1>
                <form @submit.prevent="userLogin">
                  <input type="text" name="email" id="email" v-model="login.email" placeholder="email" required>
                  <input type="password" name="password" id="password" v-model="login.password" placeholder="password" required>
                  <button class="btn" type="submit">Login</button>
                </form>
                <button class="btn" type="" @click="regLog">Register</button>
              </div>
            </div>
            <div v-if='!logister'>
              <form @submit.prevent="userRegister">
                <input type="email" name="email" id="email" v-model="register.email" placeholder='email' require>
                <input type="text" name="username" id="username" v-model="register.username" placeholder='Username' require>
                <input type="password" name="password" id="password" v-model="register.password" placeholder='password' require>
                <button class="btn" type="submit">Register</button>
              </form>
              <button class="btn" type='' @click="regLog">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data () {
      return {
       logister: true,
       login: {
         email: '',
         password: '',
       },
       register: {
         email: '',
         username: '',
         password: '',
       }
       
      }
    },
    computed: {
      setUser(){
        
        return this.$store.state.setUser
      }
    },
      methods: {
        userLogin() {
          
          this.$store.dispatch('login', this.login)
        },
        userRegister() {
          this.$store.dispatch('register', this.register)
        },
        regLog() {
          this.logister = !this.logister
        }
      }
    }
  </script>
  
  
  </style>