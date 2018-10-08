const state = {
    reviews: []
}

const mutations = {
    addReview(state, payload) {
        state.reviews.push(payload)
        console.log(state.reviews)
    }
}

const getters = {
    getReviews: state => id => {
        let items = state.reviews,
            item = [];
        for(let i=0; i<items.length; i++) {
            if (id === items[i].id) {
                item.push(items[i]);
            }
        }
        return item;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}