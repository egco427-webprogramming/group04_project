<template>
  <!-- product -->
  <div class="product-container">
    <h4>{{product.name}}</h4>
    <img :src="product.img_url" :alt="product.name" width="100" />
    <h4>{{product.price}}</h4>

    <p>{{product.des}}</p>
    <h6>{{product.category}}</h6>
    <button @click.prevent="addToCart">add to cart</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { getProduct } from "../services/product.service";
export default {
  props: {
    id: String | Number,
  },
  async setup(props) {
    const { dispatch } = useStore();
    const product = ref(await getProduct(props.id));

    const amount = 1;
    const addToCart = () =>
      dispatch("cart/addProduct", { id: props.id, amount });

    // console.log(product.value);
    return { product, addToCart };
  },
};
</script>

<style>
</style>