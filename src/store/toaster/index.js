// https://github.com/szboynono/mosha-vue-toastify

import {
  createToast,
  clearToasts
} from "mosha-vue-toastify";

const successToast = () =>
  createToast({
    title: "Add item to cart",
    description: "some good description"
  }, {
    transition: "slide",
    showIcon: true,
    hideProgressBar: true,
    swipeClose: true,
    showCloseButton: false,
    position: "bottom-left",
    timeout: 3000,
  });

const errorToast = (err) =>
  createToast(err, {
    transition: "slide",
    showIcon: true,
    swipeClose: true,
    position: "bottom-left",
    type: "warning",
    class:"my-danger",
    toastBackgroundColor: "red",
  });

const logoutToast = () =>
  createToast({
    title: "Sign out",
    description: "See you later!"
  }, {
    transition: "slide",
    showIcon: true,
    hideProgressBar: true,
    swipeClose: true,
    showCloseButton: false,
    position: "bottom-left",
    timeout: 3000,
  });

const loginToast = () =>
  createToast({
    title: "Welcome back",
    description: "Happy shopping!"
  }, {
    transition: "slide",
    showIcon: true,
    hideProgressBar: true,
    swipeClose: true,
    showCloseButton: false,
    position: "bottom-left",
    timeout: 3000,
  });

const signupToast = () =>
  createToast({
    title: "Sign up complete",
    description: "welcome to Lucien!"
  }, {
    transition: "slide",
    showIcon: true,
    hideProgressBar: true,
    swipeClose: true,
    showCloseButton: false,
    position: "bottom-left",
    type: "success",
    timeout: 3000,
  });

const checkoutToast = () =>
  createToast({
    title: "your product is on the way to you",
    description: "some good description"
  }, {
    transition: "slide",
    showIcon: true,
    swipeClose: true,
    position: "bottom-left",
    type: "default",
  });

const clear = () => {
  clearToasts() // clears all the toasts
} 

export default {
  successToast,
  errorToast,
  logoutToast,
  loginToast,
  signupToast,
  checkoutToast,
  clear,
};