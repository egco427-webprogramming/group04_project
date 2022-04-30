<template>
  <main class="ui stackable grid centered" id="header-form">
    <div class="nine wide column" id="cart-form">
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
            <div class="three wide column cart-detail">
              <img class="ui small image" :src="item.img_url" :alt="item.name" />
            </div>
            <div class="ten wide column left aligned detail">
              <div class="row">
                <div class="column" id="name-column">
                  <span class="product-name">{{item.name}}</span>
                </div>
                <div class="column" id="amount-column">
                  <button class="ui small icon button" @click.prevent="()=>removeProduct(item)" id="trash-icon" align="center">
                    <i class="trash icon"></i>
                  </button>
                  <button class="ui small icon button" @click.prevent="()=>addProduct(item)"  id="plus-icon" align="center">
                    <i class="plus icon"></i>
                  </button>
                  <span class="product-amount">&nbsp {{item.amount}} &nbsp</span>
                  <button class="ui small icon button" @click.prevent="()=>removeProduct(item)" id="minus-icon" align="center">
                    <i class="minus icon"></i>
                  </button>
                </div>
              </div>
              <p class="product-type">Categoty : {{item.category}}</p>
            </div>
            <div class="three wide center aligned column" id="price-text">
              <div v-if="item.promotion > 0">
                <div>
                  <span class="total-price">THB {{String(Math.round(item.price*item.amount))}}</span>
                  <span
                    class="total-sale-price"
                  > THB {{finalPrice(item.price*item.amount,item.promotion)}}</span>
                </div>
              </div>
              <div v-else>
                <span class="total-price">THB {{String(Math.round(item.price*item.amount))}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="five wide column" id="detail-form">
      <h4 class="mt-3 ui dividing header large" id="header-summary">Summary</h4>
      <!-- <br> -->
      <div class="ui vertically divided grid m-4">
        <div class="two column row" id="summary-detail">
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

      <form action class="ui form" @submit.prevent="buyHandle">
        <div class="field">
          <div class="required field" id="firstname-field">
            <label>First Name</label>
            <input type="text" v-model="user.firstname" placeholder="First Name" required />
          </div>
          <div class="required field" id="lastname-field">
            <label>Last Name</label>
            <input type="text" v-model="user.lastname" placeholder="Last Name" required />
          </div>
          <div class="required field" id="mobile-field">
            <label>Mobile Number</label>
            <input type="text" placeholder="Tel" v-model="user.tel" required />
          </div>
          <div class="required field" id="card-field">
            <label>Card Number</label>
            <input type="text" placeholder="**** **** **** ****" :maxlength="16" required />
          </div>

          <div class="fields">
            <div class="required field">
              <label>CVC</label>
              <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC" required />
            </div>
            <div class="required field">
              <label>Expiration</label>
              <div class="two fields">
                <div class="field">
                  <select class="ui fluid search dropdown" name="card[expire-month]" required>
                    <option value>Month</option>
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
                <div class="required field">
                  <input
                    type="text"
                    name="card[expire-year]"
                    maxlength="4"
                    placeholder="Year"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="required field">
          <label>Shipping Address</label>
          <div class="field">
            <textarea rows="2" type="text" placeholder="Address" v-model="user.adr" required />
          </div>
        </div>
        <div align="center">
          <button class="ui black button" type="submit" id="checkout-button">Check out</button>
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

    const removeProduct = ({ _id }) => {
      dispatch("cart/removeProduct", { id: _id });
    };
    const addProduct = ({ _id }) => {
      dispatch("cart/addProduct", { id: _id, amount: 1 });
    };

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
      addProduct,
      removeProduct,
    };
  },
  methods: {
    finalPrice(price, discount) {
      return String(Math.round((price * (100 - discount)) / 100));
    },
  },
};
</script>

<style scoped>
.form {
  margin: 5%;
}
#header-form {
  margin-top: 20px;
  margin-bottom: 1%;
}
#header-cart,
#header-summary {
  font-size: 50px;
  color: rgb(54, 54, 55);
}
#checkout-button {
  height: 50px;
  width: 350px;
  border-radius: 30px;
  margin: 35px auto auto auto;
}
#header-item {
  margin-top: 35px;
}
.product-name {
  font-size: 16px;
  font-weight: bold;
}
#minus-icon,
.product-amount,
#plus-icon,
#trash-icon {
  float: right;
}
.product-amount {
  font-size: 16px;
  margin-top: 7px;
}
#detail-form {
  min-width: max-content;
  margin-left: 2%;
}
#summary-detail {
  font-size: 16px;
}
.total-price {
  text-decoration: line-through;
}
.total-sale-price {
  color: #cb0000;
  font-weight: bold;
}
#price-text {
  margin-top: 7px;
}
#name-column {
  width: 60%;
  margin-top: 7px;
}
#amount-column {
  width:40%;
  min-width: max-content;
}
</style>