<template>
  <div class="userInfo card cardBorder">
    <p>User Info</p>
    <div class="imgCard">
      <img class="userImg" :src="user.image" />
    </div>
    <h5 class="mt-4">{{user.name}}</h5>

  </div>
</template>

<!-- need user info get requests -->
<script>
  export default {
    name: 'UserInfo',
    data() {
      return {

      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {}
  }

</script>

<style>
  .cardBorder {
    border: solid rgb(159, 158, 158) 1px;
  }

  .userImg {
    height: 20vh;
    width: 20vh;
  }
</style>