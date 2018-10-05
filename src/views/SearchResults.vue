<template>
    <div class="col-lg-9 col-12">
        <div class="row catalog__products-list" v-if="getSearch.length">
            <product-card v-for="(product, index) in getSearch" :product="product" :key="index"></product-card>
        </div>
        <div class="error" v-else>Ничего не найдено</div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
    name: 'SearchResults',
    components: {
        ProductCard
    },
    computed: {
        ...mapGetters('products',['getSearch']),
    }
}
</script>
