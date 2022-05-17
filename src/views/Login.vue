<template>
  <div class="table-row">
    <div class="center-inner">
      <p class="form-line_input">
        <label for="userId">아이디 : </label
        ><input
          type="text"
          id="userId"
          v-model="userId"
          placeholder="아이디를 입력해주세요."
        />
      </p>
      <p class="form-line_input">
        <label for="userPassword">비밀번호 : </label
        ><input
          type="password"
          id="userPassword"
          v-model="userPassword"
          placeholder="패스워드를 입력해주세요."
        /><br />
      </p>
      <button type="submit">로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userId : "22" ,
      userPassword:"11"
    }
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.table-row {
  display: table;
  margin: 0 auto;
  > &.center-inner {
    display: table-cell;
    height: auto;
    vertical-align: center;
  }
}
</style>
