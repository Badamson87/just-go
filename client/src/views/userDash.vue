<template>
  <div class="userDash container">
    <h1 class="mgBottom">Welcome to your Dashboard</h1>
    <div class="row">
      <div class="col-6">
        <UserInfo></UserInfo>
      </div>
      <div class="col-6">
        <div class="col-12 uDSpacing">
          <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal">
            Create Album
          </button>
          <!-- </div> -->
          <!-- <div class="col-6"> -->
          <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#example">
            Create BucketList
          </button>

        </div>
        <!-- Modal -->

        <PostForm></PostForm>

      </div>

    </div>

    <div class="uDMargin">

      <div class="uDTitle">
        <h5 class="uDTitle ">My Albums</h5>
        <button type="button" class="icon" data-toggle="modal" data-target="#exampleModal">
          <i class="fas fa-plus-circle"></i>
        </button>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create a new album.</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <AlbumForm></AlbumForm>
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
            </div>
          </div>
        </div>
      </div>



      <Albums class="mgBottom"></Albums>

      <div class="uDTitle">
        <h5 class="uDTitle ">My Bucket Lists</h5>
        <!-- Button trigger modal -->
        <button type="button" class="icon" data-toggle="modal" data-target="#example">
          <i class="fas fa-plus-circle"></i>
        </button>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="example" tabindex="-1" role="dialog" aria-labelledby="exampl" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="example">Create a bucketlist.</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <bucketlistform></bucketlistform>
            </div>
          </div>
        </div>
      </div>

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
    align-items: flex-end;
  }

  .uDMargin {
    margin-top: 15vh;
  }

  .uDSpacing {
    display: flex;
    justify-content: space-around;
    margin-bottom: 3vh;
  }
</style>