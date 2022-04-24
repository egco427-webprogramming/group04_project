<template>
  <div class="ui stackable grid">
    <div class="twelve wide column">12
      <h4>Your cart</h4>
      <p>Product lsit</p>
      <br>

      <div class="item" v-for="item in cart">
        <div class="ui internally celled grid ">
          <div class="row">
            <div class="three wide column">
              <img class="ui small image" :src="item.img_url" :alt="item.name">
            </div>
            <div class="ten wide column detail">
              <span class="product-name">{{item.name}}</span>
              <br>
              <span class="product-type">Type:{{item.category}}</span>
              <br>
              <span class="product-amount">Amount:{{item.amount}}</span>
            </div>
            <div class="three wide column">
              <span>THB {{String(Math.round(item.price*item.amount))}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="two wide column">2
      <h4>Summary</h4>
      <div>Subtotal:{{totalPrice}}</div>
      <div>Discount:{{totalDiscount}}</div>
      <div>Total:{{totalResult}}</div>
    </div>
  </div>

  <h1>use this to make form</h1>
  <div>id:{{id}}</div>
  <div>user:{{user}}</div>

  <button @click.prevent="buyHandle">Checkout</button>
</template>

<script>
  import {
    computed,
    ref
  } from "vue";
  import {
    useStore
  } from "vuex";
  import {
    useRouter
  } from "vue-router";
  import {
    getUser,
    updateUser
  } from "../services/user.service";
  import {
    addHistory
  } from "../services/history.service";
  export default {
    props: {
      id: String,
    },
    async setup(props) {
      const {
        getters
      } = useStore();
      const router = useRouter();

      const cart = computed(() => getters["cart/cart"]);
      const totalPrice = computed(() => getters["cart/totalPrice"]);
      const totalDiscount = computed(() => getters["cart/totalDiscount"]);
      const totalResult = computed(() => getters["cart/totalResult"]);

      const user = ref(await getUser(props.id));

      const buyHandle = async () => {
        try {
          if (cart.value.length == 0) {
            return alert("Did you forgot something");
          }
          await updateUser(props.id, user.value);
          await addHistory({
            item: cart.value,
            uid: props.id,
            price: totalResult.value,
          });
          router.push("/purchased");
        } catch (err) {
          console.error(err);
        }
      };

      return {
        cart,
        totalPrice,
        totalDiscount,
        totalResult,
        user,
        buyHandle
      };
    },
  };
</script>

<style>
  .image {
    margin: auto;
  }
  .detail{
  text-align: left;
  }
</style>