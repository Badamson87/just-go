<template>
  <div class="Home container-fluid">
    <div class="row">
      <div class="col-12">
        <h5>All Posts</h5>

        <div class="row">
          <!-- <div class="allPosts col-12"> -->
          <div v-for="post in posts" :key="post._id" class="col-3 my-2">
            <!-- <div class="card"> -->
            <div class="card cardSize" @click="setActivePost(post)">
              <!-- <div @click="setActivePost(post)"> -->
              <router-link :to="{name: 'post', params: {postId: post._id, post: post}}">
                <img class="imgSize" :src="post.image">
                <p>{{post.title}}</p>
                <p class="card-text">{{post.rating}}</p>
              </router-link>
            </div>
            <!-- </div> -->
            <!-- </div> -->
            <!-- </div> -->
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
    methods: {
      setActivePost(p) {
        this.$store.commit('setPost', p)
      }
    }
  }

</script>

<style scoped>
  .allPosts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .borderBox {
    /* border: black solid 1px; */
    /* box-shadow: 10px 10px 10px; */
    height: 13rem;

  }

  .img-fluid {
    max-width: 100%;
    max-height: 8rem
  }
</style>