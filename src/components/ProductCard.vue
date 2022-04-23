<template>
  <sui-card>
    <!-- product image -->
    <sui-image :src="product.img_url" :alt="product.name" class="card-image" />
    <sui-card-content class="card-content" align="left">
      <!-- produvt name -->
      <sui-card-header>{{product.name}}</sui-card-header>
      <!-- product price -->
      <sui-card-meta>
        <span class="price">${{product.price}}</span>
      </sui-card-meta>
    </sui-card-content>
    <!-- add button -->
    <sui-button @click.prevent="addToCart" attached="bottom">
      <sui-icon name="cart plus" />Add to cart
    </sui-button>
  </sui-card>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: {
    product: Object,
  },
  setup(props) {
    const { dispatch } = useStore();

    const {
      product: { _id },
    } = props;
    const amount = 1;
    const addToCart = () => dispatch("cart/addProduct", { id: _id, amount });

    return { addToCart };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.card {
  width: 300px;
  height: 500px;
  cursor: pointer;
  margin-top: 0px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
}
.card-content {
  align-items: center;
}
.card-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}
</style> 