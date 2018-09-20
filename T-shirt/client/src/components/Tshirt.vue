<template>
<div class="col-md-3 col-sm-6 col-6 tshirt">
  <div class="card" >
  <img class="card-img-top" :src="imagelink" alt="Card image cap">
  <div class="card-body">
    <p class="productText"><strong>{{tshirtData.product}}</strong> </p>
    <p class="productPrice"> {{tshirtData.price}} </p>
    <p class="productCategory"> {{tshirtData.category}}</p>
  </div>
</div>
</div>
</template>


<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'Tshirt',
  props: ['tshirtData'], 
  data () {
    let links= JSON.parse(this.tshirtData.images);
    let lolo= 'https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/'+links[0];
    return {
      imagelink: lolo
    }
  }
}
</script>

<style>
.productText{
  font-size: 0.8em;
  font-family: Helvetica;
  text-align: left;
  width: 98%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid rgba(0,0,0,.13);
}

.productPrice{
  font-size: 0.7em;
  font-family: Helvetica;
  text-align: right;
  display: inline-block;
  float:right;
  width: 30%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.productCategory{
  font-size: 0.7em;
  font-family: Helvetica;
  text-align: left;
  display: inline-block;
  float:left;
  width: 30%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
}
.card-body{
  padding: 0.5em;
}
.tshirt{
  margin-bottom: 0.8em;
  padding: 0.3em;
  padding-top: 0.8em;
  border-top: 1px solid rgba(0,0,0,.13);
}

</style>