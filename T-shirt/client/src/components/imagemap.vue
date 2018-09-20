<template>
<div class="offers">
  <!-- <div class="card" >
  <img class="card-img-top" :src="imagelink" alt="Card image cap"> -->
  <img class="img" :src=imgurl>
<!-- </div> -->
</div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'imagemap',
  props: ['imagemap'], 
  data () {
    return {
      imgurl: "https://images.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-420180918184945.jpg"
    }
  }
}
</script>
<style>
  .offers{
    padding-left: -5px;
    padding-right: -5px;
  }
  .img{
    height: 100%;
    width: 100%;
    padding:0;
    margin: 0;
  }
</style>
