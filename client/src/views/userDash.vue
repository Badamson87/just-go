<template>
  <div class="userDash container">
    <h1>Welcome to your Dashboard</h1>
    <div class="row">
      <div class="col-5">
        <UserInfo></UserInfo>
      </div>
      <div class="col-5">
        <AlbumForm></AlbumForm>
        <PostForm></PostForm>
      </div>
    </div>
    <h5>My Albums</h5>
    <Albums></Albums>

    <bucketlistform></bucketlistform>
    <h5>My Bucket Lists</h5>
    <BucketLists></BucketLists>
  </div>
</template>


<script>
  import AlbumForm from '@/components/UserDash/createAlbum.vue'
  import PostForm from '@/components/UserDash/createPost.vue'
  import UserInfo from '@/components/UserDash/userInfo.vue'
  import Albums from '@/components/albums.vue'
  import bucketlistform from '@/components/UserDash/createbucketlist.vue'
  import BucketLists from '@/components/bucketList.vue'
  export default {
    name: 'userDash',
    data() {
      return {

      }
    },
    computed: {},
    components: {
      AlbumForm,
      PostForm,
      UserInfo,
      Albums,
      bucketlistform,
      BucketLists
    }
  }

</script>

<style>
  body {
    background-color: #d3e6ec;
  }
</style>