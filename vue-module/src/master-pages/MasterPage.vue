<template>
  <div>
    <custom-header />
    <slot></slot>
  </div>
</template>

<script>
import CustomHeader from '../components/CustomHeader.vue';

export default {
  name: 'MasterPage',
  components: { CustomHeader },
};
</script>

<style lang="css" scoped></style>
