<template>
  <div class="container-fluid">
    <PostForm v-if="activeAlbum[0].creatorId == user._id || {}"></PostForm>
    <!-- v-if here -- v-if="user._id === activeAlbum.creatorId"-->
    <div v-else>
      <h4>You have no posts in this album</h4>
    </div>
    <h5>{{activeAlbum.title}}</h5>

    <div class="row">
      <div v-for="post in activeAlbum" class="col-3 my-3">
        <div class="card cardSize" @click="setActivePost(post)">
          <router-link :to="{name: 'post', params: {postId: post._id, post: post}}">
            <img class="card-img-top" :src='post.image'>
          </router-link>
          <p>{{post.title}}</p>
          <p>{{post.location}}</p>
          <p>{{post.description}}</p>
          <button v-if="activeAlbum[0].creatorId == user._id" class="btn btn-info" @click="deletePost(post)">Delete</button>
          <!-- add v-if here to be able to delete if they are te user -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PostForm from '@/components/UserDash/createPost.vue'
  export default {
    name: 'album',
    data() {
      return {

      }
    },
    mounted() {
      return this.$store.dispatch('getPostsByAlbumId', this.albumId)
    },
    computed: {
      activeAlbum() {
        return this.$store.state.activeAlbum
      },
      user() {
        return this.$store.state.user
      },
    },
    methods: {
      deletePost(postData) {
        this.$store.dispatch('deletePost', postData)
      },
      setActivePost(p) {
        this.$store.commit('setPost', p)
      }
    },
    props: ["albumId"],
    components: {
      PostForm
    }
  }

</script>

<style>
  .imgSize {
    width: 100%;
    margin-bottom: 4vh;
    object-fit: contain;
    max-height: 25vh;
  }

  .cardSize {
    height: 100%;
  }
</style>