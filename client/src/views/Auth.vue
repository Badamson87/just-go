<template>
  <div class="auth container">
    <div class="row sizing">
      <div class="col-6">
        <h1>Get out there</h1>
        <h1 class="indent">and just go.</h1>
        <p class="mt-5 indent2">Just go is a web application where you can show off and share
          your travel experiences with other travel lovers.
          You can comment and contribute to others adventures too.</p>
      </div>
      <div class="col-6 mt-5">
        <p>Log-in or register below to get started.</p>
        <form v-if="loginForm" @submit.prevent="loginUser" class="loginMargin">
          <input type="email" v-model="creds.email" placeholder="email"><br>
          <input type="password" v-model="creds.password" placeholder="password"><br>
          <button type="submit" class="btn btn-info btn-sm">Login</button>

        </form>
        <form v-else @submit.prevent="register" class="loginMargin loginBox">
          <input type="text" v-model="newUser.name" placeholder="name"><br>
          <input type="email" v-model="newUser.email" placeholder="email"><br>
          <input type="password" v-model="newUser.password" placeholder="password"><br>
          <button type="submit" class="btn btn-info">Create Account</button>
        </form>
        <div @click="loginForm = !loginForm" class="pointer">
          <p v-if="loginForm">No account? Click here to Register</p>
          <p v-else>Already have an account? Click here to Login</p>
        </div>
      </div>
    </div>

    <!-- <div class="image">
      <img src="http://www.dollarnova.com/images/221.jpg">
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'auth',
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      }
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },

      loginUser() {
        this.$store.dispatch("login", this.creds);
      },



    },

  }

</script>

<style>
  .image {
    background-size: cover;
    background-repeat: no-repeat;
  }

  .sizing {
    margin-top: 10vh;
  }

  .indent {
    margin-left: 7rem;
  }

  .indent2 {
    margin-left: 4rem;
  }
</style>