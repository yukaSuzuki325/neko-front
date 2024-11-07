<template>
  <DiscoMerch :title="title" :merch="merch" />
</template>

<script setup>
import { ref } from "vue";
import { merch } from "../stores/merch";
import DiscoMerch from "./parts/DiscoMerch.vue";

const title = "MERCH";
</script>

<style scoped></style>
