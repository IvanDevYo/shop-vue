<template>
  <div class="content">
    <div class="container row-content">
      <left-column></left-column>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import LeftColumn from './LeftColumn.vue';

export default {
  name: 'ContentComponent',
  components: {
    LeftColumn
  }
}
</script>


<style lang="scss">

</style>
