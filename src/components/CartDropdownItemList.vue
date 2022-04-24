<template>
  <div class="ui simple dropdown item">
    <sui-icon name="shopping cart" />
    THB {{totalPrice}}
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item" v-for="item in cart"> 
          <div class="d-flex flex-row justify-content-between my-flex-container">
            <div class="col">
              <span class="product-name">{{item.name}} x {{item.amount}}</span>
              <br>
              <span>THB {{String(Math.round(item.price*item.amount))}}</span>
            </div>
            
            <div class="col" align="right">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button class="ui button"><sui-icon name="trash alternate"/>delete</button>
            </div>
          </div> 
      </div>
      <div class="item" >
        <div v-if="cart.length !== 0">
          <router-link :to="{name:'Cart'}">
              <div class="d-grid gap-2 col-6 mx-auto" align="center" >
                  <button class="large ui secondary button">Buy</button>
              </div>   
          </router-link>
        </div>
        <template v-else>
            <p class="empty-bag-icon"><br><sui-icon name="shopping cart" /></p>
            <br>
            <p class="empty-bag-text">Your shopping bag is empty.</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const { getters, dispatch } = useStore();

    const cart = computed(() => getters["cart/cart"]);
    const totalPrice = computed(() => getters["cart/totalPrice"]);
    const removeProduct = ({ _id }) => {
      dispatch("cart/removeProduct", { id: _id });
    };
    return { cart, totalPrice, removeProduct };
  },
  
};
</script>

<style>
a {
  text-decoration: none;
}
br {
  display: block; /* makes it have a width */
  content: ""; /* clears default height */
  margin-top: 10px; /* change this to whatever height */
}
.product-name{
  font-weight: bold;
}
.empty-bag-icon{
  font-size:35px;
  line-height:0px;
  margin:0 8px;
  color:rgb(186, 183, 183);
  opacity:0.75;
  text-align:center;
}
.empty-bag-text{
  font-size:15px;
  font-weight: bold;
  margin: auto;
  color:rgb(162, 160, 160);
  opacity:0.75;
}
</style>