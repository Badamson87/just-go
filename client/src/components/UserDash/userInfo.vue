<template>
  <div>
    <div class="">
      <h2>Upload file</h2>
      <div class="position">
        <div>
          <vue-base64-file-upload :disable-preview="true" class="v1-image" accept="image/png,image/jpeg" image-class="v1-image"
            input-class="v1-image" :max-size="customImageMaxSize" @size-exceeded="onSizeExceeded" @file="onFile" @load="onLoad" />
        </div>
        <button class="btn btn-info" @click="addBio">Add Bio</button>
        <div class="userInfo card cardBorder">
          <h5 class="mt-4">{{user.name}}</h5>
          <img class="v1-image" :src="user.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
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
        this.$store.dispatch('saveUpload', { image: dataUri }); // data-uri string
      },

      onSizeExceeded(size) {
        alert(`Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`);
      },
      addBio() {

      }
    },
    components: {
      VueBase64FileUpload
    }
  }

</script>

<style>
  .cardBorder {
    border: solid rgb(159, 158, 158) 1px;
  }

  .userInfo {
    max-height: 100px;
    max-width: 30vw;
  }

  .v1-image {
    object-fit: fill;
    max-width: 30%;
    max-height: 30%;
  }
</style>