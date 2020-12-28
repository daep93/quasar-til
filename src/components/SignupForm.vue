<template>
  <div class="col-4">
    <q-form @submit.prevent="submitForm">
      <q-input
        class="q-ma-md"
        outlined
        lazy-rules="ondemand"
        v-model="id"
        label="ID"
        error-message="이메일 형식의 아이디를 입력해주세요"
        :error="!isUsernameValid"
      />
      <q-input
        class="q-ma-md"
        outlined
        lazy-rules
        v-model="pw"
        label="Password"
      />
      <q-input
        class="q-ma-md"
        outlined
        lazy-rules
        v-model="nickname"
        label="Nickname"
      />
      <div class="row justify-end">
        <q-btn
          class="q-ma-md"
          type="submit"
          color="teal"
          label="회원 가입"
          :loading="submitting"
        >
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import { registerUser } from '@/api/auth';
export default {
  data() {
    return {
      id: '',
      pw: '',
      nickname: '',
      submitting: false,
    };
  },
  computed: {
    isUsernameValid() {
      return this.id === '' || validateEmail(this.id);
    },
  },
  methods: {
    async submitForm() {
      try {
        this.submitting = true;
        await registerUser({
          username: this.id,
          password: this.pw,
          nickname: this.nickname,
        });
        this.initForm();
        this.submitting = false;
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.submitting = false;
      }
    },
    initForm() {
      this.id = '';
      this.pw = '';
      this.nickname = '';
    },
  },
};
</script>

<style scoped></style>
