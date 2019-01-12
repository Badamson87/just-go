<template>
  <div class="profile container-fluid">
    <!-- need to be able to pull in user info from postid? -->
    <h3 class="mb-5">{{albums[0].authorName}}'s Albums</h3>
    <img src="">
    <div class="row">
      <div v-for="album in albums" class="col-3" :key="album._id">
        <router-link :to="{name: 'album', params: {albumId: album._id}}">
          <div class="card m-1">
            <h5 class="card-title">{{album.title}}</h5>
            <i class="far fa-images fa-5x"></i>

          </div>
        </router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

  export default {
    name: 'profile',
    data() {
      return {

      }
    },
    mounted() {
      return this.$store.dispatch('getAlbums', this.authorId)
    },
    computed: {
      albums() {
        return this.$store.state.albums
      }
    },
    methods: {
      setActiveAlbum(a) {
        this.$store.commit('setActiveAlbum', a)
      }
    },
    components: {

    },
    props: ['authorId'],
    watch: {
      // postId(val) {
      //   this.$store.dispatch('getComments', this.postId)
      // }
    }
  }
</script>

<style>


</style>