<template>
  <q-page>
    <div class="row justify-center content-center">
      <h4 class="q-mt-md q-mb-md">회원 가입 페이지</h4>
    </div>
    <div class="row justify-center">
      <signup-form></signup-form>
    </div>
  </q-page>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
export default {
  components: { SignupForm },
};
</script>

<style scoped></style>
