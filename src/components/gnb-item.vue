<template>
  <li>
    <router-link :to="item.src" :alt="item.alt">
      {{ item.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "gnb-item",
  props: {
    item: Object,
  },
};
</script>

<style scoped></style>
