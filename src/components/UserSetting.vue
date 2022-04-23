<template>
  <form class="ui form">
    <p>{{user}}</p>
    <h4 class="ui dividing header">Shipping Information</h4>
    <div class="field">
      <label>Name</label>
      <div class="two fields">
        <div class="field">
          <input type="text" v-model="user.firstname" placeholder="First Name" />
        </div>
        <div class="field">
          <input type="text" v-model="user.lastname" placeholder="Last Name" />
        </div>
      </div>
    </div>
    <div class="field">
      <label>Name</label>
      <div class="two fields">
        <div class="field">
          <input type="text" placeholder="Tel" v-model="user.tel" />
        </div>
      </div>
    </div>
    <div class="field">
      <label>Shipping Address</label>
      <div class="fields">
        <div class="field">
          <input type="text" placeholder="address" v-model="user.adr" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
/**
 * adr,email,firstname,lastname,tel,uid(firebase),_id(mongo)
 */
export default {
  props: {
    user: Object,
  },
};
</script>

<style>
</style>