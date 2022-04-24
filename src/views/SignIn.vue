<template>
  <div class="container">
    <div class="row">
      <h2>Sign in</h2>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3" />
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
        <input type="email" v-model="formData.email" class="form-control" placeholder="email" />
        <br />
        <input type="password" v-model="formData.password" class="form-control" placeholder="password" />
        <br />
        <button class="btn btn-success btn-block full-width" @click="signIn">Sign in</button>
        <br />
        <br />
        <button class="btn ui blue button" @click="signInWithGoogle"><span><i class="google icon"></i></span>Sign in
          with Google</button>
        <br />
        <br />
        <button class="btn ui facebook button " @click="signInWithFacebook"><span><i
              class="facebook f icon"></i></span>Sign in with Facebook </button>
        <br />
        <br />
        <button class="btn ui white button " @click="signInWithMicrosoft"><i class="microsoft icon"></i>Sign in with
          Microsoft </button>
        <br />
        <br />
        <button class="btn disabled ui twitter button " @click="signInWithTwitter">Sign in with Twitter</button>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
  import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    OAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import userStore from "../store/user";
  import {
    login
  } from "../services/user.service";



  export default {
    name: "SignIn",
    data() {
      return {
        formData: {
          email: "bob@mail.com",
          password: "123456",
        },
      };
    },
    methods: {
      signIn() {
        const auth = getAuth();
        signInWithEmailAndPassword(
            auth,
            this.formData.email,
            this.formData.password
          )
          .then((user) => {
            login(user.user);
            this.$router.replace("/");
          })
          .catch((err) => {
            alert(err.message);
          });
      },
      signInWithGoogle() {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            login(user);
            this.$router.replace("/");
          })
          .catch((err) => {
            alert(err.message);
          });
      },
      signInWithFacebook() {
        const auth = getAuth();
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            login(user);
            this.$router.replace("/");
          })
          .catch((err) => {
            alert(err.message);
          });
      },
      signInWithMicrosoft() {
        const auth = getAuth();
        const provider = new OAuthProvider("microsoft.com");;
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            login(user);
            this.$router.replace("/");
          })
          .catch((err) => {
            alert(err.message);
          });
      },
    },
  };
</script>

<style>

</style>