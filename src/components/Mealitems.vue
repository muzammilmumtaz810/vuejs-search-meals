<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iste!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in.
      </p>
      <div>
        <YoutubeButton :href="meal.strYoutube"> YouTube</YoutubeButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
