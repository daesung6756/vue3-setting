<template>
  <li>
    <router-link
      v-if="item.route === true"
      :to="item.src" :class="router">
      {{ item.name }}
    </router-link>

    <a v-else :href="item.src">
      {{ item.name }}
    </a>
  </li>
</template>

<script>
export default {
  name: "util-item",
  data() {
    return {
      router: "is-router",
    }
  },
  props: {
    item: Object,
  },
};
</script>

<style scoped></style>
