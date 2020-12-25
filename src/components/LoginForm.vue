<template>
  <div class="col-4">
    <q-form @submit.prevent="submitForm">
      <q-input class="q-ma-md" outlined v-model="id" label="ID" />
      <q-input
        class="q-ma-md"
        outlined
        lazy-rules
        v-model="pw"
        label="Password"
      />
      <div class="row justify-end">
        <q-btn
          class="q-ma-md"
          type="submit"
          color="light-blue"
          label="로그인"
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
import { loginUser } from '@/api';

export default {
  data() {
    return {
      id: '',
      pw: '',
      submitting: false,
    };
  },

  methods: {
    async submitForm() {
      try {
        this.submitting = true;
        const { data } = await loginUser({
          username: this.id,
          password: this.pw,
        });
        this.$store.commit('setUserid', data.user.username);
        this.$store.commit('setToken', data.token);
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
    },
  },
};
</script>

<style scoped></style>
