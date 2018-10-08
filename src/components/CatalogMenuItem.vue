<template>
<li class="catalog__menu-item">
    <router-link :to="{name:'catalog', params: {category: category.url}}" class="catalog__menu-link">
        <span class="catalog__menu-text">		{{ category.name }}		</span>
        <div class="catalog__menu-arrow">
            <i class="fas fa-caret-right"></i>
        </div>
    </router-link>
</li>
</template>

<script>
import Vue from "vue";

export default {
    name: "CatalogMenuItem",
    props: ["category"]
};
</script>
