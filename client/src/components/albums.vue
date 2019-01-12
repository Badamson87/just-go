<template>
  <div class="row">


    <div v-for="album in albums" @click="setActiveAlbum(album)" class="col-3" :key="album._id">
      <div class="card m-1">
        <router-link :to="{name: 'album', params: {albumId: album._id}}">
          <h5 class="card-title">{{album.title}}</h5>
          <!-- <img src="ablum.image"> -->
          <i class="far fa-images fa-5x"></i>
        </router-link>
        <button class="icon" @click="deleteAlbum(album)"><i class="far fa-trash-alt"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Albums',
    data() {
      return {

      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      albums() {
        return this.$store.state.albums
      }
    },
    methods: {
      getPostsByAlbumId(albumId) {
        this.$store.dispatch('getPostsByAlbumId', albumId)
      },
      deleteAlbum(album) {
        this.$store.dispatch('deleteAlbum', album)
      },
      setActiveAlbum(album) {
        this.$store.commit('setActiveAlbum', album)
      }
    },
    mounted() {
      this.$store.dispatch("getAlbums2", this.user._id)
    },
    watch: {
      user(val) {
        this.$store.dispatch('getAlbums2', this.user._id)
      }
    },
  }

</script>

<style>
  .albumsWrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
  }

  .icon {
    cursor: pointer;
    background-color: rgba(240, 248, 255, 0);
    border-color: rgba(240, 248, 255, 0);
  }

  a {
    color: rgb(4, 4, 4);
  }

  a:hover {
    color: rgb(63, 63, 63);
    text-decoration: none;
  }
</style>