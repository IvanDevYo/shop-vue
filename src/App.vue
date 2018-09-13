<template>
<div class="wrap__all">
  <div class="wrapper">
    <header-component></header-component>
    <content-component></content-component>
  </div>
  <footer-component></footer-component>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ContentComponent from './components/ContentComponent.vue';
@Component({
  components: {
    HeaderComponent,
    FooterComponent,
    ContentComponent
  }
})
  export default class App extends Vue {
    public message: string = 'hello';
  }
</script>


<style lang="scss">

</style>
