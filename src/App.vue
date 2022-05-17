<template>
  <header-wrap />
  <!-- main-->
  <main class="container">
    <router-view class="content" />
  </main>
  <!-- //main-->

  <footer-wrap />
</template>

<script>
import header from "@/components/layout/header";
import footer from "@/components/layout/footer";

export default {
  components: {
    "header-wrap": header,
    "footer-wrap": footer,
  },
};
</script>

<style></style>
