<template>
  <div>
    <div class="filtration">
      <div>
        <h5 class="filter m-4">Сортувати</h5>
        <select v-model="filter" class="form-select">
          <option value="title">Назва</option>
          <option value="measurement">Одиниця вимірювання</option>
          <option value="amount">Кількість</option>
          <option value="price">Ціна</option>
        </select>
      </div>
      <div>
        <h5 class="filter m-4">Пошук</h5>
        <input type="text" class="sort-input" v-model="search" />
      </div>
    </div>
    <div class="product-list ">
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
      search: '',
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
      let list = [...this.getProductList];
      if (this.filter) {
        switch (this.filter) {
          case 'title':
            list = list.sort(this.sortText);
            break;
          case 'measurement': {
            list = list.sort(this.sortText);
            break;
          }
          case 'amount': {
            list = list.sort(this.sortNumbers);
            break;
          }
          case 'price': {
            list = list.sort(this.sortNumbers);
            break;
          }
        }
      }
      if (this.search) {
        list = list.filter(({ title }) => {
          return title.toLowerCase().includes(this.search.toLowerCase());
        });
      }
      return list;
    },
  },
};
</script>

<style lang="css" scoped>
.filtration {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.filtration div {
  width: 100%;
  margin: 15px;
}
.filter {
  text-align: center;
  line-height: 1.5;
}
.sort-input {
  padding: 7px;
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid gray;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}
</style>
