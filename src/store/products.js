import Vue from 'vue'

const state = {
    products: [],
    results: []
}

const mutations = {
    addProducts(state, data) {
        state.products = data;
    },
    search(state, query) {
        let items = state.products,
            res = [],
            reg = new RegExp(query, 'i')
        query = query.toLowerCase();
        for(let i = 0; i < items.length; i++) {
            if(~items[i].name.search(reg)) {
                res.push(items[i])
            }
        }
        state.results = res;
    }
}

const getters = {
    getSearch(state) {
        return state.results
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
    },
    currentProduct: state => url => {
        let items = state.products,
            item;
        for(let i=0; i<items.length; i++) {
            if (url === items[i].url) {
                item = items[i];
            }
        }
        return item;
    },
    cartProducts: state => arr => {
        let items = state.products,
            necessaryItems = [];

            for(let i = 0; i < arr.length; i++) {
                let id = arr[i];
                for(let j = 0; j < items.length; j++) {
                    if(id === items[j].id) necessaryItems[i] = items[j] 
                }
            }
        
        return necessaryItems;
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