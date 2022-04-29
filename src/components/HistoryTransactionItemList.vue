<template >
  <template v-for="item,idx in items">
    <div class="three wide column">
      <img class="ui small image" :src="item?.img_url" :alt="item?.name" />
    </div>
    <div class="ten wide column left aligned detail">
      <div class="item">
        <span class="product-name">{{item?.name}}</span>
      </div>
      <span class="product-type">Category:{{item?.category}}</span>
      <br />
      <span class="product-Amount">Amount:{{item?.amount}}</span>
      <br />
    </div>
    <div class="three wide center aligned column">
      <span>THB {{String(Math.round(item?.price))}}</span>
      <!-- <span>THB {{String(Math.round(item?.price*item?.amount))}}</span> -->
    </div>
  </template>
</template>
<script>
export default {
  props: { items: Object },
};
</script>

<style>
</style>