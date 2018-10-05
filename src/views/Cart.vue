<template>
    <div class="col-lg-9 col-12">
        <div class="catalog-title">Корзина</div>
        <div class="cart__products row" v-if="cProducts.length">
            <product-card v-for="(product, index) in cProducts" :product="product" :key="index"></product-card>
        </div>
        <div class="cart__products" v-else>Корзина пуста</div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
    name: 'Cart',
    components: {
        ProductCard
    },
    computed: {
        ...mapGetters('cart',['get']),
        ...mapGetters('products',['cartProducts']),
        cProducts() {
		    return this.cartProducts(this.get);
	    },
    }
}
</script>