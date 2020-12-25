<template>
  <q-header reveal elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-toolbar-title>
        <router-link to="/">
          <div class="text-white q-ma-none text-h4">TIL</div>
        </router-link>
      </q-toolbar-title>

      <q-tabs align="left">
        <template v-if="isUserLogin">
          <q-btn label="Logout" color="indigo-7"></q-btn>
        </template>
        <template v-else>
          <router-link to="/login" class="text-weight-bolder q-mx-auto">
            <q-btn class="q-mx-md text-5" color="teal-6">로그인</q-btn>
          </router-link>
          <router-link to="/signup" class="text-weight-bolder">
            <q-btn class="q-mx-auto text-5" color="green-6">회원가입</q-btn>
          </router-link>
        </template>
      </q-tabs>
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
};
</script>

<style scoped></style>
