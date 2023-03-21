<template>
  <a
    :href="href"
    target="_blank"
    class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
  >
    <slot></slot
  ></a>
</template>
<script setup>
const prop = defineProps({
  href: String,
});
</script>
