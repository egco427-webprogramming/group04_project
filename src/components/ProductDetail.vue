<template>
  <!-- product -->
  <div class="product-container">
    <h4>{{product.title}}</h4>
    <img :src="product.image" :alt="product.title" width="100" />
    <h4>{{product.price}}</h4>

    <p>{{product.description}}</p>
    <h6>{{product.category}}</h6>
    <button>add to cart</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { getProduct } from "../services/product.service";
export default {
  props: {
    id: String | Number,
  },
  async setup(props) {
    const product = ref(await getProduct(props.id));
    console.log(product.value);
    return { product };
  },
};
</script>

<style>
</style>