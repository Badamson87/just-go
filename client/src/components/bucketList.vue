<template>
 <div class="row">
     <h1>This is data</h1>
    <div v-for="bucketList in bucketLists" :albumId="bucketList._id" class="col-3" :key="bucketList._id">
        <div  class="card m-1"> 
            <router-link :to="{name: 'album', params: {albumId: 'bucketList.authorId'}}">
            <p class="card-title">{{bucketList.title}}</p>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'BucketLists',
    data() {
      return {

      }
    },
    computed: {
        user(){
            return this.$store.state.user
        }, 
        bucketLists(){
            return this.$store.state.bucketLists
        }
    },
    methods: {
        getBucketLists(albumId){
            this.$store.dispatch('getBL', albumId)
        }
    },
    mounted() {
        this.$store.dispatch('getBL')
    },
    props:["albumId, authorId"]
  }

</script>

<style>


</style>
