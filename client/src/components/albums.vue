<template>
  <div class="row">
      <div v-for="album in albums" class="col-3" :key="album._id">
        <div class="card m-1">
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
  flex-direction: row;
  flex-wrap: wrap
}

</style>
