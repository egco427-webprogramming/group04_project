<template>
  <div class="card">
    <img :src="product.image" :alt="product.title" width="100" />
    <router-link :to="{name:'Product',params:{id:product.id}}">
      <h4>{{product.title}}</h4>
      <h4>{{product.price}}</h4>

      <!-- <p>{{product.description}}</p> -->
    </router-link>
    <h6>{{product.category}}</h6>
    <button @click.prevent="addToCart">add to cart</button>
  </div>
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
      product: { id },
    } = props;
    const amount = 1;
    const addToCart = () => dispatch("cart/addProduct", { id, amount });

    return { addToCart };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.card {
  max-width: 300px;
  width: 100%;
}
</style>