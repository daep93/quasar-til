<template>
  <q-page>
    <div class="q-my-lg q-py-lg ">
      <div
        class="text-h3 text-center text-weight-bolder text-indigo-5 row justify-center"
      >
        Today I Learned
      </div>
      <div class="q-pa-lg q-mt-md  row justify-center ">
        <div class="col-xs-6 q-mx-md q-px-md bg-white">
          <q-timeline color="primary">
            <post-list-item
              v-for="postItem in postItems"
              :postItem="postItem"
              :key="postItem._id"
              @refresh="fetchData"
            ></post-list-item>
          </q-timeline>
        </div>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[50, 50]">
      <router-link to="/add">
        <q-btn fab :icon="$i.ionAdd" color="amber-8" />
      </router-link>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { fetchPosts } from '@/api/posts';
import PostListItem from '@/components/posts/PostListItem';
import store from '@/store';
import { Dialog } from 'quasar';
export default {
  components: {
    PostListItem,
  },
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      this.$q.loading.show();
      try {
        const { data } = await fetchPosts();
        this.postItems = data.posts.reverse();
      } catch (error) {
        console.log(error);
      } finally {
        this.$q.loading.hide();
      }
    },
  },
  created() {
    this.fetchData();
  },
  beforeRouteEnter(to, from, next) {
    if (!store.getters.logined) {
      Dialog.create({
        title: '접근 불가능',
        message: '로그인을 해야합니다.',
      }).onOk(() => next('/login'));
    } else {
      next();
    }
  },
};
</script>

<style scoped></style>
