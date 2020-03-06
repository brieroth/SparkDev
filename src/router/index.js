import Vue from 'vue'
import Router from 'vue-router'
import ImageCard from '@/components/ImageCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ImageCard',
      component: ImageCard
    }
  ]
})
