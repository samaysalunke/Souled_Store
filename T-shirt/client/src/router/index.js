 /* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Tshirt from '@/components/Tshirt'
import imagemap from '@/components/imagemap'



Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // },
    {
      path: '/tshirts',
      name: 'Posts',
      component: Posts
    }
  ]
});