<template>
  <div>
    <div class="m-4">
      <h5 class="filter m-4">Фільтр</h5>
      <select v-model="filter" class="form-select">
        <option value="title">Назва</option>
        <option value="measurement">Одиниця вимірювання</option>
        <option value="amount">Кількість</option>
        <option value="price">Ціна</option>
      </select>
    </div>
    <div class="product-list">
      <product-list-item
        v-for="product in filteredList"
        :product="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script>
import ProductListItem from './ProductListItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ProductList',
  components: {
    ProductListItem,
  },
  data() {
    return {
      filter: '',
    };
  },
  methods: {
    sortNumbers(item1, item2) {
      if (parseInt(item1[this.filter]) > parseInt(item2[this.filter])) {
        return 1;
      }
      if (parseInt(item1[this.filter]) === parseInt(item2[this.filter])) {
        return 0;
      }
      return -1;
    },
    sortText(item1, item2) {
      if (item1[this.filter] > item2[this.filter]) {
        return 1;
      }
      if (item1[this.filter] === item2[this.filter]) {
        return 0;
      }
      return -1;
    },
  },
  computed: {
    ...mapGetters(['getProductList']),
    filteredList() {
      const list = [...this.getProductList];
      if (this.filter) {
        switch (this.filter) {
          case 'title':
            return list.sort(this.sortText);
          case 'measurement': {
            return list.sort(this.sortText);
          }
          case 'amount': {
            return list.sort(this.sortNumbers);
          }
          case 'price': {
            return list.sort(this.sortNumbers);
          }
        }
      }
      return this.getProductList;
    },
  },
};
</script>

<style lang="css" scoped>
.filter {
  text-align: center;
  font-size: 1.7rem;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}
</style>
