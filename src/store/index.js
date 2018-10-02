import Vue from 'vue'
import Vuex from 'vuex'
import VueRosource from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueRosource);

export const store = new Vuex.Store({
    state: {
        categoryes: [],
        products: []
    },
    mutations: {
        addCategory(state, data) {
            state.categoryes = data;
        },
        addProducts(state, data) {
            state.products = data;
        }
    },
    getters: {
        categoryes(state) {
            return state.categoryes;
        },
        currentCategory: state => url => {
            let items = state.categoryes,
                item;
            for(let i=0; i<items.length; i++) {
                if (url === items[i].url) {
                    item = items[i];
                }
            }
            return item;
        },
        necessaryProducts: state => id => {
            let items = state.products,
                necessaryItems = [];
            for(let i=0; i<items.length; i++) {
                if (id === items[i].categoryId) {
                    necessaryItems.push(items[i]);
                }
            }
            return necessaryItems;
        },
        products(state) {
            return state.products;
        }
    },
    actions: {
        async loadCategoryes({ commit }) {
            let data = {};
            const response = await Vue.http.get('http://localhost:3000/store/categoryes.json').then(function(response) {
                data = JSON.parse(response.bodyText);
            }, function(error) {
                throw error;
            });
            commit('addCategory', data.data);
        },
        async loadProducts({ commit }) {
            let data = {};
            const response = await Vue.http.get('http://localhost:3000/store/products.json').then(function(response) {
                data = JSON.parse(response.bodyText);
            }, function(error) {
                throw error;
            });
            commit('addProducts', data.data);
        }
    }
});