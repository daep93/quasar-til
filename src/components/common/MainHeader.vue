<template>
  <q-header reveal elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <router-link to="/">
        <q-btn flat round dense :icon="$i.ionPricetags" color="white" />
      </router-link>
      <q-toolbar-title>
        <div class="text-white q-ma-none text-h4">TIL</div>
      </q-toolbar-title>
      <template v-if="isUserLogin">
        <q-tabs align="left" indicator-color="primary">
          <span>{{ $store.state.nickname }}님 환영합니다!</span>
          <q-route-tab
            to="/"
            label="Logout"
            color="grey-4"
            style="max-width: 100px"
            @click="logoutUser"
          ></q-route-tab>
        </q-tabs>
      </template>
      <template v-else>
        <q-tabs align="left">
          <q-route-tab
            to="/login"
            class="text-weight-bolder"
            style="max-width: 100px"
          >
            <div class="q-ma-none text-5">로그인</div>
          </q-route-tab>
          <q-route-tab
            to="/signup"
            class="text-weight-bolder"
            style="max-width: 100px"
          >
            <div class="q-ma-none text-5">회원가입</div>
          </q-route-tab>
        </q-tabs>
      </template>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.logined;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUserInfo');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped></style>
