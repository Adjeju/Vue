import VueRouter from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import ProductFormPage from '../pages/ProductFormPage.vue';
import ProductListPage from '../pages/ProductListPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/list',
    component: ProductListPage,
    name: 'productList',
  },
  {
    path: '/form',
    component: ProductFormPage,
    name: 'form',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
