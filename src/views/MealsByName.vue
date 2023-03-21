<template>
  <div class="p-8 pb-0">
    <input
      v-model="keywork"
      type="text"
      class="rounded border-2 border-gray-200 w-full p-6"
      placeholder="search for meals"
      @change="searchMeals"
    />
    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import Meals from "../components/Meals.vue";
import { ref } from "vue";
import { computed } from "vue ";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import store from "../store";

const route = useRoute();
const keywork = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keywork.value);
}
onMounted(() => {
  keywork.value = route.params.name;
  if (keywork.value) {
    searchMeals();
  }
});
</script>
