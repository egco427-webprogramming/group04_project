<template >
  <template v-for="item,idx in items">
    <div class="three wide column" align="center">
      <img class="ui small image" :src="item?.img_url" :alt="item?.name"/>
    </div>
    <div class="ten wide column left aligned detail">
      <div class="item">
        <span class="product-name">{{item?.name}}</span>
        <span class="product-amount">x {{item?.amount}}</span>
      </div>
      <span class="product-type">Category : {{item?.category}}</span>
      <br>
      <!-- <span class="product-amount">Amount : {{item?.amount}}</span>
      <br> -->
    </div>
    <div class="three wide center aligned column">
      <!-- <span>THB {{String(Math.round(item?.price))}}</span> -->
      <div v-if="item.promotion > 0">
        <span class="total-price">THB {{String(Math.round(item.price*item.amount))}}</span>
        <span class="total-sale-price"> THB {{finalPrice(item.price*item.amount,item.promotion)}}</span>
      </div>
      <div v-else>
        <span> THB {{String(Math.round(item.price*item.amount))}}</span>
      </div>
      <!-- <span>THB {{String(Math.round(item?.price*item?.amount))}}</span> -->
    </div>
  </template>
</template>
<script>
export default {
  props: { items: Object },
  methods: {
    finalPrice(price, discount) {
      return String(Math.round((price * (100 - discount)) / 100));
    },
  },
};
</script>

<style scoped>
.product-name {
  font-size: 16px;
  font-weight: bold;
}
.product-amount {
  float: right;
}
.total-price {
  text-decoration: line-through;
}
.total-sale-price {
  color: #cb0000;
  font-weight: bold;
}
</style>