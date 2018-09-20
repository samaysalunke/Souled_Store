 /* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import Tshirt from '@/components/Tshirt'
import imagemap from '@/components/imagemap'
import page from '@/components/page'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/tshirts',
      name: 'Posts',
      component: Posts
    }
  ]
});