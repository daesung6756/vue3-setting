<template>
  <li v-for="(item, i) in lists" :key="i">
    <router-link
      :to="item.src">
      {{ t(item.name) }}
    </router-link>
  </li>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'gnb-item',
  props: {
    lists: Array,
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    return { t };
  },
};
</script>

<style scoped lang="scss">
.gnb-list {
  li {
    position:relative;
    & + li {
      &::before {
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:1px;
        height:100%;
        background: #d5d5d5;
      }
      padding-left:11px;
      margin-left:10px;
    }

    > a {
      text-decoration: none;
    }
  }
}

</style>
