<template>
  <br />
  <UserSetting :user="user" />
</template>

<script>
import UserSetting from "./UserSetting.vue";

import { getUser } from "../services/user.service";
import { ref } from "vue";

export default {
  components: {
    UserSetting,
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