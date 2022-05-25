<template>
  <footer id="footer" class="footer">
    <p>{{ t('') }}</p>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'footer-wrap',
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
.footer {
  background: rgb(255, 86, 77);
}
</style>
