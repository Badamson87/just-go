import Vue from 'vue'
import Vuex from 'vuex'
import router from './router' 
import Axios from 'axios'

Vue.use(Vuex)

let auth = Axios.create ({
  baseURL: '//localhost:3000/auth/',
  timeout:6000,
  withCredentials: true
})
let api = Axios.create ({
  baseURL: '//localhost:3000/api/',
  timeout:6000,
  withCredentials:true
})

export default new Vuex.Store({
  state: {
    user: {}, 
    albums: [], 

  },

  mutations: {
setUser(state, user) {
  state.user = user
}, 

  },
  actions: {
    // auth 
    register ({commit, dispatch}, newUser) {
      auth.post('register', newUser) 
      .then(res => {
        commit('setUser', res.data)
        router.push({name: 'userDash'})
      })
    } ,
    authenticate ({commit, dispatch }) {
      auth.get('authenticate')
      .then(res => {
        commit('setUser', res.data)
      })
      .catch(err => {
        console.err('Please Login')
        router.push({name: 'auth'})
      })
    },
    login({commit, dispatch}, creds) {
      auth.post('login', creds)
      .then(res => {
        commit('setUser', res.data)
        router.push({name: 'userDash'})
      })
    },
    logout({commit}) {
      auth.delete('logout')
      .then(res => {
        router.push({name: 'home'})
      })
    }

  }
})
