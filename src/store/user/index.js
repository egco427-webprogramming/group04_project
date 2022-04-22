import { reactive } from "vue";

const state = reactive({ isLoggedIn: false });

const login = () => {
  state.isLoggedIn = true;
};
const logout = () => {
  state.isLoggedIn = false;
};
export default { state, login, logout };
