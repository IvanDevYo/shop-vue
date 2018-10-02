import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Catalog from './views/Catalog.vue'

Vue.use(VueRouter);

const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/catalog/:category', 
        name: 'catalog',
        component: Catalog 
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})