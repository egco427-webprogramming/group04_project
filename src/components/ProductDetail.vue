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
import { getProduct } from "../services/product.service";
export default {
  props: {
    id: String | Number,
  },
  async setup(props) {
    const product = ref(await getProduct(props.id));
    console.log(product.value);
    return { product };
    // console.log(product.value);
  },
};
</script>

<style>
</style>