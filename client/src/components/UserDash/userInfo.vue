<template>
  <div>
    <div class="position">
      <h5>{{user.name}}</h5>
    </div>
    <!-- <button class="btn btn-info" @click="addBio">Add Bio</button> -->
    <div>
      <vue-base64-file-upload :disable-preview="true" class="v1-image" accept="image/png,image/jpeg" image-class="v1-image"
        input-class="v1-image" :max-size="customImageMaxSize" @size-exceeded="onSizeExceeded" @file="onFile" @load="onLoad" />
    </div>
    <div class="userInfo">
      <img class="v1-image" :src="user.image" alt="">
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
    max-width: 60%;
    max-height: 40px;
  }

  .v1-image {
    object-fit: fill;
    max-width: 60%;
    max-height: 40%;
  }

  .position {
    max-width: 60%
  }
</style>