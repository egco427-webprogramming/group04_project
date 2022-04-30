<template>
  <div id="cart-button">
    <router-link :to="{name:'Cart'}">
      <sui-icon name="shopping cart" />
    </router-link>
  </div>
  <div class="ui simple dropdown item" id="cart-dropdown">
    <sui-icon name="shopping cart" />
    THB {{totalResult}}
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item" v-for="item in cart">
        <div class="col">
          <span class="product-name">{{item.name}} x {{item.amount}}</span>
          <br>
          <div v-if="item.promotion > 0">
            <span class="total-price">THB {{String(Math.round(item.price*item.amount))}}</span>
            <span class="total-sale-price">THB {{totalPrice(item.price*item.amount,item.promotion)}}</span>
          </div>
          <div v-else>
            <span>THB {{String(Math.round(item.price*item.amount))}}</span>
          </div>
        </div>
        <div class="col" align="right">
          <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
          <!-- <button class="ui button" @click.prevent="()=>removeProduct(item)">
            <sui-icon name="trash alternate" />delete
          </button>-->
          <button
            class="ui small icon button"
            @click.prevent="()=>removeProduct(item)"
            id="minus-icon"
            align="center"
          >
            <i class="icon" :class="item.amount>1?'minus':'trash'"></i>
          </button>
          <span class="product-amount">&nbsp {{item.amount}} &nbsp</span>
          <button
            class="ui small icon button"
            @click.prevent="()=>addProduct(item)"
            id="plus-icon"
            align="center"
          >
            <i class="plus icon"></i>
          </button>
        </div>
      </div>
      <div class="item">
        <div v-if="cart.length !== 0">
          <router-link :to="{name:'Cart'}">
            <div class="d-grid gap-2 col-6 mx-auto" align="center">
              <button class="large ui secondary button">Buy</button>
            </div>
          </router-link>
        </div>
        <template v-else>
          <p class="empty-bag-icon">
            <br>
            <sui-icon name="shopping cart" />
          </p>
          <br>
          <p class="empty-bag-text" align="center">Your cart is empty.</p>
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
    const totalResult = computed(() => getters["cart/totalResult"]);
    const removeProduct = ({ _id }) => {
      dispatch("cart/removeProduct", { id: _id });
    };
    const addProduct = ({ _id }) => {
      dispatch("cart/addProduct", { id: _id, amount: 1 });
    };
    return { cart, totalResult, removeProduct, addProduct };
  },
  methods: {
    totalPrice(price, discount) {
      return String(Math.round((price * (100 - discount)) / 100));
    },
  },
};
</script>

<style scoped >
a {
  text-decoration: none;
}
br {
  display: block; /* makes it have a width */
  content: ""; /* clears default height */
  margin-top: 10px; /* change this to whatever height */
}
.product-name {
  font-weight: bold;
}
.total-price {
  text-decoration: line-through;
}
.total-sale-price {
  color: #cb0000;
  font-weight: bold;
}
.empty-bag-icon {
  font-size: 35px;
  line-height: 0px;
  margin: 0 8px;
  color: rgb(186, 183, 183);
  opacity: 0.75;
  text-align: center;
}
.empty-bag-text {
  font-size: 15px;
  font-weight: bold;
  margin: auto;
  color: rgb(162, 160, 160);
  opacity: 0.75;
}
#cart-item {
  gap: 32px;
}
#cart-button {
  display: none;
}
#cart-dropdown > .menu {
  max-height: 80vh;
  min-width: 350px;
  overflow: auto;
}
</style>
<style >
/* media query */

@media only screen and (max-width: 640px) {
  #cart-dropdown {
    display: none;
  }
  #cart-button {
    display: block !important;
  }
}
</style>