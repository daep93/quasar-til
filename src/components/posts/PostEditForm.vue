<template>
  <div class="q-my-lg q-py-lg ">
    <div class="text-h3 text-center text-weight-bolder text-deep-purple-5 ">
      Edit Post
    </div>
    <div class="q-pa-lg q-mt-md  row justify-center ">
      <div class="col-xs-6 q-mx-md q-px-md bg-white shadow-7 rounded-borders">
        <q-form @submit.prevent="submitForm" class="q-ma-md">
          <div class="text-h6 text-blue-grey-10">Title:</div>
          <q-input class="q-mb-md shadow-2" outlined v-model="title" />
          <div class="text-h6 text-blue-grey-10">Contents:</div>
          <q-input
            class="q-mb-md"
            type="textarea"
            autogrow
            outlined
            v-model="contents"
            input-style="min-height:200px"
            error-message="Contents length must be less than 250"
            :error="!isValid"
          />
          <div class="row justify-start">
            <q-btn
              type="submit"
              color="amber-10"
              label="Edit"
              :loading="editing"
            >
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
import { editPost, fetchPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isValid() {
      return this.contents.length <= 250;
    },
  },
  methods: {
    async submitForm() {
      try {
        const id = this.$route.params.id;
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    try {
      this.$q.loading.show();
      const { data } = await fetchPost(id);
      this.title = data.title;
      this.contents = data.contents;
    } catch (error) {
      console.log(error);
    } finally {
      this.$q.loading.hide();
    }
  },
};
</script>

<style scoped></style>
