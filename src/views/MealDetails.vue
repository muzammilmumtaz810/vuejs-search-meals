<template>
  <div class="max-w-[800px] mx-auto mt-3">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl mb-3 font-semibold">ingredients</h2>
      </div>
      <h2 class="text-2xl mb-3 font-semibold">Measures</h2>
      <ul>
        <template v-for="(el, ind) of new Array(20)">
          <li v-if="meal[`strIngredient${ind + 1}`]">
            {{ ind + 1 }} . {{ meal[`strIngredient${ind + 1}`] }}
          </li>
        </template>
      </ul>
      <ul>
        <template v-for="(el, ind) of new Array(20)">
          <li v-if="meal[`strMeasure${ind + 1}`]">
            {{ ind + 1 }} . {{ meal[`strMeasure${ind + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div class="mt-4">
      <YoutubeButton :href="meal.strYoutube"> YouTube</YoutubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="bg-indigo-600 hover:bg-indigo-700 text-white ml-3 font-bold py-2 px-4 rounded"
      >
        View Orignal Source
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";
const route = useRoute();
const meal = ref({});
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
