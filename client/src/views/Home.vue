<template>
  <div class="Home container">
    <!-- <img src="https://previews.123rf.com/images/dzein/dzein1512/dzein151200003/48820352-travel-the-world-hand-drawing-with-famous-landmarks-and-places-in-colorful-watercolor-background-wit.jpg"> -->
    <div class="row">
      <div class="col-12">
        <h1>All Posts</h1>
        <div class="row d-flex justify-content-around align-items-end">
          <div class="col-12">
            <div v-for="post in posts" class="col-2">
              {{post.title}}{{post.image}}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch("getAllPosts")
    },
    computed: {
      posts() {
        return this.$store.state.posts
      }
    },
    methods: {}
  }

</script>

<style>


</style>