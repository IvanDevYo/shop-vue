import Vue from 'vue'

const state = {
    aboutContent: []
}

const mutations = {
    addAbout(state, data) {
        state.aboutContent = data;
    }
}

const getters = {
    getAbout: state => page => {
        let items = state.aboutContent,
            item;
        for(let i=0; i<items.length; i++) {
            if (page === items[i].page) {
                item = items[i];
            }
        }
        return item;
    }
}

const actions = {
    async loadAbouts({ commit }) {
        let data = {};
        const response = await Vue.http.get('http://' + window.location.host + '/store/json/about.json').then(function(response) {
            data = JSON.parse(response.bodyText);
        }, function(error) {
            throw error;
        });
        commit('addAbout', data.data);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}