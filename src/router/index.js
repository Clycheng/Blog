import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/Index"
import Nav from '@/components/Nav'


Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
            path: "/Nav",
            name: 'Nav',
            component: Nav
        }
    ]
})