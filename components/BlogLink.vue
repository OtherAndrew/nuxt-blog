<script setup>
const props = defineProps(["link", "title", "date"]);
</script>

<template>
    <NuxtLink :to="link">{{ title }}</NuxtLink>
    <br />
    <small class="text-blue">
        <Date :dateString="date" />
    </small>
</template>