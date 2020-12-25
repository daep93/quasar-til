<template>
  <q-header reveal elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </q-avatar>
        TIL
      </q-toolbar-title>
      <q-tabs align="left">
        <q-route-tab to="/login" label="로그인" />
        <q-route-tab to="/signup" label="회원가입" />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {};
</script>

<style scoped></style>
