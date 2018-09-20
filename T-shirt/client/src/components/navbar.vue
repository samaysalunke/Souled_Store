<template>
  <div> 
    <b-navbar toggleable="md" type="light" variant="light">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="https://www.thesouledstore.com/"><img src="https://mir-s3-cdn-cf.behance.net/user/276/f9c93b3204855.5a78b3b1aa150.png" width="auto" height="150rem" alt="The souled store icon"></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse" >

    <b-navbar-nav>
      <b-nav-item href="#" >Shop</b-nav-item>
      <b-nav-item href="#">Official Merch</b-nav-item>
      <b-nav-item href="#">Artists</b-nav-item>
      <b-nav-item href="#">Souled Army</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-3 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
name: 'Navigation'

}
</script>

<style>
.navbar{
  height:6rem;
  z-index: 1000;
}


</style>