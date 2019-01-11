<template>
    <div class="bucketlistForm form-group">
        <h5>Create Bucket List</h5>
        <form @submit.prevent="addBucketList">
            <input class="form-control" type="text" placeholder="Bucket List Name" v-model="newBucketList.title">
            <button class="btn btn-sm mt-1 btn-danger" type="submit">Create</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'bucketlistform',
        data() {
            return {
                newBucketList: {
                    title: '',
                    isBucketlist: true
                }
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            addBucketList() {
                this.newBucketList.authorName = this.user.name
                this.$store.dispatch('createBL', this.newBucketList)
            }
        }
    }

</script>

<style>


</style>