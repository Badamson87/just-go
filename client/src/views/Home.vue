<template>
  <div class="Home container">
    <!-- <img src="https://previews.123rf.com/images/dzein/dzein1512/dzein151200003/48820352-travel-the-world-hand-drawing-with-famous-landmarks-and-places-in-colorful-watercolor-background-wit.jpg"> -->
    <div class="row">
      <div class="col-12">
        <h1>All Posts</h1>
        <div class="row">
          <div class="allPosts col-12">
            <div v-for="post in posts" class="col-3 my-3">
              <div class="card">
                <div class="card-body borderBox">
                  <h5>{{post.title}}</h5>
                  <img class="card-img-top" :src="post.image">

                  <p class="card-text">{{post.rating}}</p>
                </div>
              </div>

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

<style scoped>
  .allPosts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .borderBox {
    border: black solid 1px;
    box-shadow: 10px 10px 10px;
    height: 150px;

  }
</style>