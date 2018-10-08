<template>
<div class="review-item">
    <div class="review-text">{{ rev.text }}</div>
</div>
</template>

<script>
import Vue from "vue";
import {
    mapGetters
} from "vuex";

export default {
    name: "ReviewItem",
    props: ["rev"],
    data() {
        return {};
    }
};
</script>
