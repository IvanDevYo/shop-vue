<template>
<div class="col-lg-9 col-12">
    <div class="catalog-title">{{ aboutContent.title }}</div>
    <div class="about__content">
        {{ aboutContent.content }}
    </div>
</div>
</template>

<script>
import Vue from "vue";
import {
    mapGetters
} from "vuex";

export default {
    name: "Cart",
    components: {},
    computed: {
        ...mapGetters("about", ["getAbout"]),
        aboutContent() {
            const aboutUrl = this.$route.params.page;
            console.log(aboutUrl);
            return this.getAbout(aboutUrl);
        }
    }
};
</script>
