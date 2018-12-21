<template>
  <div class="container-fluid">
   <PostForm></PostForm> 
    <div class="row">
          <div v-for="post in activeAlbum" class="col-3 my-3">
              <div class="card cardSize">
                <img class="imgSize" :src='post.image' >
                <p>{{post.title}}</p>
                <p>{{post.description}}</p>
                <button @click="deletePost(post)">Delete</button>
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
      }

    },
    methods: {
      deletePost(postData){
        this.$store.dispatch('deletePost', postData)
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
}
.cardSize {
  height: 119%;
}

</style>