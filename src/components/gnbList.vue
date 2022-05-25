<template>
  <nav class="gnb" >
    <ul class="gnb-list">
      <li v-for="(item, i) in gnbList" :key="i">
        <router-link :to="item.src">{{ t(item.name) }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'gnbList',
  props: {
    list: Array,
  },
  data() {
    return {
      gnbList: [
        { src: '/', name: 'gnb.home' },
        { src: '/about', name: 'gnb.about' },
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
          background:#2c3e50;
        }
        padding-left:11px;
        margin-left:10px;
      }

      > a {
        text-decoration: none;
      }
    }
  }
}

</style>
