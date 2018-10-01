import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

const routes = [
    { 
        path: '/', 
        component: Home 
    }
]

export const router = new VueRouter({
    routes 
})

