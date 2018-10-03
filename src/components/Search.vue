<template>
    <div class="site__search">
								<input type="text" placeholder="Поиск по сайту" class="site__search-input" v-model="searchQuery">
								<a href="#" @click.prevent="search()" class="site__search-link">
									<img src="img/searcher.png" alt="" class="site__search-pic">
								</a>
							</div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'Search',
    methods: {
        search() {
            console.log(this.searchQuery);
        }
    }
}
</script>


<style lang="scss">

</style>
