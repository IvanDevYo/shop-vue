import Vue from 'vue'
import Vuex from 'vuex'
import VueRosource from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueRosource);

export const store = new Vuex.Store({
    state: {
        categoryes: []
    },
    mutations: {
        addCategory(state, data) {
            state.categoryes = data;
        }
    },
    getters: {
        categoryes(state) {
            return state.categoryes;
        }
    },
    actions: {
        async loadCategoryes({ commit }, categoryes) {
            let data = {};
            const response = await Vue.http.get('http://localhost:3000/store/categoryes.json').then(function(response) {
                data = JSON.parse(response.bodyText);
                console.log(response);
            }, function(error) {
                console.log(error);
            });
            commit('addCategory', data.data);
        }
    }
});