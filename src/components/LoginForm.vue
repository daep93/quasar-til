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
        type="password"
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

        await this.$store.dispatch('LOGIN', {
          username: this.id,
          password: this.pw,
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
    },
  },
};
</script>

<style scoped></style>
