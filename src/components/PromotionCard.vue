<template>
  <sui-card>
    <!-- product image -->
    <sui-image :src="product.img_url" :alt="product.name" class="card-image" />
    <button class="ui red button" id="button-sale">{{product.promotion}}%</button>
    
    <sui-card-content class="card-content" align="left">
      <!-- produvt name -->
      <sui-card-header>{{product.name}}</sui-card-header>
      <!-- product price -->
      <sui-card-meta>
        <br>
        <span class="price">THB {{product.price}}</span><span class="sale-price">THB {{((product.price)*(100-product.promotion))/100}}</span>
      </sui-card-meta>
    </sui-card-content>
    <!-- add button -->
    <sui-button @click.prevent="addToCart" attached="bottom" class="button-cart">
      <sui-icon name="cart plus" />Add to cart
    </sui-button>
  </sui-card>
</template>
/*
  category ,
  des,
  img_url,
  name,
  price,
  promotion["0-100"],
  sold,
  _id
 */
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
.price {
  text-decoration: line-through;
}
.sale-price {
  color: #cb0000;
  font-weight: bold;
}

#button-sale{
position: absolute;
padding: 5px;
background-color: #cb0000;
bottom: 35%;
right: 3%;
width: 60px;
}

</style> 