<template>
  <div class="home">
    <h1>{{ t('title.h1.home') }}</h1>
  </div>
</template>

<script>

import { useI18n } from 'vue-i18n';

export default {
  name: 'HomeView',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
