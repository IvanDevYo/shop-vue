<template>
<div class="col-lg-4 col-md-6 product__card-container">
    <div class="product__card">
        <div class="product__card-discount" v-if="product.action">
            <span>-{{ percentAction(product.price, product.newCost) }}%</span>
        </div>
        <div class="product__card-image">
            <img :src="product.img" alt="" class="product__card-pic">		</div>
            <router-link :to="{name: 'product', params: {product: product.url, category: cCategory.url}}" class="product__card-title">
                {{ product.name }}
            </router-link>
            <div class="product__card-bottom">
                <div class="product__card-art">
                    Артикуль. 00-111-2323-222
                </div>
                <div class="product__card-availability available">
                    <span>В наличии</span>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="product__card-link_container">
                            <button class="product__card-button" @click="addToCart(product.id)">		<img src="/img/shopping-cart.png" alt="" class="product__card-icon">		<span>В корзину</span>		</button>
                        </div>
                    </div>
                    <div class="col-6 no-padding-left">
                        <template v-if="product.action">
                            <div class="product__card-old-price">{{ formatPrice(product.price) }}</div>
                            <div class="product__card-price">
                                {{ formatPrice(product.newCost) }} <span>руб</span>
                            </div>
                        </template>
                        <template v-else>
                            <div class="product__card-old-price"></div>
                            <div class="product__card-price">
                                {{ formatPrice(product.price) }} <span>руб</span>
                            </div>
                        </template>
                        <div class="product__card-price-ad">
                            за шт.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import {
    mapGetters
} from "vuex";

export default {
    name: "ProductCard",
    props: ["product"],
    methods: {
        formatPrice(price) {
            price += "";
            return price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
        },
        percentAction(price, newCost) {
            return Math.round((price - newCost) / (price / 100));
        },
        addToCart(id) {
            this.$store.commit("cart/addToCart", {
                id: id,
                quantity: 1
            });
            this.$root.$emit("addedToCart");
        }
    },
    computed: {
        ...mapGetters("categoryes", ["productCategory"]),
        cCategory() {
            return this.productCategory(this.product.categoryId);
        }
    }
};
</script>
