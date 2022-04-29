<template>
  <main class="ui stackable grid centered" id="header-form">
    <div class="eight wide column">
      <h1 class="mt-3 ui dividing header large" id="header-cart">Your cart</h1>
      <div class="ui celled grid" id="header-item">
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
              <span class="product-type">Type : {{item.category}}</span>
              <br />
              <span class="product-amount">Amount : {{item.amount}}</span>
            </div>
            <div class="three wide center aligned column">
              <span>THB {{String(Math.round(item.price*item.amount))}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="one wide column">
    </div>
    <div class="five wide column" id="detail-form">
      <h4 class="mt-3 ui dividing header large" id="header-summary">Summary</h4>
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

      <form action="" class="ui form">
        <div class="field">

          <div class="field" id="firstname-field">
            <label>First Name</label>
            <input type="text" v-model="user.firstname" placeholder="First Name" required />
          </div>
          <div class="field" id="lastname-field">
            <label>Last Name</label>
            <input type="text" v-model="user.lastname" placeholder="Last Name" required />
          </div>
          <div class="field" id="mobile-field">
            <label>Mobile Number</label>
            <input type="text" placeholder="Tel" v-model="user.tel" required />
          </div>
          <div class="field" id="card-field">
            <label>Card Number</label>
            <input type="text" placeholder="**** **** **** ****" :maxlength="16" required />
          </div>

          <div class="fields">
            <div class=" field">
              <label>CVC</label>
              <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC" required>
            </div>
            <div class=" field">
              <label>Expiration</label>
              <div class="two fields">
                <div class="field">
                  <select class="ui fluid search dropdown" name="card[expire-month]" required>
                    <option value="" >Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
                <div class="field">
                  <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year" required>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label>Shipping Address</label>
          <div class="field">
            <textarea rows="2" type="text" placeholder="Address" v-model="user.adr" required />
            </div>
        </div>
        <!-- <button class="mb-5 ui secondary button" @click.prevent="buyHandle">Checkout</button> -->
        <div align="center">
          <button class="ui black button "  @click.prevent="buyHandle" type="submit" id="checkout-button">Chaeck out</button>
        </div>
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
    const { getters, dispatch } = useStore();
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
        await dispatch("cart/clearCartAfterPurchase");
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
#header-form {
  margin-top: 20px;
  margin-bottom: 1%
}
#header-cart, #header-summary {
  font-size: 45px;
  color: rgb(54, 54, 55)
}
#checkout-button {
  height: 43px;
  width: 350px;
  border-radius: 30px;
  margin: 35px auto auto auto;
}
#header-item {
  margin-top: 35px;
}
/* .product-name {
  font-weight: 200000;
} */

#detail-form {
  min-width: max-content;
}
</style>