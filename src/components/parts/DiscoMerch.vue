<template>
  <div class="text-center">
    <div class="text-h4 q-mb-lg text-pink-3">{{ title }}</div>
    <div class="q-gutter-md row justify-center" :style="'max-width: 1100px;'">
      <div v-for="item in merch" :key="item.id" :style="'width: 320px;'">
        <a :href="item.link" target="_blank" class="q-mt-sm text-blue"
          ><q-img :src="item.image" class="item-img q-pa-lg"
        /></a>

        <div class="text-h6 q-mt-md">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  merch: Object,
});
</script>

<style scoped>
.item-img {
  width: 300px;
  border: 2px solid #ccc;
}
</style>
