import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productList: [
      {
        id: 1,
        title: 'Яйця',
        imgUrl:
          'https://rodikon.ru/images/statji/iStock_000012195679Small__59538_zoom.jpg',
        measurement: 'Поштучно / в контейнерах',
        amount: '20шт',
        price: '3',
      },
      {
        id: 2,
        title: 'Мука',
        imgUrl:
          'https://korzina.su/upload/resize_cache/iblock/e23/310_310_1/e23f80835d18474fb3f914fe9a8034a8.jpg',
        measurement: 'В пачках',
        amount: '2шт',
        price: '60',
      },
      {
        id: 3,
        title: 'Гречка',
        imgUrl:
          'https://feofanivska.com.ua/wp-content/uploads/2020/03/krupa-grechnevaya-aria-fasovannaya-1-kg.jpg',
        measurement: 'В пачках',
        amount: '1шт',
        price: '50',
      },
    ],
  },
  getters: {
    getProductList: (state) => state.productList,
  },
  mutations: {
    deleteProduct(state, { id }) {
      this.state.productList = state.productList.filter(
        (product) => product.id !== id
      );
    },
    addNewProduct(state, product) {
      state.productList.push({
        ...product,
        id: Date.now(),
      });
    },
  },
  actions: {
    deleteProductFromList({ commit }, product) {
      commit('deleteProduct', product);
    },
    addProduct({ commit }, product) {
      commit('addNewProduct', product);
    },
  },
});

export default store;
