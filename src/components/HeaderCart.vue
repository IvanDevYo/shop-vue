<template>
    <div class="header__card">
								<router-link to="/cart" class="header__card-link">
									<div class="header__card-text">Моя корзина</div>
									<div class="header__card-icon">
										<img src="/img/shopping-purse-icon.png" alt="" class="header__card-icon-pic">
									</div>
									<div class="header__card-counter">{{ count }}</div>
								</router-link>
							</div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default {
    name: 'HeaderCart',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        
    },
    computed: {
        ...mapGetters('cart',['getLength'])
    },
    mounted() {
        this.$root.$on('addedToCart', () => {
            this.count = this.getLength
        })
    }
}
</script>


<style lang="scss">

</style>
