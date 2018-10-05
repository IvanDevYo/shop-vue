<template>
  <div class="col-lg-3 no-padding-left catalog__menu-container">
					<div class="catalog__menu">
						<div class="catalog__menu-title">
							Каталог оборудования
						</div>
						<nav class="catalog__menu-nav">
							<ul class="catalog__menu-list">
								<li is="catalog-menu-item" v-for="(category, index) in categoryes"  :category="category" :key="index"></li>
							</ul>
						</nav>
					</div>
				</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex';
import CatalogMenuItem from './CatalogMenuItem.vue'

export default {
	name: 'LeftColumn',
	components: {
    	CatalogMenuItem
	},
	computed: {
		...mapGetters('categoryes', ['categoryes'])
	}
}
</script>
