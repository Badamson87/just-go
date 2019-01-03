<template>
  <div>
    <div class="">
      <h2>Upload file</h2>
      <div>
        <vue-base64-file-upload class="v1" accept="image/png,image/jpeg" image-class="v1-image" input-class="v1-image"
          :max-size="customImageMaxSize" @size-exceeded="onSizeExceeded" @file="onFile" @load="onLoad" />
      </div>

    </div>
    <div class="userInfo card cardBorder">
      <p>User Info</p>
      <div class="imgCard">
        <img class="userImg" :src="user.image" />
      </div>
      <h5 class="mt-4">{{user.name}}</h5>
      <!-- <input type="file" @change="onFileChanged">
        <button @click="onUpload">Upload!</button> -->
    </div>
  </div>
</template>

<!-- need user info get requests -->

<script>
  import VueBase64FileUpload from 'vue-base64-file-upload';


  export default {
    name: 'UserInfo',
    data() {
      return {
        customImageMaxSize: 3
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      onFileChanged(event) {
        this.selectedFile = event.target.files[0]
      },
      onFile(file) {
        console.log(file); // file object
      },

      onLoad(dataUri) {
        dispatch(dataUri); // data-uri string
      },

      onSizeExceeded(size) {
        alert(`Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`);
      }
      // onUpload() {
      //   axios.post('my-domain.com/file-upload', this.selectedFile)
      // }
    },
    components: {
      VueBase64FileUpload
    },
  }

</script>

<style>
  .cardBorder {
    border: solid rgb(159, 158, 158) 1px;
  }

  .userImg {
    height: 20vh;
    width: 20vh;
  }

  .v1 {
    size: 200px
  }
</style>