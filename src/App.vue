<template>
  <header-wrap />

  <main id="main" class="main">
    <router-view/>
  </main>

  <footer-wrap />
</template>

<script>
import headerWrap from '@/components/layout/header.vue';
import footerWrap from '@/components/layout/footer.vue';
import { useI18n } from 'vue-i18n';

export default {
  data() {
    return {
    };
  },
  components: {
    headerWrap,
    footerWrap,
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });

    return { t };
  },
  mounted() {
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
