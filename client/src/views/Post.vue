<template>
  <div class="post container">
    <div class="row">
      <div class="col-6">
        <h1>{{post.title}}</h1>
        <h4>author name:{{post.creatorId}}</h4>
        <h4>{{post.location}}</h4>
        <h4>{{post.rating}}</h4>
        <p>{{post.description}}</p>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 owner">
            <!-- <button @click="editPost(post._id)" class="btn btn-warning">Edit</button> -->
            <button @click="deletePost(post._id)" class="btn btn-danger">Delete</button>
          </div>
          <div class="col-12 visitor">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Add to bucket
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <p class="dropdown-item action" v-for="bucketList in bucketLists" @click="addToBucket(bucketList)"
                  :albumData="album" v-bind:value="bucketList._id">{{bucketList.title}}</p>
              </div>
            </div>
            <button class="btn btn-info" @click="">Album</button>
            <button class="btn btn-info" @click="">Follow</button>
          </div>
        </div>
        <img class="image" :src="post.image">
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <!-- do we want to build comments as a component or inside the the post view? -->
        <comments v-bind:postId="post._id"></comments>
        <!-- postId="post._id" -->
      </div>
    </div>

  </div>
</template>

<script>
  import comments from '@/components/comments.vue'
  export default {
    name: 'post',
    props: ['postId', "postData"],
    // components: {
    //   comments
    // },
    data() {
      return {
      }
    },
    mounted() {
      if (!this.post._id) {
        this.$store.dispatch("getPostById", this.$route.params.postId)
      }
      this.$store.dispatch('getBL')

    },
    computed: {
      // comments() {
      //   return this.$store.state.comments
      // },
      post() {
        return this.$store.state.activePost
      },
      bucketLists() {
        return this.$store.state.bucketLists
      }

    },
    methods: {
      deletePost() {
        this.$store.dispatch('deletePost', this.postId)
      },
    },
    // editPost() {
    //   this.$store.dispatch('editPost', postId)
    // },
    // addToBucket(){
    //   this.$store.
    // }
    components: {
      comments
      // addToBucket(albumId) {
      //   let payload = {
      //     postId: this.post._id,
      // postData: this.postData
      //     }
      //     console.log(payload)
      //     this.$store.dispatch('addToBucket', { payload })
      //   }
    }
  }


</script>

<style scoped>
  .image {
    width: 43vw;
    padding-left: 1rem
  }

  /* .owner {} */
</style>