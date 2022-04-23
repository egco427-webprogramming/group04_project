<template>
  <form class="ui form">
    <p>{{user}}</p>
    <h4 class="ui dividing header">Edit Profile</h4>
      <div class="field">
        <label>Username</label>
        <input type="text" placeholder="Username" />
      </div>
<br>
    <div class="two fields">
      <div class="field">
        <label>First name</label>
        <input type="text" v-model="user.name.firstname" placeholder="First Name" />
      </div>
      <div class="field">
        <label>Last name</label>
        <input type="text" v-model="user.name.lastname" placeholder="Last Name" />
      </div>
    </div>

    <div class="field">
      <div class="field">
        <label>Email</label>
        <input type="text" placeholder="Email" v-model="user.email" />
      </div>
      <div class="field">
        <label>Mobile Number</label>
        <input type="text" placeholder="Tel" v-model="user.tel" />
      </div>
    </div>
<br>
    <div class="field">
      <label>Shipping Address</label>
        <div class="field">
          <textarea rows="2" type="text" placeholder="Address" v-model="user.adr" />
        </div>
    </div>
      <button class="ui button blue" type="submit">Update User</button>

      <h4 class="ui dividing header">Purchase History</h4>

  </form>
</template>

<script>
  export default {
    props: {
      user: Object,
    },
  };
  
</script>

<style>
  .form {
    margin-left: 20%;
    margin-right: 20%;
    text-align: left;
  }

</style>