<template>
  <form class="ui form">
    <p>{{user}}</p>
    <h4 class="ui dividing header">Shipping Information</h4>
    <div class="field">
      <label>Name</label>
      <div class="two fields">
        <div class="field">
          <input type="text" v-model="user.name.firstname" placeholder="First Name" />
        </div>
        <div class="field">
          <input type="text" v-model="user.name.lastname" placeholder="Last Name" />
        </div>
      </div>
    </div>
    <div class="field">
      <label>Name</label>
      <div class="two fields">
        <div class="field">
          <input type="text" placeholder="Email" v-model="user.email" />
        </div>
        <div class="field">
          <input type="text" placeholder="Tel" v-model="user.phone" />
        </div>
      </div>
    </div>
    <div class="field">
      <label>Shipping Address</label>
      <div class="fields">
        <div class="field">
          <input type="text" placeholder="number" v-model="user.address.number" />
        </div>
        <div class="field">
          <input type="text" placeholder="city" v-model="user.address.city" />
        </div>
      </div>
      <div class="fields">
        <div class="field">
          <input type="text" placeholder="Street" v-model="user.address.street" />
        </div>
        <div class="field">
          <input type="text" placeholder="Zipcode" v-model="user.address.zipcode" />
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