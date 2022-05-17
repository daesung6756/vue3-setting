<template>
  <nav class="gnb">
    <ul class="nav-list">
      <gnb-item v-for="item in lists" :key="item" :item="item" />
    </ul>
  </nav>
</template>

<script>
import GnbItem from "@/components/gnb-item";

export default {
  name: "gnb-list",
  props: {
    lists: Array,
  },
  components: {
    GnbItem,
  },
};
</script>

<style scoped lang="scss">
.gnb {
  text-align: left;
  padding: 0;
  .nav-list {
    display: inline-block;
    vertical-align: top;
    padding: 0;
    margin: 0;
    font-size: 0;
  }
  li {
    display: inline-block;
    vertical-align: top;
    position: relative;
    font-size: 1rem;
    &:not(:first-child) {
      margin-left: 10px;
      padding-left: 11px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 100%;
        background: #ddd;
      }
    }
  }
}
</style>
