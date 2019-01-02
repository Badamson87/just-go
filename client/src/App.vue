<template>
  <div id="app">
    <div id="nav" class="mb-5">
      <nav class="navbar navbar-expand-sm navbar-muted bg-muted navColor">
        <img src="../public/assets/world.png" class="icon">
        <a class="navbar-brand headerFont" href="#/">just go</a>
        <!-- <a><img class="navbar-brand" src="/public/assets/just-go-logo.png"></a> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#/userDash" v-if="user._id">UserDash</a>
              <a class="nav-link" href="#/auth" @click="logout" v-if="!user._id"></a>
            </li>
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> -->
        </div>
        <ul class="navbar-nav mr-auto px-3">
          <li class="nav-item">
            <a class="nav-link" href="#/auth" v-if="!user._id">Login/Register</a>
            <a class="nav-link" href="#/auth" @click="logout" v-if="user._id">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      logout() {
        this.$store.dispatch("logout")
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
    color: rgb(34, 34, 34);
  }

  .icon {
    height: 5vh;
  }

  .navColor {
    background-color: #EFEFEF;
  }

  #nav a {
    color: #0e0e0e;
  }

  .headerFont {
    font-family: Happy Monkey;
  }

  #nav a.router-link-exact-active {
    color: #b80202;
  }
</style>