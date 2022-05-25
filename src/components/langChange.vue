<template>
  <div class="lang-changer">
    <select @change="langChange">
      <option value="ko">ko</option>
      <option value="en">en</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'langChange',
  methods: {
    langChange(e) {
      this.$i18n.locale = e.target.options[e.target.options.selectedIndex].value;
    },
  },
};
</script>

<style scoped lang="scss">
.lang-changer {
  display:inline-block;
  vertical-align: top;
  select {
    display:inline-block;
    height:2rem;
    padding:0 .6rem;
  }
}
</style>
