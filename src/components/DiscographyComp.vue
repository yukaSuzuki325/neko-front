<template>
  <DiscoMerch :title="title" :merch="discography" />
</template>

<script setup>
import { ref } from "vue";
import { discography } from "../stores/discography";
import DiscoMerch from "./parts/DiscoMerch.vue";

const title = "DISCOGRAPHY";
</script>

<style scoped></style>
