// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import Vuex from 'vuex'
import router from './router'
// @ts-ignore
import Axios from 'axios'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: '//localhost:3000/auth/',
  timeout: 6000,
  withCredentials: true
})
let api = Axios.create({
  baseURL: '//localhost:3000/api/',
  timeout: 6000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    albums: [],
    activePost: {},
    posts: [],
    activeAlbum: {},
    bucketLists: [],
    comments: [],
  },

  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setAlbums(state, albums) {
      state.albums = albums
    },
    setPost(state, post) {
      state.activePost = post
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    setActiveAlbum(state, activeAlbum) {
      state.activeAlbum = activeAlbum
    },
    logout(state) {
      state.user = {}
    },
    // setPostById(state, post) {
    //   state.posts = post
    // }, 
    setBL(state, BL) {
      state.bucketLists = BL
    },
    setComment(state, payload) {
      state.comments = payload
      // Vue.set(state.comments, payload.postId, payload.comments)
    },
    setActiveComments(state, payload) {
      // state.activeComments = activeComments
      Vue.set(state.comments, payload.postId, payload.comments)
    }

  },
  actions: {

    //posts
    // @ts-ignore
    createPost({ commit, dispatch }, formData) {
      api.post('posts', formData)
        .then(res => {
          console.log(res.data)
          commit("setPost", res.data)
          dispatch('getPostsByAlbumId', res.data.albumId)
          // dispatch("editAlbum", res.data.data.albumId)
        })
    },
    // @ts-ignore
    getPostById({ commit, dispatch }, postId) {
      api.get('posts/' + postId)
        .then(res => {
          commit('setPost', res.data)
        })
    },
    // @ts-ignore
    getAllPosts({ commit, dispatch }) {
      api.get('posts/')
        .then(res => {
          console.log(res)
          commit('setPosts', res.data)
        })
    },
    //get post by album id
    // @ts-ignore
    getPostsByAlbumId({ commit, dispatch }, albumId) {
      api.get("posts/album/" + albumId)
        .then(res => {
          console.log('Posts by album', res.data)
          commit('setActiveAlbum', res.data)
          // router.push({name:'album'})
        })
    },
    // @ts-ignore
    deletePost({ commit, dispatch }, postData) {
      api.delete('posts/' + postData._id)
        // @ts-ignore
        .then(res => {
          dispatch('getPostsByAlbumId', postData.albumId)
        })
    },

    //bucket list

    // @ts-ignore
    createBL({ commit, dispatch }, bucketListData) {
      api.post('albums', bucketListData)
        .then(res => {
          console.log("bucketlist :", res.data)
          dispatch('getBL', res.data.authorId)
        })
    },
    // @ts-ignore
    getBL({ commit, dispatch }) {
      api.get('albums/bucketlists/')
        .then(res => {
          commit('setBL', res.data)
        })
    },
    // @ts-ignore
    deleteBL({ commit, dispatch }, bucketList) {
      api.delete('albums/' + bucketList._id)
        .then(res => {
          dispatch('getBL', res.data)
        })
    },
    addToBucket({ commit, dispatch }, payload) {
      debugger
      api.post('/clone' + payload)
        .then(res => {
          console.log(res)
          dispatch('getBL')
        })
    },

    //albums
    // @ts-ignore
    getAlbums({ commit, dispatch }, data) {
      debugger
      api.get('albums/user/' + data.authorId)
        .then(res => {
          console.log('albums: ', res)
          commit('setAlbums', res.data)
        })
    },
    // @ts-ignore
    addAlbum({ commit, dispatch }, albumData) {
      debugger
      api.post('albums', albumData)
        .then(res => {
          // commit('setAlbums', res.data)
          dispatch('getAlbums', res.data)
        })
    },
    // @ts-ignore
    editAlbum({ commit, dispatch }, albumId) {
      api.put('albums/' + albumId)
        .then(res => {
          commit('setAlbums', res.data)
          dispatch('getAlbums', res.data.authorId)
        })
    },
    // @ts-ignore
    deleteAlbum({ commit, dispatch }, album) {
      api.delete('albums/' + album._id)
        // @ts-ignore
        .then(res => {
          dispatch('getAlbums', album.authorId)
        })
    },

    // comments
    // @ts-ignore
    addComment({ commit, dispatch }, commentData) {
      api.post('comments/' + commentData.postId, commentData)
        // @ts-ignore
        .then(res => {
          dispatch('getComments', commentData.postId)
        })
    },
    //get comments for one specific post
    // @ts-ignore
    getComments({ commit, dispatch }, postId) {
      api.get('comments/' + postId)
        .then(res => {
          // let payload = {
          //   postId: postId,
          //   comments: res.data
          // }
          commit('setComment', res.data)
        })
    },
    setActivePost() { },

    // auth 
    // @ts-ignore
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'userDash' })
        })
    },
    // @ts-ignore
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          dispatch('getAlbums', res.data._id)
        })
        // @ts-ignore
        .catch(err => {
          console.error('Please Login')
          router.push({ name: 'auth' })
        })
    },
    // @ts-ignore
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          dispatch('getAlbums', res.data._id)
          router.push({ name: 'userDash' })
        })
    },
    // @ts-ignore
    logout({ commit, dispatch }) {
      auth.delete('logout')
        // @ts-ignore
        .then(res => {
          commit('logout')
        })
    }



  }
})
