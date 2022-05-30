<template>
  <div>
    <h2>404 <br>
      <strong>{{ t("state.404")}}</strong>
    </h2>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'fileNotFound',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<style scoped lang="scss"></style>