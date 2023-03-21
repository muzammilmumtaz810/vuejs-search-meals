<template>
  <div class="flex flex-col p-8"></div>
</template>

<script setup>
import { ref } from "vue";
import axiosClient from "../axiosClient.js";
import { onMounted } from "vue";
import store from "../store";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);
onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});
</script>
