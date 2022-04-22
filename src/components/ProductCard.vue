<template>
  <!-- <div class="card">
    <img :src="product.image" :alt="product.title" width="100" />
    <router-link :to="{name:'Product',params:{id:product.id}}">
      <h4>{{product.title}}</h4>
      <h4>{{product.price}}</h4> -->

      <!-- <p>{{product.description}}</p> -->
    <!-- </router-link>
    <h6>{{product.category}}</h6>
    <button @click.prevent="addToCart">add to cart</button>
  </div> -->

  <sui-card>
    <!-- product image -->
    <sui-image :src="product.image" :alt="product.title" width="100" hight="300" align="center"/>
    <sui-card-content align="left">
      <!-- produvt title -->
      <sui-card-header>
          {{product.title}}
      </sui-card-header>
      <!-- product price -->
      <sui-card-meta>
        <span class="price">฿3,800</span>
      </sui-card-meta>
    </sui-card-content>
    <!-- add button -->
    <sui-button @click.prevent="addToCart" attached="bottom" >
      <sui-icon name="add" />
      Add to cart
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
.img {
  max-width: 300px;
  width: 100%;
}
img:hover {
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.1s ease-in-out;
}
.buttons {
  gap: 5px;
}
</style>