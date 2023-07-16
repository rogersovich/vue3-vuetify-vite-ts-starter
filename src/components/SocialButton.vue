<script setup lang="ts">
const props = defineProps({
  icon: {
    default: null,
    type: String,
  },
  title: {
    default: null,
    type: String,
  },
});

const emit = defineEmits(['onSubmit']);
</script>
<template>
  <button class="button-social-media" type="button" @click="emit('onSubmit')">
    <div class="tw-flex-none">
      <v-img :src="props.icon" height="22" />
    </div>
    <div class="label-social-media text-secondary-dark">
      {{ props.title }}
    </div>
  </button>
</template>

<style scoped></style>
