<template>
  <div class="profile container-fluid">
    <!-- need to be able to pull in user info from postid? -->
    {{authorId}}
    <div class="row">
      <div v-for="album in albums" class="col-3" :key="album._id">
        <div class="card m-1">
          <h6 class="card-title">{{album.title}}</h6>
          <img src="">
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
      return this.$store.dispatch('getAlbums2', this.authorId)
    },
    computed: {
      // albums() {
      //   return this.$store.state.activeAlbum
      // }
    },
    methods: {
      // setActiveAlbum(a) {
      //   this.$store.commit('setActiveAlbum', a)
      // }
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