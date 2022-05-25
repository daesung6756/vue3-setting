<template>
  <nav class="gnb" >
    <ul class="gnb-list">
      <gnb-item :lists="gnbList" />
    </ul>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';
import GnbItem from '@/components/gnb-item.vue';

export default {
  name: 'gnbList',
  components: {
    GnbItem,
  },
  props: {
    list: Array,
  },
  data() {
    return {
      gnbList: [
        { src: '/', name: 'gnb.home.name' },
        { src: '/about', name: 'gnb.about.name' },
        { src: '/test1', name: 'gnb.menu3.name' },
        { src: '/test2', name: 'gnb.menu4.name' },
      ],
    };
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    return { t };
  },
};
</script>

<style scoped lang="scss">
.gnb {
  display:inline-block;
  vertical-align: top;
  .gnb-list {
    display:flex;
    align-items: center;
    justify-content: center;
    padding:0;
  }
}

</style>
