<template>
  <div class="albums">
    <div class="row">
      <div class="col-12"><h5>My Albums</h5></div>
    </div>
    <div class="row card-deck ">
        <div v-for="album in albums" class="card col-3 mt-3" :key="album._id">
        <p class="card-title">{{album.title}}</p>
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
        user(){
          
            return this.$store.state.user
        },
        albums() {
          return this.$store.state.albums
        }
    },
    methods: {}, 
    mounted() {
     
    },
  }

</script>

<style>
.albumsWrap{
  display: flex;
  flex-wrap: wrap
}

</style>
