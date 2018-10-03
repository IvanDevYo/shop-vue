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
							<li class="breadcrumbs-item"><a href="/" class="breadcrumbs-link">{{ currentCategory.name }}</a></li>
						</ul>
					</div>
					<div class="catalog">
						<div class="catalog-title">
							{{ currentCategory.name }}
						</div>
						<div class="catalog__menu_hover">
							<div class="catalog__menu-item_hover">
								<a href="#" class="catalog__menu-link_hover">
									<img src="img/cotel-1.png" alt="" class="catalog__menu-link_hover-pic">
									<div class="catalog__menu-item_hover-text">
										Котлы газовые напольные
									</div>
								</a>
							</div>
							<div class="catalog__menu-item_hover">
								<a href="#" class="catalog__menu-link_hover">
									<img src="img/cotel-1.png" alt="" class="catalog__menu-link_hover-pic">
									<div class="catalog__menu-item_hover-text">
										Котлы газовые напольные
									</div>
								</a>
							</div>
							<div class="catalog__menu-item_hover">
								<a href="#" class="catalog__menu-link_hover">
									<img src="img/cotel-1.png" alt="" class="catalog__menu-link_hover-pic">
									<div class="catalog__menu-item_hover-text">
										Котлы газовые напольные
									</div>
								</a>
							</div>
							<div class="catalog__menu-item_hover">
								<a href="#" class="catalog__menu-link_hover">
									<img src="img/cotel-1.png" alt="" class="catalog__menu-link_hover-pic">
									<div class="catalog__menu-item_hover-text">
										Котлы газовые напольные
									</div>
								</a>
							</div>
							<div class="catalog__menu-item_hover active">
								<a href="#" class="catalog__menu-link_hover">
									<img src="img/cotel-1.png" alt="" class="catalog__menu-link_hover-pic">
									<div class="catalog__menu-item_hover-text">
										Котлы газовые напольные
									</div>
								</a>
							</div>
							<div class="catalog__menu-item_hover">
								<a href="#" class="catalog__menu-link_hover">
									<img src="img/cotel-1.png" alt="" class="catalog__menu-link_hover-pic">
									<div class="catalog__menu-item_hover-text">
										Котлы газовые напольные
									</div>
								</a>
							</div>
							<div class="catalog__menu-item_hover">
								<a href="#" class="catalog__menu-link_hover">
									<img src="img/cotel-1.png" alt="" class="catalog__menu-link_hover-pic">
									<div class="catalog__menu-item_hover-text">
										Котлы газовые напольные
									</div>
								</a>
							</div>
							<div class="catalog__menu-item_hover">
								<a href="#" class="catalog__menu-link_hover">
									<img src="img/cotel-1.png" alt="" class="catalog__menu-link_hover-pic">
									<div class="catalog__menu-item_hover-text">
										Котлы газовые напольные
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="filter">
						<div class="filter-cols">
							<div class="filter__left-col">
								<div class="filter-title">
									Бренды
								</div>
								<div class="bord">
									<div class="scroll checks mCustomScrollbar">
										<div class="check">
											<label>
												<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
												<span></span>
												ACV
											</label>
										</div>
										<div class="check">
											<label>
												<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
												<span></span>
												Ariston
											</label>
										</div>
										<div class="check">
											<label>
												<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
												<span></span>
												Baxi
											</label>
										</div>
										<div class="check">
											<label>
												<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
												<span></span>
												Buderus
											</label>
										</div>
										<div class="check">
											<label>
												<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
												<span></span>
												Electrolux
											</label>
										</div>
										<div class="check">
											<label>
												<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
												<span></span>
												Riho
											</label>
										</div>
										<div class="check">
											<label>
												<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
												<span></span>
												Riho
											</label>
										</div>
										<div class="check">
											<label>
												<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
												<span></span>
												Riho
											</label>
										</div>
										<div class="check">
											<label>
												<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
												<span></span>
												Riho
											</label>
										</div>
										<div class="check">
											<label>
												<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
												<span></span>
												Riho
											</label>
										</div>
									</div>
								</div>
							</div>
							<div class="filter__center-col">
								<div class="filter-title">
									Цена
								</div>
								<div id="filter-slider" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">
									<a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 0%;"></a>
									<a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 100%;"></a>
								</div>	
								<p class="filter__inputs">
									<span class="f-left">
										<b>от</b><input type="text" name="filter[price][from]" class="t-inp diapazon" id="minCost" data-name="price" data-defaultvalue="486" data-limit="486" value="486" style="text-align: right;">
									</span>
									<span class="f-right">
										<b>до</b><input type="text" name="filter[price][to]" class="t-inp" id="maxCost" data-name="price" data-defaultvalue="1576956" data-limit="1576956" value="1576956" style="text-align: right;">
									</span>
								</p>
								<div class="filter__params">
									<ul class="filter__params-list">
										<li class="filter__params-item">
											<a href="#" class="filter__params-link">
												<i class="fas fa-chevron-circle-down"></i>
												Страна производитель
											</a>
											<div class="filter__params-open">
												<div class="check">
													<label>
														<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
														<span></span>
														Riho
													</label>
												</div>
												<div class="check">
													<label>
														<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
														<span></span>
														Riho
													</label>
												</div>
											</div>
										</li>
										<li class="filter__params-item">
											<a href="#" class="filter__params-link">
												<i class="fas fa-chevron-circle-down"></i>
												Тип монтажа
											</a>
											<div class="filter__params-open">
												<div class="check">
													<label>
														<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
														<span></span>
														Riho
													</label>
												</div>
												<div class="check">
													<label>
														<input type="checkbox" name="filter[brand][]" value="637" data-name="brand">
														<span></span>
														Riho
													</label>
												</div>
											</div>
										</li>
										<li class="filter__params-item">
											<a href="#" class="filter__params-link">
												<i class="fas fa-chevron-circle-down"></i>
												Размеры
											</a>
										</li>
									</ul>
								</div>				
							</div>
							<div class="filter__right-col">
								<div class="price-range">
									<a href="#" class="price-range-link" data-min="486" data-max="390000">
										486 — 390 000 <span class="rub">руб.</span>
									</a>
									<br>
									<a href="#" class="price-range-link" data-min="390000" data-max="780000">
										390 000 — 780 000 <span class="rub">руб.</span>
									</a>
									<br>
									<a href="#" class="price-range-link" data-min="780000" data-max="1180000">
										780 000 — 1 180 000 <span class="rub">руб.</span>
									</a>
									<br>
									<a href="#" class="price-range-link" data-min="1180000" data-max="1576956">
										1 180 000 — 1 576 956 <span class="rub">руб.</span>
									</a>
								</div>
							</div>
						</div>
						<div class="filter__bottom">
							<div class="filter__founded">
								Найдено {{ nProducts.length }} товаров
							</div>
							<div class="filter__bottom-buttons">
								<a href="#" class="button-lost">
									<span>Сбросить</span>
								</a>
								<a href="#" class="button-show">
									<span>Показать</span>
								</a>
							</div>
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
		
	},
	created() {
		this.$store.dispatch('products/loadProducts');
	}
} 
</script>

<style>

</style>
