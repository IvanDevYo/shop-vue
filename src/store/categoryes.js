import Vue from 'vue'

const state = {
    categoryes: []
}

const mutations = {
    addCategory(state, data) {
        state.categoryes = data;
    }
}

const getters = {
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
    }
}

const actions = {
    async loadCategoryes({ commit }) {
        let data = {};
        const response = await Vue.http.get('http://' + window.location.host + '/store/json/categoryes.json').then(function(response) {
            data = JSON.parse(response.bodyText);
        }, function(error) {
            throw error;
        });
        commit('addCategory', data.data);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}