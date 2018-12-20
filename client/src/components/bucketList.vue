<template>
 <div class="row">
    <div v-for="bucketList in bucketLists" :albumId="bucketList._id" class="col-3" :key="bucketList._id">
        <div  class="card m-1"> 
            <button @click="deleteBL(bucketList)">Delete</button>
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
        },
        deleteBL(bucketList){
            this.$store.dispatch('deleteBL', bucketList)
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
