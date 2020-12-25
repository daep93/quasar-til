<template>
  <div class="col-4">
    <q-form @submit.prevent="submitForm">
      <q-input
        class="q-ma-md"
        outlined
        lazy-rules
        v-model="id"
        label="ID"
        hint="Email address"
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
import { registerUser } from '@/api';
export default {
  data() {
    return {
      id: '',
      pw: '',
      nickname: '',
      submitting: false,
    };
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
