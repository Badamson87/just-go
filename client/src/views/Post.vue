<template>
  <div class="post container">
    <div class="row">
      <div v-if="edit">
        <form @submit.prevent="editPost">
          <div class="form-group">
            <label for="post">Edit Post</label>
            <input class="form-control" type="text" placeholder="Title" v-model="postData.title">
            <input class="form-control" type="text" placeholder="Location" v-model="postData.location">
            <!-- goelocation?? -->
            <textarea class="form-control" type="text" placeholder="Description" v-model="postData.description"></textarea>
            <!-- change back to type=file and then use base 64 encoding accept="image/*"  -->
            <input class="form-control" type="text" v-model="postData.image" placeholder="Image URL">
            <button type="submit" class="btn mt-1 btn-sm btn-danger">Save</button>
          </div>
        </form>
      </div>
      <div v-else class="col-6">
        <h1>{{post.title}}</h1>
        <router-link :to="{name: 'album', params: {albumId: post.albumId}}">
          <p>{{post.albumName}}</p>
        </router-link>
        <router-link :to='{name:"profile", params: {authorId: post.creatorId}}'>
          <h4>{{post.creatorName}}</h4>
        </router-link>

        <!-- <input v-if="postInfo.edit" v-model="postInfo.location" @blur="postInfo.edit = false" @keyup.enter="postInfo.edit=false"> -->

        <h4>{{post.location}}</h4>

        <h4>{{post.rating}}</h4>
        <div>
          <p>{{post.description}}</p>

          <!-- youll still have to handle your saving event -->
          <!-- <input v-else type="text" name="" id="" v-model="post.description"> -->
        </div>


      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 owner">

            <img class="image" :src="post.image">

            <button v-if="post.creatorId == user._id" @click="editToggle" class="btn btn-warning">Edit</button>
            <button v-if="post.creatorId == user._id" @click="deletePost(post._id)" class="btn btn-danger">Delete</button>

            <div class="col-12 visitor">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Add to
                  Bucket
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <p class="dropdown-item action" v-for="bucketList in bucketLists" @click="addToBucket(bucketList._id)"
                    :albumData="bucketList" v-bind:value="bucketList._id">{{bucketList.title}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12">
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
    width: 43vw;
    padding-left: 1rem
  }

  .action {
    cursor: pointer;
  }

  /* .owner {} */
</style>