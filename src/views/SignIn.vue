<template>
  <div class="container">
    <div  class="signin">
      <h1 class="text-signin" >Welcom to LUCIEN</h1>
      <div align="center">
        <input type="email" v-model="formData.email" class="form-control" placeholder="email" id="email-button" />
        <input type="password" v-model="formData.password" class="form-control" placeholder="password" id="password-button"/>
        <button class="ui red button" @click="signIn" id="signin-button">Sign in</button>
        <p class="or">OR</p> 
        <button class="ui basic button" @click="signInWithGoogle" id="google-button">
          <span><i class="google icon"></i></span>Sign in with Google
        </button>
        <br>
        <button class="ui basic  button " @click="signInWithMicrosoft" id="microsoft-button">
          <i class="microsoft icon"></i>Sign in with Microsoft 
        </button>
        <br>
        <button class="btn ui facebook button " @click="signInWithFacebook" id="facebook-button">
          <span><i class="facebook f icon"></i></span>Continue with Facebook 
        </button>
        <br>
        <button class="ui twitter button " @click="signInWithTwitter" id="twitter-button">
          <span><i class="twitter icon"></i></span> Continue with Twitter
          </button>
      </div>
    </div>
  </div>
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
            alert(err.message);
          });
      }
    }
  };
</script>

<style>
.signin {
  margin-top: 100px;
}
.text-signin {
   font-weight: 550;
   font-size: 40px;
}
#email-button {
    border-radius: 12px;
    height: 50px;
    width: 350px;
    margin-top:30px;
}
#password-button {
    border-radius: 12px;
    height: 50px;
    width: 350px;
    margin-top:15px;
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
#google-button, #microsoft-button, #facebook-button {
    height: 43px;
    width: 350px;
    border-radius: 30px;
    margin-top: 13px;
    font-weight: 700;
    font-size: 16px;
}
#twitter-button {
    height: 43px;
    width: 350px;
    border-radius: 30px;
    margin-top: 13px;
    margin-bottom: 150px;
    font-weight: 700;
    font-size: 16px;
}
</style>