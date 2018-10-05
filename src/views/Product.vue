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
							<li class="breadcrumbs-item">
								<router-link :to="{ name: 'catalog', params: cCategory.url }" class="breadcrumbs-link">{{ cCategory.name }}</router-link>
							</li>
							<li class="breadcrumbs-item">
								<router-link :to="{ name: 'product', params: {product: cProduct.url, category: cCategory.url} }" class="breadcrumbs-link">{{ cProduct.name }}</router-link>
							</li>
						</ul>
					</div>
					<div class="product">
						<div class="product-title">
							{{ cProduct.name }}
						</div>
						<div class="row product-row">
							<div class="custom-col-6">
								<div class="product-slider">
									<div class="owl-product owl-carousel">
										<div class="product-img" data-hash="1">
											<img :src="cProduct.img" alt="" class="product-pic">
										</div>
									</div>
								</div>
							</div>
							<div class="custom-col-6">
								<div class="product-price" v-if="cProduct.action">
									{{ formatPrice(cProduct.newCost) }} руб.
								</div>
								<div class="product-price" v-else>
									{{ formatPrice(cProduct.price) }} руб.
								</div>
								<div class="product__right__info">
									<div class="product__man__info">
										<div class="product__man__info-item">
											<div class="product__man__info-key">
												КОД ТОВАРА:
											</div>
											<div class="product__man__info-value">
												101915
											</div>
										</div>
										<div class="product__man__info-item">
											<div class="product__man__info-key">
												ПРОИЗВОДИТЕЛЬ:
											</div>
											<div class="product__man__info-value">
												ROCCA
											</div>
										</div>
										<div class="product__man__info-item">
											<div class="product__man__info-key">
												СЕРИЯ:
											</div>
											<div class="product__man__info-value">
												SURESTE
											</div>
										</div>
										<div class="product__man__info-item">
											<div class="product__man__info-key">
												МОДЕЛЬ:
											</div>
											<div class="product__man__info-value">
												SURESTE 170X70
											</div>
										</div>
										<div class="product__man__info-item">
											<div class="product__man__info-key">
												СТРАНА:
											</div>
											<div class="product__man__info-value">
												ИСПАНИЯ
											</div>
										</div>
									</div>
									<div class="product__adder">
										<div class="product__adder-counter">
											<a href="#" @click.prevent="setQuantity('-')" class="product__adder-link minus">
												<img src="/img/minus-sign.png" alt="" class="product__adder-pic">
											</a>
											<div class="product__adder-counter-text">
												<span>{{ quantity }}</span>
											</div>
											<a href="#" @click.prevent="setQuantity('+')" class="product__adder-link plus">
												<img src="/img/plus-sign.png" alt="" class="product__adder-pic">
											</a>
										</div>
										<a href="#" @click.prevent="addToCart(cProduct.id, quantity)" class="product__adder-button">
											<span>В корзину</span>
										</a>
									</div>
									<div class="pay__method">
										<div class="pay__method-title">
											Способы оплаты:
										</div>
										<a href="#" class="pay__method-link pay-active">
											<span>Наличные</span>
										</a>
										<a href="#" class="pay__method-link">
											<span>Безнал</span>
										</a>
									</div>
									<div class="characteristics">
										<div class="characteristics-title">
											ХАРАКТЕРИСТИКИ:
										</div>
										<div class="characteristics-list">
											<div class="characteristics-list-title">
												Габариты
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Высота, мм.
												</div>
												<div class="characteristics-value">
													730 
												</div>
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Ширина, мм.
												</div>
												<div class="characteristics-value">
													400
												</div>
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Длина, мм.
												</div>
												<div class="characteristics-value">
													300.00
												</div>
											</div>
										</div>
										<div class="characteristics-list">
											<div class="characteristics-list-title">
												Общее
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Производитель
												</div>
												<div class="characteristics-value">
													Bosch 
												</div>
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Артикул
												</div>
												<div class="characteristics-value">
													7736900198RU
												</div>
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Серия
												</div>
												<div class="characteristics-value">
													GAZ 6000
												</div>
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Модель
												</div>
												<div class="characteristics-value">
													Gaz 6000 W WBN 6000-24 С 
												</div>
											</div>
											<div class="characteristics-item not-dotted">
												<div class="characteristics-key">
													Страна 
												</div>
												<div class="characteristics-value">
													Россия
												</div>
											</div>
										</div>
										<div class="characteristics-list invis">
											<div class="characteristics-list-title">
												Габариты
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Высота, мм.
												</div>
												<div class="characteristics-value">
													730 
												</div>
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Ширина, мм.
												</div>
												<div class="characteristics-value">
													400
												</div>
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Длина, мм.
												</div>
												<div class="characteristics-value">
													300.00
												</div>
											</div>
										</div>
										<div class="characteristics-list invis">
											<div class="characteristics-list-title">
												Габариты
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Высота, мм.
												</div>
												<div class="characteristics-value">
													730 
												</div>
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Ширина, мм.
												</div>
												<div class="characteristics-value">
													400
												</div>
											</div>
											<div class="characteristics-item">
												<div class="characteristics-key">
													Длина, мм.
												</div>
												<div class="characteristics-value">
													300.00
												</div>
											</div>
										</div>
										<a href="#" class="product__read__more-link">
											ПОКАЗАТЬ ВСЕ ХАРАКТЕРИСТИКИ
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="product__tabs">
							<ul class="tabs__link-list">
								<li class="tabs__link-item" :class="activeTab(1)">
									<a href="#" @click.prevent="showTab(1)" class="tabs__link-link" id="tab1">
										<span>Описание</span>
									</a>
								</li>
								<li class="tabs__link-item" :class="activeTab(2)">
									<a href="#" @click.prevent="showTab(2)" class="tabs__link-link" id="tab2">
										<span>Отзывы</span>
									</a>
								</li>
								<li class="tabs__link-item tabs__link-item_empty"></li>
							</ul>
							<div class="tabs__content-list">
								<div class="tabs__content-item tabs__content_active" id="tab__content1" v-show="tab === 1">
									Габариты<br>
									Высота, мм 	730 Ширина, мм 	400 Длина, мм 	300,00
									<br>Общее<br>
									Производитель 	Bosch Артикул 	7736900198RU Серия 	GAZ 6000 Модель 	Gaz 6000 W WBN 6000-24 С Страна 	Россия
									<br>Дополнительная информация<br>
									Тип 	газовый Тип установки 	настенный Мощность, кВт 	24 MAX температура ГВС 	+60 MAX температура отопления, °C 	+82 Погодозависимое управление 	нет
								</div>
								<div class="tabs__content-item" id="tab__content2" v-show="tab === 2">
									Отзывы
								</div>
							</div>
						</div>
						<div class="product__analogs">
							<div class="title_aftered">
								Аналоги
							</div>
							<div class="row analog__products-list">
								
							</div>
						</div>
					</div>
				</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
	name: 'Product',
	data() {
		return {
			tab: 1,
			quantity: 1
		}
	},
	methods: {
		formatPrice(price) {
            price += '';
            return price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
		},
		showTab(tabId) {
			this.tab = tabId
		},
		addToCart(id, quantity) {
			this.$store.commit('cart/addToCart', {id: id, quantity: quantity})
			this.$root.$emit('addedToCart')
		},
		setQuantity(token) {
			switch(token) {
				case '+': {
					this.quantity++
					break
				}
				case '-': {
					if(this.quantity !== 1) this.quantity--
					break
				}
			}
		},
		activeTab(id) {
			if (this.tab === id) {
				return 'tabs__link_active'
			}
			return false
		}
	},
    computed: {
		...mapGetters('products', ['currentProduct']),
		...mapGetters('categoryes', ['productCategory']),
        cProduct() {
			const productUrl = this.$route.params.product;
			return this.currentProduct(productUrl);
		},
		cCategory() {
			return this.productCategory(this.cProduct.categoryId);
		},
    }
}
</script>
