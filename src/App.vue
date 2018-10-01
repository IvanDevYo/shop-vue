<template>
<div class="wrap__all">
  <div class="wrapper">
    <header-component></header-component>
    <content-component></content-component>
  </div>
  <footer-component></footer-component>
</div>
</template>

<script>
import Vue from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ContentComponent from './components/ContentComponent.vue';
export default {
    components: {
      HeaderComponent,
      FooterComponent,
      ContentComponent
    }
}
</script>


<style lang="scss">

</style>
