<template>
  <q-timeline-entry :subtitle="postItem.createdAt">
    <div>
      {{ postItem.contents }}
    </div>
    <template v-slot:title>
      <div class="row">
        <div class="col-10">{{ postItem.title }}</div>
        <div class="col-2 justify-end">
          <q-icon :name="$i.ionCreateOutline" size="18px"></q-icon>
          <q-icon
            :name="$i.ionTrashOutline"
            size="18px"
            @click="deleteItem"
          ></q-icon>
        </div>
      </div>
    </template>
  </q-timeline-entry>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('삭제하시겠습니까?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
  },
};
</script>

<style scoped>
svg {
  color: #b0bec5;
}

svg:hover {
  color: #8026b4;
}
</style>
