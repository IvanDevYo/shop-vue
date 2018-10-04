import Vue from 'vue'
import Vuex from 'vuex'
import VueRosource from 'vue-resource'
import categoryes from './categoryes.js'
import products from './products.js'
import cart from './cart.js'

Vue.use(Vuex);
Vue.use(VueRosource);

export const store = new Vuex.Store({
    modules: {
        categoryes,
        products,
        cart
    },
    strict: process.env.NODE_ENV !== 'production'
});