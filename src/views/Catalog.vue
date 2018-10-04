<template>
    <div class="col-lg-9 col-12">
					<div class="breadcrumbs">	
						<ul class="breadcrumbs-list">
							<li class="breadcrumbs-item">
								<a href="/" class="breadcrumbs-link">Главная</a>
							</li>
							<li class="breadcrumbs-item">
								<a href="/" class="breadcrumbs-link">Каталог</a>
							</li>
							<li class="breadcrumbs-item"><a href="/" class="breadcrumbs-link">{{ cCategory.name }}</a></li>
						</ul>
					</div>
					<div class="catalog">
						<div class="catalog-title">
							{{ cCategory.name }}
						</div>
					</div>
					<div class="catalog__products">
						<div class="catalog__sort">
							<div class="catalog__sort-title">
								Сортировать:
							</div>
							<div class="catalog__sort-button sort-active">
								<a href="#" class="catalog__sort-link">
									По популярности
								</a>
							</div>
							<div class="catalog__sort-button">
								<a href="#" class="catalog__sort-link">
									Недавно добавленные
								</a>
							</div>
							<div class="catalog__sort-button">
								<a href="#" class="catalog__sort-link">
									Сначала дорогие
								</a>
							</div>
							<div class="catalog__sort-button">
								<a href="#" class="catalog__sort-link">
									Сначала дешевые
								</a>
							</div>
						</div>
						<div class="row catalog__products-list">
							<template v-if="nProducts.length">
								<product-card v-for="(product, index) in nProducts" :product="product" :key="index"></product-card>
							</template>
							<template v-else>
								Ничего нет
							</template>
						</div>
						<div class="load__more">
							<a href="#" class="load__more-link">
								ПОКАЗАТЬ ЕЩЕ
							</a>
						</div>
						<div class="products__nav">
							<ul class="products__nav-list">
								<li class="products__nav-item products__nav-active">
									<a href="#" class="products__nav-link">
										<span>1</span>
									</a>
								</li>
								<li class="products__nav-item">
									<a href="#" class="products__nav-link">
										<span>2</span>
									</a>
								</li>
								<li class="products__nav-item">
									<a href="#" class="products__nav-link">
										<span>3</span>
									</a>
								</li>
								<li class="products__nav-item">
									<a href="#" class="products__nav-link">
										<span>4</span>
									</a>
								</li>
								<li class="products__nav-separator">...</li>
								<li class="products__nav-item">
									<a href="#" class="products__nav-link">
										<span>14</span>
									</a>
								</li>
							</ul>
						</div>
						<div class="main__content catalog__main__content">
							<div class="main__content-title">
								Интернет-магазин инженерной сантехники
							</div>
							<div class="main__content-text">
								Каталог компании «Форватер» включает свыше 10 тысяч наименований продукции от более чем 70 ведущих брендов из Европы и США. У нас вы найдете все для монтажа сетей отопления, водоснабжения, канализации и других инженерных коммуникаций.
								<br><br>
								Оборудование представлено на сайте в широком диапазоне мощности, благодаря чему здесь можно подобрать все необходимое для обустройства загородных домов, квартир, торговых, производственных и складских объектов.
							</div>
							<div class="main__content-subtitle">
								Об ассортименте
							</div>
							<div class="main__content-text">
								При формировании ассортимента мы ориентируемся на известные европейские марки, что позволяет гарантировать высокое качество оборудования, комплектующих и расходных материалов для монтажа инженерных систем. На складе постоянно поддерживаются запасы наиболее востребованной продукции, благодаря чему все заказы комплектуются максимально быстро.
							</div>
						</div>
					</div>
				</div>
</template>
<script>
import Vue from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { mapGetters } from 'vuex';
export default {
	name: 'Catalog',
	components: {
		ProductCard
	},
	data() {
		return {
			
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
		}
	},
	methods: {
		
	}
} 
</script>

<style>

</style>
