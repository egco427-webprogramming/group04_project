<template>
  <form class="ui form" @submit.prevent="updateUser">
    <!-- <p>{{user}}</p> -->
    <h1 class="ui header" align="center" id="profile-text">Edit Profile</h1>
    <div class="field">
      <label id="uid-text">uid</label>
      <input disabled type="text" v-model="user.uid" placeholder="uid" id="uid-input" />
    </div>
    <div class="two fields">
      <div class="field">
        <label id="firstname-text">First name</label>
        <input type="text" v-model="user.firstname" placeholder="First Name" id="firstname-input" />
      </div>
      <div class="field">
        <label id="lastname-text">Last name</label>
        <input type="text" v-model="user.lastname" placeholder="Last Name" id="lastname-input" />
      </div>
    </div>

    <div class="field">
      <div class="field">
        <label id="email-text">Email</label>
        <input disabled type="text" placeholder="Email" v-model="user.email" />
      </div>
      <div class="field">
        <label id="mobile-text">Mobile Number</label>
        <input type="text" placeholder="Tel" v-model="user.tel" />
      </div>
    </div>

    <div class="field">
      <label id="address-text">Shipping Address</label>
      <div class="field">
        <textarea rows="2" type="text" placeholder="Address" v-model="user.adr" />
      </div>
    </div>
    <div align="center">
      <button
        class="ui black button"
        :class="isLoading&&'loading'"
        type="submit"
        id="update-button"
      >Update User</button>
    </div>
  </form>
</template>

<script>
/**
 * adr,email,firstname,lastname,tel,uid(firebase),_id(mongo)
 */
import { updateUser } from "../services/user.service";
export default {
  data() {
    return { isLoading: false };
  },
  props: {
    user: Object,
  },
  methods: {
    async updateUser() {
      this.isLoading = true;
      let updatedUser;
      try {
        updatedUser = await updateUser(this.user.uid, this.user);
      } catch (err) {
        console.log(err);
      }
      this.isLoading = false;
      return updatedUser;
    },
  },
};
</script>

<style scoped>
.form {
  margin: 3% auto 5%;
  max-width: 640px;
  width: 80%;
  text-align: left;
}

#profile-text {
  margin-top: 25px;
  font-weight: 700;
  font-size: 50px;
  color: rgb(54, 54, 55);
}

#uid-text {
  margin-top: 40px;
  font-size: 16px;
}

#firstname-text,
#lastname-text,
#email-text,
#mobile-text,
#address-text {
  margin-top: 20px;
  font-size: 16px;
}

#update-button {
  height: 50px;
  max-width: 350px;
  width: 90%;
  border-radius: 30px;
  margin: 35px auto auto auto;
}
</style>