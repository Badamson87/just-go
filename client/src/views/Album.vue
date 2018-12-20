<template>
  <div class="container-fluid">
    <div class="row">
    
          <div v-for="post in activeAlbum" class="col-3 my-3">
              <div class="card cardSize">
                <img class="imgSize" :src='post.image' >
                <p>{{post.title}}</p>
                <p>{{post.description}}</p>
              </div>
      </div>
    </div>
  </div>
</template>

<script>
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

    },
    props: ["albumId"]
  }

</script>

<style>

.imgSize {
  width: 100%;
  margin-bottom: 4vh;
}
.cardSide {
  width: 129%;
  height: 119%;
}

</style>