<template>
  <div class="userInfo card cardBorder offset-2">
    <p>User Info</p>
    <div class="imgCard">
      <img class="imgSize" :src="user.image" />
    </div>
    <h5>{{user.name}}</h5>

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
</style>