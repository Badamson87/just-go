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
    post: {},
    posts: [],
    activeAlbum: {}
  },

  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setAlbums(state, albums) {
      state.albums = albums
    },
    setPost(state, post) {
      state.post = post
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    setActiveAlbum(state, activeAlbum) {
      state.activeAlbum = activeAlbum
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
    // getPosts({ commit, dispatch }, albumId) {
    //   api.get('album/' + albumId)
    //     .then(res => {
    //     })
    // },
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
    logout({ commit }) {
      auth.delete('logout')
        .then(res => {
          router.push({ name: 'home' })
        })
    }



  }
})
