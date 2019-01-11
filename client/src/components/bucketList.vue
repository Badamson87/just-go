<template>
    <div class="row">
        <div v-for="bucketList in bucketLists" :albumId="bucketList._id" class="col-3" :key="bucketList._id">
            <div class="card m-1">
                <router-link :to="{name: 'album', params: {albumId: bucketList._id}}">
                    <h5 class="card-title">{{bucketList.title}}</h5>
                    <i class="fas fa-globe-americas fa-5x"></i>
                    <!-- <button class="btn btn-info" @click="deleteBL(bucketList)">Delete</button> -->
                </router-link>
                <button class="icon" @click="deleteBL(bucketList)"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BucketLists',
        data() {
            return {

            }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            bucketLists() {
                return this.$store.state.bucketLists
            }
        },
        methods: {
            getBucketLists(albumId) {
                this.$store.dispatch('getBL', albumId)
            },
            deleteBL(bucketList) {
                this.$store.dispatch('deleteBL', bucketList)
            }
        },
        mounted() {
            this.$store.dispatch('getBL')
        },
        props: ["albumId, authorId"]
    }

</script>

<style>


</style>