<template>
  <q-layout view="hHh lpR fFf">
    <MainHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MainHeader from '@/components/common/MainHeader.vue';
export default {
  components: { MainHeader },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
