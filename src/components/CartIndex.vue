<template>
  <main class="ui stackable grid centered">
    <div class="eight wide column">
      <h4 class="mt-3 ui dividing header large">Your cart</h4>
      <div class="ui celled grid">
        <div class="row center aligned">
          <div class="three wide column">
            <p>Item</p>
          </div>
          <div class="ten wide column detail">
            <p>Detail</p>
          </div>
          <div class="three wide column">
            <p>Price</p>
          </div>
        </div>
      </div>

      <div class="item" v-for="item in cart">
        <div class="ui celled grid shadow">
          <div class="row">
            <div class="three wide column">
              <img class="ui small image" :src="item.img_url" :alt="item.name" />
            </div>
            <div class="ten wide column left aligned detail">
              <span class="product-name">{{item.name}}</span>
              <br />
              <span class="product-type">Type:{{item.category}}</span>
              <br />
              <span class="product-amount">Amount:{{item.amount}}</span>
            </div>
            <div class="three wide center aligned column">
              <span>THB {{String(Math.round(item.price*item.amount))}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="five wide column">
      <h5 class="m-4 ui dividing header large">Summary</h5>
      <!-- <br /> -->
      <div class="ui vertically divided grid m-4">
        <div class="two column row">
          <div class="column">
            <div>Subtotal:</div>
            <div>Discount:</div>
            <div>Total:</div>
          </div>
          <div class="column right aligned">
            <div>{{totalPrice}}</div>
            <div>{{totalDiscount}}</div>
            <div>{{totalResult}}</div>
          </div>
        </div>
      </div>

      <form class="ui form">
        <div class="field">
          <div class="field">
            <label>First name</label>
            <input type="text" v-model="user.firstname" placeholder="First Name" />
          </div>
          <div class="field">
            <label>Last name</label>
            <input type="text" v-model="user.lastname" placeholder="Last Name" />
          </div>
          <div class="field">
            <label>Mobile Number</label>
            <input type="text" placeholder="Tel" v-model="user.tel" />
          </div>
        </div>
        <div class="field">
          <label>Shipping Address</label>
          <div class="field">
            <textarea rows="2" type="text" placeholder="Address" v-model="user.adr" />
          </div>
        </div>
        <button class="mb-5 ui secondary button" @click.prevent="buyHandle">Checkout</button>
      </form>
    </div>
  </main>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getUser, updateUser } from "../services/user.service";
import { addHistory } from "../services/history.service";
export default {
  props: {
    id: String,
  },
  async setup(props) {
    const { getters } = useStore();
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
          items: cart.value,
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
      buyHandle,
    };
  },
};
</script>

<style scoped>
.form {
  margin: 5%;
}
</style>