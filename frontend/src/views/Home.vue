<template>
  <router-view />
</template>

<script>
export default {
  props: {
    is_logout: {
      type: Boolean,
      require: false,
      default: false
    },
    is_login: {
      type: Boolean,
      require: false,
      default: false
    }
  }
};
</script>
