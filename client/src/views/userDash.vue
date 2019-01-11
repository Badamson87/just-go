<template>
  <div class="userDash container">
    <h1 class="mgBottom">Welcome to your Dashboard</h1>
    <div class="row">
      <div class="col-6">
        <UserInfo></UserInfo>
      </div>
      <div class="col-6">
        <AlbumForm></AlbumForm>
        <PostForm></PostForm>
      </div>
    </div>

    <div class="uDMargin">
      <h5 class="uDTitle ">My Albums</h5>
      <Albums class="mgBottom"></Albums>

      <bucketlistform></bucketlistform>
      <h5 class="uDTitle ">My Bucket Lists</h5>
      <BucketLists></BucketLists>
    </div>
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

  .mgBottom {
    margin-bottom: 5vh;

  }

  .uDTitle {
    display: flex;
    flex-direction: row;
  }

  .uDMargin {
    margin-top: 15vh;
  }
</style>