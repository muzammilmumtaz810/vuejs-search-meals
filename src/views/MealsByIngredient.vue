<template>
  <Meals :meals="meals" />
</template>
<script setup>
import Meals from "../components/Meals.vue";

import { onMounted } from "vue";
import store from "../store";
import { computed } from "vue ";
import { useRoute } from "vue-router";

const route = useRoute();
const meals = computed(() => store.state.mealsbyIngredients);

onMounted(() => {
  store.dispatch("searchmealsbyIngredients", route.params.ingredient);
});
</script>
