<template>
  <header class="bg-white shadow h-16 flex justify-btween items-stretch">
    <router-link
      class="inline-flex items-center -full px-5"
      :to="{ name: 'home' }"
    >
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-1:00"
        :to="{ name: 'byName' }"
      >
        Meals by name
      </router-link>
      <router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-1:00"
        :to="{ name: 'byLetter' }"
      >
        Meals by letters
      </router-link>
      <router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-1:00"
        :to="{ name: 'ingredients' }"
      >
        Meals by ingredients
      </router-link>
    </div>
  </header>
</template>
<script setup></script>
