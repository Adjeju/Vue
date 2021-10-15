<template>
  <div>
    <h3 class="m-4">Форма для додавання продукту</h3>
    <form @submit="addNewProduct">
      <div>
        <label>
          Назва продукту:
          <input
            type="text"
            v-model="title"
            class="form-control"
            placeholder="Введіть назву продукту"
          />
        </label>
      </div>
      <div>
        <label>
          Url фото:
          <input
            type="text"
            v-model="imgUrl"
            class="form-control"
            placeholder="Введіть шлях до картинки"
          />
        </label>
      </div>
      <div>
        <label>
          Одиниця вимірювання:
          <input
            type="text"
            v-model="measurement"
            class="form-control"
            placeholder="Введіть одиниці вимірювання"
          />
        </label>
      </div>
      <div>
        <label>
          Кількість:
          <input
            type="number"
            v-model.number="amount"
            class="form-control"
            placeholder="Введіть кількість"
          />
        </label>
      </div>
      <div>
        <label>
          Ціна:
          <input
            type="number"
            v-model.number="price"
            class="form-control"
            placeholder="Введіть ціну продукту"
          />
        </label>
      </div>
      <button class="btn btn-success">
        Додати до списку
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductForm',
  data() {
    return {
      title: null,
      imgUrl: null,
      measurement: null,
      amount: null,
      price: null,
    };
  },
  methods: {
    ...mapActions(['addProduct']),
    addNewProduct() {
      this.addProduct({
        title: this.title,
        imgUrl: this.imgUrl,
        measurement: this.measurement,
        amount: this.amount,
        price: this.price,
      });
      this.title = null;
      this.imgUrl = null;
      this.measurement = null;
      this.amount = null;
      this.price = null;
    },
  },
};
</script>

<style lang="css" scoped>
form div,
button {
  margin: 15px;
}
label {
  width: 450px;
  font-size: 1.1rem;
}
</style>
