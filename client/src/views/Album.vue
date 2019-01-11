<template>
  <div class="container-fluid">
    <div>
      <PostForm v-if="activeAlbum.length == 0 || activeAlbum[0].creatorId == user._id"></PostForm>
    </div>
    <!-- v-if="albums.authorId == user._id" -->
    <!-- <PostForm v-else-if="albums.authorId == user._id && albums.length < 0"></PostForm> -->
    <h5 v-if="activeAlbum.length > 0">{{activeAlbum[0].albumName}}</h5>

    <!-- <h5 else>Album Title</h5> -->

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
    created() {
      return this.$store.dispatch('getPostsByAlbumId', this.albumId)
    },
    mounted() {
      return this.$store.dispatch('getAlbums2', this.user._id)
    },
    computed: {
      user() {

        return this.$store.state.user
      },
      activeAlbum() {
        return this.$store.state.activeAlbum
      },
      albums() {
        return this.$store.state.albums
      }
    },
    methods: {
      deletePost(postData) {
        this.$store.dispatch('deletePost', postData)
      },
      setActivePost(p) {
        this.$store.commit('setPost', p)
      }
    },
    watch: {
      // activeAlbum(val) {
      //   this.$store.dispatch('getPostsByAlbumId', this.albumId)
      // },
      // albums(val) {
      //   this.$store.dispatch('getAlbums2', this.albumId)
      // }
    },
    props: ["albumId"],
    components: {
      PostForm
    }
  }

</script>

<style>
  .imgSize {
    max-width: 100%;
    margin-bottom: 4vh;
    object-fit: contain;
    max-height: 600px;

  }

  .cardSize {
    height: 100%;
  }
</style>