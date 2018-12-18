<template>
  <div class="userDash" >
    <h1>This is the userDash</h1>
    <div class="row">
      <div class="col-5">
        <UserInfo></UserInfo>
      </div>
      <div class="col-5">
        <AlbumForm></AlbumForm>
        <PostForm></PostForm>
      </div>
    </div>
  </div>
</template>


<script>
import AlbumForm from '@/components/UserDash/createAlbum.vue'
import PostForm from '@/components/UserDash/createPost.vue'
import UserInfo from '@/components/UserDash/userInfo.vue'
  export default {
    name: 'userDash',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}, 
    components: {
      AlbumForm,
      PostForm, 
      UserInfo
    }
  }

</script>

<style>


</style>

