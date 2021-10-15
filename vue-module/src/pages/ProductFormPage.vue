<template>
  <div class="product-form-page">
    <product-form />
  </div>
</template>

<script>
import ProductForm from '../components/ProductForm.vue';
export default {
  name: 'ProductFormPage',
  components: {
    ProductForm,
  },
};
</script>

<style scoped>
.product-form-page {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
