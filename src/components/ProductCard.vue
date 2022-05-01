<template>
  <sui-card>
    <!-- product image -->
    <router-link :to="{name:'Product',params:{id:product._id}}">
      <sui-image :src="product.img_url" :alt="product.name" class="card-image" />
    </router-link>
    <button v-if="isOnPromotion()" class="ui red button" id="button-sale">-{{product.promotion}}%</button>
    <sui-card-content class="card-content" align="left">
      <!-- product name -->
      <sui-card-header>
        <router-link :to="{name:'Product',params:{id:product._id}}">{{product.name}}</router-link>
      </sui-card-header>
      <!-- product price -->
      <sui-card-meta>
        <br />
        <span class="price" :class="isOnPromotion()&&'discount'">THB {{product.price}}</span>
        <span
          v-if="isOnPromotion()"
          class="sale-price"
        >THB {{(((product.price)*(100-product.promotion))/100).toFixed(2)}}</span>
      </sui-card-meta>
    </sui-card-content>

    <!-- add button -->

    <!-- Black Button -->
    <button class="ui black button" @click.prevent="addToCart" attached="bottom">
      <sui-icon name="cart plus" />Add to cart
    </button>
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
    const isOnPromotion = () => props.product.promotion > 0;
    return { addToCart, isOnPromotion };
  },
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
br {
  display: block; /* makes it have a width */
  content: ""; /* clears default height */
  margin-top: 6px; /* change this to whatever height */
}
.card {
  width: 300px;
  height: 450px;
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
.discount {
  text-decoration: line-through;
}
.sale-price {
  color: #cb0000;
  font-weight: bold;
}

#button-sale {
  position: absolute;
  padding: 5px;
  background-color: #cb0000;
  bottom: 35%;
  right: 3%;
  width: 70px;
}
</style> 