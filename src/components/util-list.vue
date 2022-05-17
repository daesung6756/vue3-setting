<template>
  <ul class="util-list">
    <util-item
      v-for="item in lists"
      :key="item"
      :item="item" />
  </ul>
</template>

<script>
import UtilItem from '@/components/util-item';

export default {
  name: "util-list",
  props: {
    lists: Array,
  },
  components: {
    UtilItem,
  }
};
</script>

<style scoped lang="scss">
.util-list {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
</style>
