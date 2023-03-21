<template>
  <div>
    <div class="flex gap-4 justify-center mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <Mealitems v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, watchEffect } from "vue";
import { computed } from "vue ";
import { useRoute } from "vue-router";
import Mealitems from "../components/Mealitems.vue";
import store from "../store";
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsbyLetter);
watchEffect(() => {
  store.dispatch("searchmealsbyLetter", route.params.letter);
});
onMounted(() => {
  store.dispatch("searchmealsbyLetter", route.params.letter);
});
</script>
