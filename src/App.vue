<template>
  <q-layout view="hHh lpR fFf" class="bg-blue-grey-1">
    <main-header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MainHeader from '@/components/common/MainHeader.vue';
export default {
  components: { MainHeader },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'Login' && this.$store.getters.logined) {
      this.$q.dialog({
        title: '불필요한 접근',
        message: '이미 로그인이 되어있습니다.',
      });
    } else if (to.name === 'Main' && !this.$store.getters.logined) {
      this.$q.dialog({
        title: '접근 불가능',
        message: '로그인을 해야합니다.',
      });
    } else {
      next();
    }
  },
};
</script>

<style>
body {
  font-family: 'Spoqa Han Sans', 'Sans-serif';
}
a {
  text-decoration: none;
}
</style>
