<template>
  <div class="col-lg-9 col-12">
					<div class="banners">
						<div class="row">
							<div class="col-lg-8">
								<div class="big__banner" style="background-image: url(img/banner-1.png);">
									<div class="dark-bg"></div>
									<div class="big__banner-texts">
										<div class="big__banner-texts_container">
											<div class="big__banner-title">
												ПОД КЛЮЧ
											</div>
											<div class="big__banner-text_bg">
												<div class="big__banner-text_bg-container">
													При заказе “Под ключ” инж сантехники и <br>санфаянс, скидка на оборудование
													<span>10%</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="small__banner" style="background-image: url(img/banner-2.png);">
									<div class="blue-bg"></div>
									<div class="small__banner-texts">
										<div class="small__banner-title">
											Скидка 10 %
										</div>
										<div class="small__banner-text">
											Монтажникам, Прорабам, Дизайнерам
										</div>
									</div>
								</div>
								<div class="small__banner" style="background-image: url(img/banner-2.png);">
									<div class="blue-bg"></div>
									<div class="small__banner-texts">
										<div class="small__banner-title">
											Скидка 10 %
										</div>
										<div class="small__banner-text">
											Монтажникам, Прорабам, Дизайнерам
										</div>
									</div>
								</div>
								<div class="small__banner" style="background-image: url(img/banner-2.png);">
									<div class="blue-bg"></div>
									<div class="small__banner-texts">
										<div class="small__banner-title">
											Скидка 10 %
										</div>
										<div class="small__banner-text">
											Монтажникам, Прорабам, Дизайнерам
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="advantages">
						<div class="row">
							<div class="col-lg-4 advantages-item-container">
								<div class="advantages-item">
									<div class="advantages-head">
										<div class="advantages-icon">
											<img src="img/icon-list.png" alt="" class="advantages-iconpic">
										</div>
										<div class="advantages-title">Самый широкий ассортимент!</div>
									</div>
									<div class="advantages-text">
										Огромный выбор предложений на наших складах. Товары и бренды на любой вкус.
									</div>
								</div>
							</div>
							<div class="col-lg-4 advantages-item-container">
								<div class="advantages-item">
									<div class="advantages-head">
										<div class="advantages-icon">
											<img src="img/icon-discount.png" alt="" class="advantages-iconpic">
										</div>
										<div class="advantages-title">Скидки и акции!</div>
									</div>
									<div class="advantages-text">
										Гибкая система скидок на множество товаров. Новые Акции каждую неделю! Скидки постоянным покупателям.
									</div>
								</div>
							</div>
							<div class="col-lg-4 advantages-item-container">
								<div class="advantages-item">
									<div class="advantages-head">
										<div class="advantages-icon">
											<img src="img/icon-shield.png" alt="" class="advantages-iconpic">
										</div>
										<div class="advantages-title">Качество и контроль!</div>
									</div>
									<div class="advantages-text">
										Мы являемся диллерами продаваемых марок. Товар всегда проверяется перед продажей.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="discount" v-if="discountProducts.length">
						<div class="title_aftered">
							Акции и скидки
						</div>
						<div class="row discount-list">
							<product-card v-for="(product, index) in discountProducts" :product="product" :key="index"></product-card>
						</div>
					</div>
					<div class="new__products">
						<div class="title_aftered">
							Новые поступления
						</div>
						<div class="row new__products-list">
							<product-card v-for="(product, index) in newProducts" :product="product" :key="index"></product-card>
						</div>
					</div>
					<div class="main__content">
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
						<div class="main__content-subtitle">
							Особенности оплаты
						</div>
						<div class="main__content-text">
							Для удобства покупателей предусмотрены различные варианты расчета за товары: перечисление на расчетный счет, перевод через Сбербанк от частного лица, оплата наличными средствами на руки экспедитору или через кассу в нашем офисе. Независимо от выбранного способа, покупатель получает на руки полный пакет документов.
						</div>
						<div class="main__content-subtitle">
							О скорости обслуживания и доставке
						</div>
						<div class="main__content-text">
							Одним из ключевых достоинств покупки в Интернете является оперативная обработка, комплектация и транспортировка заказов. Для удобства наших клиентов мы ввели услугу экспресс-набора и доставки продукции в течение часа по Москве (стоимость всего 1000 рублей). Для региональных покупателей предусмотрены удобные схемы отправки через транспортную компанию. В этом случае стоимость доставки в пределах столицы до склада перевозчика – всего 500 рублей!
						</div>
					</div>
				</div>
</template>

<script>
import Vue from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'Home',
	components: {
		ProductCard
	},
	computed: {
		...mapGetters('products', ['discountProducts','newProducts'])
	}
}
</script>


<style lang="scss">

</style>
