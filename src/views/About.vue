<template>
  <div class="about">
    <h1>{{ t('title.h1.about') }}</h1>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'about-page',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<style scoped lang="scss">

</style>
