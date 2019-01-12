<template>
  <div class="post container">
    <div class="row">
      <div class="col-12">
        <div v-if="edit">
          <form @submit.prevent="editPost">
            <!-- this is a comment -->
            <div class="form-group">
              <label for="post">Edit Post</label>
              <input class="form-control" type="text" placeholder="Title" v-model="postData.title">
              <input class="form-control" type="text" placeholder="Location" v-model="postData.location">
              <textarea class="form-control" type="text" placeholder="Description" v-model="postData.description"></textarea>

              <input class="form-control" type="text" v-model="postData.image" placeholder="Image URL">
              <button type="submit" class="btn mt-1 btn-sm btn-danger">Save</button>
            </div>
          </form>
        </div>

        <div v-else class="bgColor">
          <div class="row">
            <div class="col big-box">
              <router-link :to='{name:"profile", params: {authorId: post.creatorId}}' class="col-6">
                <h3 v-if="!post.isBucketlist"> {{post.creatorName}}</h3>
                <!-- <h3 v-else> </h3> -->
              </router-link>
            </div>
            <div class="col">
              <div class="row">
                <div class="col mini-box textHeight">
                  <router-link :to="{name: 'album', params: {albumId: post.albumId}}" class="col-6">
                    <h5>Album: {{post.albumName}}</h5>
                  </router-link>
                </div>
              </div>
              <div class="row">
                <div class="col mini-box">
                  <h5><i class="fas fa-map-marker-alt"></i> {{post.location}}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="row">
      <div class="col m-1">
        <button v-if="post.creatorId == user._id" @click="editToggle" class="btn btn-sm mx-2 icon"><i class="far fa-edit"></i></button>
        <button v-if="post.creatorId == user._id" @click="deletePost(post._id)" class="btn btn-sm icon mx-2"><i class="far fa-trash-alt"></i></button>
      </div>
      <!-- <input v-if="postInfo.edit" v-model="postInfo.location" @blur="postInfo.edit = false" @keyup.enter="postInfo.edit=false"> -->
    </div>

    <div class="row">
      <div class="col-12 owner">
        <img class="image" :src="post.image">
        <div class="col-12 visitor">
          <div class="dropdown">
            <button class="btn btn-sm dropdown-toggle icon" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false"><i class="fas fa-plus-circle"> </i> Add post to bucket
              list
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <p class="dropdown-item action" v-for="bucketList in bucketLists" @click="addToBucket(bucketList._id)"
                :albumData="bucketList" v-bind:value="bucketList._id">{{bucketList.title}}</p>
            </div>
          </div>
        </div>
        <h6 class="mt-4">{{post.title}}</h6>
        <p>{{post.description}}</p>
      </div>
    </div>

    <div class="col-12">
      <comments v-bind:postId="post._id"></comments>
      <!-- postId="post._id" -->
    </div>
  </div>

</template>

<script>
  import comments from '@/components/comments.vue'
  export default {
    name: 'post',
    props: ['postId'],
    // data() {} 
    data() {
      return {
        postData: {},
        edit: false
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
        return this.$store.state.activePost || ''
      },
      bucketLists() {
        return this.$store.state.bucketLists
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      deletePost() {
        this.$store.dispatch('deletePost', this.post)
      },
      addToBucket(albumId) {
        let payload = {
          postId: this.post._id,
          postData: this.post
        }
        console.log(payload)
        this.$store.dispatch('addToBucket', { payload, albumId })
      },
      editToggle() {
        if (!this.edit) {
          this.postData = this.post
        }
        this.edit = !this.edit

      },
      editPost() {
        this.$store.dispatch('editPost', this.postData)
        this.edit = false
      }
    },
    watch: {
      post() {
        this.$store.dispatch('getPostById', this.postId)
      }
      // albums(val) {
      //   this.$store.dispatch('getAlbums2', this.albumId)
      // }
    },

    components: {
      comments
    }
  }


</script>

<style scoped>
  .image {
    width: 75%;
    padding-left: 1rem;
  }

  .action {
    cursor: pointer;
  }

  .bgColor {
    background-color: #efefef85;
  }

  .right {
    display: flex;
    justify-content: right;
  }

  .textHeight {
    height: 50px;
  }

  /* .owner {} */
</style>