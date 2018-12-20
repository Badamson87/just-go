import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
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
    bucketLists: []
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
    //   state.post = post
    // }, 
    setBL(state, BL) {
      state.bucketLists = BL
    }


  },
  actions: {
    //posts
    createPost({ commit, dispatch }, formData) {
      api.post('posts', formData)
        .then(res => {
          console.log(res.data)
          commit("setPost", res.data)
          // dispatch('getAlbums')
          dispatch("editAlbum", res.data.data.albumId)
        })
    },
    getPostById({ commit, dispatch }, postId) {
      api.get('posts/' + postId)
        .then(res => {
          commit('setPost', res.data)
        })
    },
    getAllPosts({ commit, dispatch }) {
      api.get('posts/')
        .then(res => {
          console.log(res)
          commit('setPosts', res.data)
        })
    },
    //get post by album id
    getPostsByAlbumId({ commit, dispatch }, albumId) {
      api.get("posts/album/" + albumId)
        .then(res => {
          console.log('Posts by album', res.data)
          commit('setActiveAlbum', res.data)
          // router.push({name:'album'})
        })
    },

    //bucket list

    createBL({ commit, dispatch }, bucketListData) {
      api.post('albums', bucketListData)
        .then(res => {
          console.log("bucketlist :", res.data)
          dispatch('getBL', res.data.authorId)
        })
    },
    getBL({ commit, dispatch }) {
      api.get('albums/bucketlists/')
        .then(res => {
          commit('setBL', res.data)
        })
    },

    //albums
    getAlbums({ commit, dispatch }, authorId) {
      api.get('albums/user/' + authorId)
        .then(res => {
          console.log('albums: ', res)
          commit('setAlbums', res.data)
        })
    },
    addAlbum({ commit, dispatch }, albumData) {
      api.post('albums', albumData)
        .then(res => {
          // commit('setAlbums', res.data)
          dispatch('getAlbums', res.data.authorId)
        })
    },
    editAlbum({ commit, dispatch }, albumId) {
      api.put('albums/' + albumId)
        .then(res => {
          commit('setAlbums', res.data)
          dispatch('getAlbums', res.data.authorId)
        })
    },
    deleteAlbum({ commit, dispatch}, payload){
      api.delete('albums/' + payload.albumId)
      .then(res => {
        dispatch('getAlbums', payload.authorId)
      })
    },



    // auth 
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'userDash' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          dispatch('getAlbums', res.data._id)
        })
        .catch(err => {
          console.error('Please Login')
          router.push({ name: 'auth' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          dispatch('getAlbums', res.data._id)
          router.push({ name: 'userDash' })
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          commit('logout')
        })
    }



  }
})
