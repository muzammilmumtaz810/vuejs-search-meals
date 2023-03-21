<template>
  <div class="p-8">
    <h1 class="text-4xl mb-4 font-bold">Ingredients</h1>

    <router-link
      :to="{ name: 'byIngredient', params: { ingredient: ind.strIngredient } }"
      v-for="ind of ingra"
      :key="ind.id"
      class="bg-white p-3 mb-3 shadow block"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ind.strIngredient }}</h3>
      <p>
        {{ ind.strDescription }}
      </p>
    </router-link>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import axiosClient from "../axiosClient";
import { ref } from "vue";
const ingra = ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingra.value = data.meals;
  });
});
</script>
