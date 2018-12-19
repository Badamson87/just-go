<template>
  <div class="post container">
    <div class="row">
      <div class="col-6">
        <h1>{{post.title}}</h1>
        <h4>{{post.location}}</h4>
        <h4>{{post.rating}}</h4>
        <p>{{post.decription}}</p>
      </div>
      <div class="col-6">
        <img :src="post.image">
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- do we want to build comments as a component or inside the the post view? -->
        <comments></comments>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'post',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>


</style>