import Vue from 'vue'

const state = {
    products: []
}

const mutations = {
    addProducts(state, data) {
        state.products = data;
    }
}

const getters = {
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
    search: state => query => {
        let items = state.products;
        
    },
    discountProducts(state) {
        let items = state.products,
            necessaryItems = [];
        for(let i=0; i<items.length; i++) {
            if (items[i].action) {
                necessaryItems.push(items[i]);
            }
        }
        return necessaryItems.splice(0,3);
    },
    newProducts(state) {
        let items = state.products,
            necessaryItems = [],
            temp;
        for(let i=0; i<items.length; i++) {
            for(let j = items.length - 1; j > i; j--) {
                if (Date.parse(items[j-1].date) > Date.parse(items[j].date)) {
                    temp = items[j-1];
                    items[j-1] = items[j];
                    items[j] = temp;
                }
            }
        }
        for(let i=items.length-1; i>items.length-4; i--) {
            necessaryItems.push(items[i]);
        }
        return necessaryItems;
    },
    products(state) {
        return state.products;
    }
}

const actions = {
    async loadProducts({ commit }) {
        let data = {};
        const response = await Vue.http.get('http://' + window.location.host + '/store/json/products.json').then(function(response) {
            data = JSON.parse(response.bodyText);
        }, function(error) {
            throw error;
        });
        commit('addProducts', data.data);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}