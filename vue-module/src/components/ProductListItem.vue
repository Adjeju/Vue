<template>
  <div class="product-list-item">
    <div><img :src="product.imgUrl" :alt="product.title" /></div>
    <div class="item-info">
      <p>Назва: {{ product.title }}</p>
      <p>Одиниця вимірювання: {{ product.measurement }}</p>
      <p>Кількість: {{ product.amount }}</p>
      <p>Ціна: {{ product.price }} грн</p>
      <button class="btn btn-danger" @click="deleteItem">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions(['deleteProductFromList']),
    deleteItem() {
      this.deleteProductFromList(this.product);
    },
  },
};
</script>

<style lang="css" scoped>
.product-list-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px;
}
.item-info {
  text-align: center;
  color: #457b9d;
}
img {
  width: 250px;
  margin: 0 auto;
}
</style>
