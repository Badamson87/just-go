<template>
  <div class="post container">
    <div class="row">
      <div class="col-6">
        <h1>{{post.title}}</h1>
        <h4>{{post.location}}</h4>
        <h4>{{post.rating}}</h4>
        <p>{{post.description}}</p>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 owner">
            <button @click="" class="btn btn-warning">Edit</button>
            <button @click="deletePost(post._id)" class="btn btn-danger">Delete</button>
          </div>
          <div class="col-12 visitor">
            <button @click="">Add to Bucket</button>
            <button @click="">Go to this post album</button>
            <button @click="">Follow user</button>
          </div>
        </div>
        <img class="image" :src="post.image">
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- do we want to build comments as a component or inside the the post view? -->
        <comments></comments>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'post',
    props: ['postId'],
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
    },
    computed: {
      // comments() {
      //   return this.$store.state.comments
      // },
      post() {
        return this.$store.state.activePost
      }
    },
    methods: {
      addComment() {
        this.newComment.postId = this.postId
        this.$store.dispatch('addComment', this.newComment);
        this.newComment = { title: "", authorId: "", postId: "", description: "", userName: "" }
      },
      deletePost() {
        this.$store.dispatch('deletePost', postId)
      }
    }
  }

</script>

<style scoped>
  .image {
    width: 43vw;
    padding-left: 1rem
  }

  .owner {}
</style>