<template>
    <div class="pagination__list">
        <div class="catalog__sort">
							<div class="catalog__sort-title">
								Сортировать:
							</div>
							<div class="catalog__sort-button" :class="activeSortClass('new')">
								<a href="#" @click.prevent="sortParam='new'" class="catalog__sort-link">
									Недавно добавленные
								</a>
							</div>
							<div class="catalog__sort-button" :class="activeSortClass('price|expensive')">
								<a href="#" @click.prevent="sortParam='price|expensive'" class="catalog__sort-link">
									Сначала дорогие
								</a>
							</div>
							<div class="catalog__sort-button" :class="activeSortClass('price|cheap')">
								<a href="#" @click.prevent="sortParam='price|cheap'" class="catalog__sort-link">
									Сначала дешевые
								</a>
							</div>
						</div>
                        <div class="row catalog__products-list">
							<template v-if="nProducts.length">
								<product-card v-for="(product, index) in processedData" :product="product" :key="index"></product-card>
							</template>
							<template v-else>
								Ничего нет
							</template>
						</div>
						<div class="load__more" v-show="loadMoreHandler()">
							<a href="#" @click.prevent="loadMore()" class="load__more-link">
								ПОКАЗАТЬ ЕЩЕ
							</a>
						</div>
						<div class="products__nav" v-show="loadMoreHandler()">
							<ul class="products__nav-list">
								<li class="products__nav-item" :class="activeClass(i)" v-for="i in pageCount" :key="i">
									<a href="#" @click.prevent="desiredPage(i)" class="products__nav-link">
										<span>{{ i }}</span>
									</a>
								</li>
							</ul>
						</div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
    name: 'Pagination',
    components: {
		ProductCard
	},
    data() {
        return {
            sortParam: 'new',
            pageNumber: 0,
            sorted: []
        }
    },
    props: [
        'size'
    ],
    methods: {
		desiredPage(n) {
            this.pageNumber = n - 1;
            window.scroll(0, 0)
        },
        activeClass(n) {
            if (this.pageNumber === n - 1) {
                return 'products__nav-active'
            }
        },
        activeSortClass(param) {
            if(this.sortParam === param) {
                return 'sort-active'
            }
        },
        loadMore() {
            this.size+=9
        },
        loadMoreHandler() {
            if (this.size < this.nProducts.length) {
                return true
            } else {
                return false
            }
        }
    }, 
    computed: {
        ...mapGetters('products',['products','necessaryProducts']),
		...mapGetters('categoryes',['currentCategory']),
		nProducts() {
			return this.necessaryProducts(this.cCategory.id);
        },
		cCategory() {
			const categoryUrl = this.$route.params.category;
			return this.currentCategory(categoryUrl);
		},
		pageCount() {
      		let l = this.nProducts.length,
			  s = this.size;
      		return Math.ceil(l/s)
		},
		processedData() {
			const start = this.pageNumber * this.size,
                end = start + this.size,
                sorted = [];
            switch(this.sortParam){
                case 'price|expensive': {
                    this.nProducts.sort(sortByPriceExpensive);
                    break
                }
                case 'price|cheap': {
                    this.nProducts.sort(sortByPrice);
                    break
                }
                case 'new': {
                    this.nProducts.sort(sortByDate);
                    break
                }
                default : {
                    this.nProducts.sort(sortByDate);
                    break
                }
            }
			return this.nProducts.slice(start, end);
        },
    },
    mounted() {
        this.size = 9
    }
}
const sortByPrice = function(d1, d2){
    const price1 = d1.action ? d1.newCost : d1.price;
    const price2 = d2.action ? d2.newCost : d2.price;
    return (price1 > price2) ? 1 : -1
}
const sortByPriceExpensive = function(d1, d2){
    const price1 = d1.action ? d1.newCost : d1.price;
    const price2 = d2.action ? d2.newCost : d2.price;
    return (price1 < price2) ? 1 : -1
}
const sortByDate = function(d1, d2){
    const date1 = Date.parse(d1.date)
    const date2 = Date.parse(d2.date)
    return (date1 < date2) ? 1 : -1
}

</script>


<style lang="scss">

</style>
