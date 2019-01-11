<template>
  <div class="Home container-fluid">
    <div class="row">
      <div class="col-12">
        <input type="text" v-model="search" class="form-control" placeholder="search posts" />
        <li v-show="'search'.includes(filteredPosts)">
        </li>

        <div class="card-columns">

          <div v-for="post in filteredPosts" class="">
            <div class="card" @click="setActivePost(post)">
              <router-link :to="{name: 'post', params: {postId: post._id, post: post}}">
                <img class="imgSize" :src='post.image'>
              </router-link>
              <p>{{post.title}}</p>
              <p>{{post.location}}</p>
              <p>{{post.creatorName}}</p>
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
          return post.title.toLowerCase().includes(this.search.toLowerCase()) || post.location.toLowerCase().includes(this.search.toLowerCase())
        })
      },
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
    height: 13rem;
  }

  .img-fluid {
    max-width: 100%;
    max-height: 8rem
  }

  .imgBox {
    height: 25px;
    width: 25px;
  }
</style>