<template>
  <div class="content">
    <div class="container row-content">
      <left-column></left-column>
      <home></home>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import LeftColumn from './LeftColumn.vue';
import Home from './Home.vue';
@Component({
  components: {
    LeftColumn,
    Home
  }
})
  export default class ContentComponent extends Vue {
    public message: string = 'hello';
  }
</script>


<style lang="scss">

</style>
