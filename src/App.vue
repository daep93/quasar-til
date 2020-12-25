<template>
  <q-layout view="hHh lpR fFf">
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
  data() {
    return {};
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
