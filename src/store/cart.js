const state = {
    cartProducts: []
}

const mutations = {
    addToCart(state, payload) {
        for(let i = 0; i < payload.quantity; i++) {
            state.cartProducts.push(payload.id)
        }
    }
}

const getters = {
    get(state) {
        return state.cartProducts
    },
    getLength(state) {
        return state.cartProducts.length
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}