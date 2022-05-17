<template>
  <header id="header" class="header">
    <gnb-list :lists="gnbList" />
    <util-list :lists="utilList" />
  </header>
</template>

<script>
import GnbList from "@/components/gnb-list";
import UtilList from "@/components/util-list";

export default {
  name: "header-wrap",
  components: {
    GnbList,
    UtilList,
  },
  data() {
    return {
      gnbList: [
        { name: "Home", src: "/", alt: "" },
        { name: "About", src: "/about", alt: "" },
        { name: "menu3", src: "/menu3", alt: "" },
        { name: "menu4", src: "/menu4", alt: "" },
        { name: "menu5", src: "/menu5", alt: "" },
        { name: "menu6", src: "/menu6", alt: "" },
      ],
      utilList: [
        { name: "Login", src: "/login", alt: "", route: true },
        { name: "Signin", src: "/signin", alt: "", route: true },
        { name: "Signup", src: "/signup", alt: "", route: false },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  padding: 1rem 3rem 1rem 1rem;
}
</style>
