import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Catalog from './views/Catalog.vue'
import Product from './views/Product.vue'
import SearchResults from './views/SearchResults.vue'

Vue.use(VueRouter);

const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/catalog/:category', 
        name: 'catalog',
        component: Catalog,
        children: [
            {
                path: ':product',
                name: 'product',
                component: Product 
            }
        ]
    },
    { 
        path: '/search',
        name: 'search',
        component: SearchResults 
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})