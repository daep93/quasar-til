<template>
  <q-timeline-entry :title="postItem.title" :subtitle="postItem.createdAt">
    <div>
      {{ postItem.contents }}
    </div>
  </q-timeline-entry>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
