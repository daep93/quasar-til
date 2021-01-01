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
import store from '@/store';
import { Dialog } from 'quasar';
export default {
  components: {
    LoginForm,
  },
  beforeRouteEnter(to, from, next) {
    if (store.getters.logined) {
      Dialog.create({
        title: '불필요한 접근',
        message: '이미 로그인이 되어있습니다.',
      }).onOk(() => {
        next('/main');
      });
    } else {
      next();
    }
  },
};
</script>

<style scoped></style>
