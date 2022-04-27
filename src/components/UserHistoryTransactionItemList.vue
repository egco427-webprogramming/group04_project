<template >
  <template v-for="item,idx in items">
    <div class="three wide column">
    </div>
    <div class="ten wide column left aligned detail">
      <div class="item">
      </div>
      <br />
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