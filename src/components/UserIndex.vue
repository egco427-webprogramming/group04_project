<template>
  id:{{id}}
  <UserSetting :user="user" />
  <UserHistory :history="history" />
</template>

<script>
import UserSetting from "./UserSetting.vue";
import UserHistory from "./UserHistory.vue";

import { getUser } from "../services/user.service";
import { getHistory } from "../services/history.service";
import { ref } from "vue";

export default {
  components: {
    UserSetting,
    UserHistory,
  },
  props: {
    id: String,
  },
  async setup(props) {
    const user = ref(await getUser(props.id));
    const history = ref(await getHistory(props.id));
    return { user, history };
  },
  methods: {
    async getUser(id) {
      let user;
      try {
        user = await getUser(id);
      } catch (err) {
        console.log(err);
      }
      return user;
    },
    async getHistory(id) {
      let history;
      try {
        history = await getHistory(id);
      } catch (err) {
        console.log(err);
      }
      return history;
    },
  },
};
</script>

<style>
</style>