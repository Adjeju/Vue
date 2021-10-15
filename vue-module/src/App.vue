<template>
  <div id="app" class="container">
    <master-page>
      <router-view />
    </master-page>
  </div>
</template>

<script>
import MasterPage from './master-pages/MasterPage.vue';

export default {
  name: 'App',
  components: { MasterPage },
};
</script>

<style></style>
