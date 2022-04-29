<template>
  <div class="container">
    <div class="signup">
    <h1 class="text-signup">Welcom to LUCIEN</h1>
    <div align="center">
      <input
        type="email"
        v-model="formData.email"
        class="form-control"
        placeholder="email"
        id="email-button"
      />
      <input
        type="password"
        v-model="formData.password"
        class="form-control"
        placeholder="password"
        id="password-button"
      />
      <button class="ui red button" @click="signUp" id="signup-button">Sign up</button>
      <p id="signin-text">
        Already a member?
        <router-link :to="{path:'/signin'}">
          <span class="signup">Sign in</span>
        </router-link>
      </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { login } from "../services/user.service";

export default {
  name: "SignUp",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signUp() {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        this.formData.email,
        this.formData.password
      )
        .then((user) => {
          //alert("Sign up success! redirect to Home page")
          login(user.user);
          this.$router.replace("/");
        })
        .catch((e) => {
          alert(e.message);
        });
    },
  },
};
</script>

<style scoped>
.signup {
  margin-top: 100px;
  margin-bottom: 425px;
}

.text-signup {
  font-weight: 550;
  font-size: 40px;
  color: rgb(54, 54, 55)
}

#email-button {
  border-radius: 12px;
  height: 50px;
  width: 350px;
  margin-top: 40px;
}

#password-button {
  border-radius: 12px;
  height: 50px;
  width: 350px;
  margin-top: 15px;
}

#signin-text {
  margin-top: 15px;
}

#signup-button {
  height: 43px;
  width: 350px;
  border-radius: 30px;
  margin-top: 35px;
}
</style>