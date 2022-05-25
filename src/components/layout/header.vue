<template>
  <header id="header" class="header">
    <gnb-list />
    <util-list />
  </header>
</template>

<script>
import gnbList from '@/components/gnb-list.vue';
import UtilList from '@/components/util-list.vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'header-wrap',
  components: {
    gnbList,
    UtilList,
  },
  data() {
    return {
    };
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    return { t };
  },
};
</script>

<style scoped lang="scss">
.header {
  position:relative;
  padding:1rem 10rem 1rem 1rem;
  &.is-fixed {
    position:fixed;
    left:0;
    top:0;
    width:100%;
    box-shadow: 10px 10px 10px rgba(0,0,0,.4);
  }
}
</style>
