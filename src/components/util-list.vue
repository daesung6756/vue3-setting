<template>
  <div class="util-list">
    <lang-change />

  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import langChange from '@/components/langChange.vue';

export default {
  name: 'util-list',
  components: {
    langChange,
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    return { t };
  },
};
</script>

<style scoped lang="scss">
.util-list {
  position:absolute;
  top:50%;
  right:10px;
  transform: translateY(-50%);
}
</style>
