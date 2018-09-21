<template>

  <div class="posts">
    <Navigation />
    <imagemap />
<!--    <div class="row">
   	 <pagination />
   </div> -->
    <div class="row">
    <Tshirt v-for="post in posts" :key="post.product" :tshirtData="post" />
    </div>
  </div>
</template>

<script>

import PostsService from '@/services/PostsService'
import Tshirt from '@/components/Tshirt'
import imagemap from '@/components/imagemap'
import Navigation from '@/components/navbar'


export default {
  name: 'posts',
  // props: ["page"]
  components : {
  	"Tshirt":Tshirt,
  	"imagemap":imagemap,
  	"Navigation":Navigation,
  	
  },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
  	this.getPosts(1);
  },
  methods: {
    async getPosts (page) {
      const response = await PostsService.fetchPosts(page)
      this.posts = response.data.prods.data
    }
  }
}
</script>