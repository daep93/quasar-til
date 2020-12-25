<template>
  <q-page>
    <div class="row justify-center content-center">
      <h4 class="q-mt-md q-mb-md">로그인 페이지</h4>
    </div>
    <div class="row justify-center">
      <login-form></login-form>
    </div>
  </q-page>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped></style>
