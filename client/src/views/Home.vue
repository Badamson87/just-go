<template>
  <div class="Home container-fluid">
    <div class="row">
      <div class="col-12">
        <h5>All Posts</h5>
        <div class="row">
          <div class="allPosts col-12">
            <div v-for="post in posts" :key="post._id" class="col-3 my-4">
              <div class="card">
                <div class="card-body borderBox">
                  <div @click="setActivePost(post)">
                    <router-link :to="{name: 'post', params: {postId: post._id, post: post}}">
                      <h5>{{post.title}}</h5>
                      <img class=" img-fluid" :src="post.image">
                      <p class="card-text">{{post.rating}}</p>
                    </router-link>
                  </div>
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
        search: ''
      }
    },
    mounted() {
      this.$store.dispatch("getAllPosts")
    },
    computed: {
      posts() {
        return this.$store.state.posts
      },
      filteredPosts: function () {
        return this.posts.filter((post) => {
          return post.title.match(this.search)
        })
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