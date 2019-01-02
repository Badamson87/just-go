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
          <input type="email" v-model="creds.email" placeholder="email" class="inputStyle"><br>
          <input type="password" v-model="creds.password" placeholder="password" class="inputStyle"><br>
          <button type="submit" class="btn btn-danger btn-sm mt-1">Login</button>

        </form>
        <form v-else @submit.prevent="register" class="loginMargin loginBox">
          <input type="text" v-model="newUser.name" placeholder="name" class="inputStyle"><br>
          <input type="email" v-model="newUser.email" placeholder="email" class="inputStyle"><br>
          <input type="password" v-model="newUser.password" placeholder="password" class="inputStyle"><br>
          <button type="submit" class="btn btn-danger btn-sm mt-1">Create Account</button>
        </form>
        <div @click="loginForm = !loginForm" class="pointer">
          <p v-if="loginForm">No account? Click here to Register</p>
          <p v-else>Already have an account? Click here to Login</p>
        </div>
      </div>
    </div>
    <div class="row">
      <img src="../../public/assets/imageFront2.png" class="col-12 imgFront">
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

  /* .sizing {
    margin-top: 10vh;
  } */

  .indent {
    margin-left: 7rem;
  }

  .indent2 {
    margin-left: 4rem;
  }

  .inputStyle {
    border: 1px solid #ced4da;
    border-radius: .25rem;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  .imgFront {
    max-height: 50vh;
    margin-top: 3vh;
  }
</style>