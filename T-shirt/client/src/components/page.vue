<template>
  <b-breadcrumb :items="items"/>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'page',
  data () {
    return {
      items: [{
        text: 'Admin',
        href: '#'
      }, {
        text: 'Manage',
        href: '#'
      }, {
        text: 'Library',
        active: true
      }]
    }
  }
}
</script>
