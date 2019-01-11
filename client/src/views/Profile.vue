<template>
  <div class="profile container-fluid">
    <h1>Profile Page</h1>
    <!-- need to be able to pull in user info from postid? -->
    <h4>{{albums[0].authorName}}</h4>
    <div class="row">
      <div v-for="album in albums" class="col-3" :key="album._id">
        <router-link :to="{name: 'album', params: {albumId: album._id}}">
          <div class="card m-1">
            <h6 class="card-title">{{album.title}}</h6>
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