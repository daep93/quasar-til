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
