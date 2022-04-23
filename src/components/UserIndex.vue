<template>
  id:{{id}}
  <UserSetting :user="user" />
  <UserHistory :history="[{id:'a1',total:'100',date:'1/2/2020'}]" />
</template>

<script>
import UserSetting from "./UserSetting.vue";
import UserHistory from "./UserHistory.vue";

import { getUser } from "../services/user.service";
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
    return { user };
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
  },
};
</script>

<style>
</style>