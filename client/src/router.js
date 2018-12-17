import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auth from './views/Auth.vue'
import Album from './views/Album.vue'
import Post from './views/Post.vue'
import userDash from './views/userDash.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
      name: 'auth',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Auth
    },

   {
     path: '/album',
     name: 'album',
     component: Album
   },
   {
     path: '/post',
     name: 'post',
     component: Post
   },
   {
     path: '/userDash',
     name: 'userDash',
     component: userDash
   },
   {
   path: "*",
   redirect: '/'
   }
  ]
})
