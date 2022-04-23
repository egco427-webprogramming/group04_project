<template>
  <!-- implement better dropdown via other css framework -->
  <!-- <select name="cars" id="cars" class="dropdown">
    <option>name x amount</option>
    <option v-for="item in cart">{{item.name}} x {{item.amount}}</option>
    <div></div>
  </select>-->
  <!-- <div class="ui dropdown">
    <div class="text">Cart</div>
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item" v-for="item in cart">{{item.name}} x {{item.amount}}</div>
    </div>
  </div>-->
  <sui-dropdown :text="totalPrice+' Cart'">
    <sui-dropdown-menu>
      <sui-dropdown-item
        v-for="item in cart"
        :text="item.name+' x '+item.amount"
        :description=" '$' + String(Math.round(item.price*item.amount))"
      />
    </sui-dropdown-menu>
  </sui-dropdown>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const { getters } = useStore();

    const cart = computed(() => getters["cart/cart"]);
    const totalPrice = computed(() => getters["cart/totalPrice"]);
    return { cart, totalPrice };
  },
};
</script>

<style>
</style>