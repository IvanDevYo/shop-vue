<template>
    <div class="col-lg-9 col-12">
					<div class="breadcrumbs">	
						<ul class="breadcrumbs-list">
							<li class="breadcrumbs-item">
								<router-link to="/" class="breadcrumbs-link">Главная</router-link>
							</li>
							<li class="breadcrumbs-item">
								<router-link :to="{ name: 'catalog', params: cCategory.url }" class="breadcrumbs-link">Каталог</router-link>
							</li>
							<li class="breadcrumbs-item"><router-link :to="{ name: 'catalog', params: cCategory.url }" class="breadcrumbs-link">{{ cCategory.name }}</router-link></li>
						</ul>
					</div>
					<div class="catalog">
						<div class="catalog-title">
							{{ cCategory.name }}
						</div>
					</div>
					<div class="catalog__products">
						<pagination :size="9"></pagination>		
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
import Pagination from '../components/Pagination.vue'
import { mapGetters } from 'vuex';
export default {
	name: 'Catalog',
	components: {
		Pagination
	},
	data() {
		return {
			
		}
	},
	computed: {
		...mapGetters('categoryes',['currentCategory']),
		cCategory() {
			const categoryUrl = this.$route.params.category;
			return this.currentCategory(categoryUrl);
		},
	},
	methods: {
		
	}
} 
</script>