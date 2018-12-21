import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Auth from './views/Auth.vue'
// @ts-ignore
import Album from './views/Album.vue'
// @ts-ignore
import Post from './views/Post.vue'
// @ts-ignore
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
      path: '/album/:albumId',
      name: 'album',
      component: Album,
      props: true
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: Post,
      props: true
    },
    {
      path: '/posts/clone',
      name: 'clone',

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
