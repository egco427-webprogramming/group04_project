<template>
  <div class="container">
    <div class="signin">
      <h1 class="text-signin">Welcom back !</h1>
      <div align="center">
        <input type="email" v-model="formData.email" class="form-control" placeholder="email" id="email-button" />
        <input type="password" v-model="formData.password" class="form-control" placeholder="password"
          id="password-button" />
        <button class="ui red button" @click="signIn" id="signin-button">Sign in</button>
        <p class="or">OR</p>
        <button class="ui basic button" @click="signInWithGoogle" id="google-button">
          <span><i class="fab fa-google fa-1x"></i></span>&nbsp Sign in with Google
        </button>
        <br>
        <button class="ui basic  button " @click="signInWithMicrosoft" id="microsoft-button">
          <span><i class="fab fa-windows fa-1x"></i></span>&nbsp Sign in with Microsoft
        </button>

        <br>
        <button class="btn ui facebook button " @click="signInWithFacebook" id="facebook-button">
          <span><i class="facebook f icon"></i></span>Continue with Facebook
        </button>
        <br>
        <button class="ui twitter button " @click="signInWithTwitter" id="twitter-button">
          <span><i class="twitter icon"></i></span> Continue with Twitter
        </button>
        <p id="signup-text">Not a member?
          <router-link :to="{path:'/signup'}">
            <span class="signup">Sign up</span>
          </router-link>
        </p>

        <br>
      </div>
    </div>
  </div>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css">
</template>

<script>
  import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    TwitterAuthProvider,
    OAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import userStore from "../store/user";
  import {
    login
  } from "../services/user.service";
  import toast from "../store/toaster/index.js";


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
            toast.clear()
            toast.loginToast();
            login(user.user);
            this.$router.replace("/");
          })
          .catch((err) => {
            toast.clear()
            toast.errorToast(err.message);
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
            toast.clear()
            toast.errorToast(err.message);
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
            toast.clear()
            toast.errorToast(err.message);
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
            toast.clear()
            toast.errorToast(err.message);
          });
      },
      signInWithTwitter() {
        const auth = getAuth();
        const provider = new TwitterAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            login(user);
            this.$router.replace("/");
          })
          .catch((err) => {
            toast.clear()
            toast.errorToast(err.message);
          });
      }
    }
  };
</script>

<style scoped>
  .signin {
    margin-top: 100px;
  }

  .text-signin {
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

  #signin-button {
    height: 43px;
    width: 350px;
    border-radius: 30px;
    margin-top: 35px;
  }

  .or {
    font-weight: 900;
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  #google-button,
  #microsoft-button,
  #facebook-button {
    height: 43px;
    width: 350px;
    border-radius: 30px;
    margin-top: 10px;
    font-weight: 700;
    font-size: 16px;
  }

  #twitter-button {
    height: 43px;
    width: 350px;
    border-radius: 30px;
    margin-top: 10px;
    font-weight: 700;
    font-size: 16px;
  }

  #signup-text {
    margin-top: 15px;
    margin-bottom: 150px;
  }

  .fa-google {
    background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .fa-windows {
    color: #00A4EF;
  }
</style>