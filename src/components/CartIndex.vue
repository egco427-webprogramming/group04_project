<template>
  <div>cart:{{cart}}</div>
  <div>total:{{totalPrice}}</div>
  <div>discount:{{totalDiscount}}</div>
  <div>Result:{{totalResult}}</div>
  <div>id:{{id}}</div>

  <div>user:{{user}}</div>

  <button @click.prevent="buyHandle">buy</button>
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
          item: cart.value,
          uid: props.id,
          price: totalResult.value,
        });
        router.push("/purchased");
      } catch (err) {
        console.error(err);
      }
    };

    return { cart, totalPrice, totalDiscount, totalResult, user, buyHandle };
  },
};
</script>

<style>
</style>