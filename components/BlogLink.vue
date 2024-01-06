<script setup>
const props = defineProps(["link", "title", "date"]);
</script>

<template>
    <!-- <BlogLink 
        :link="post._path"
        :title="post.title"
        :date="post.date"
    /> -->
    <NuxtLink :to="link">{{ title }}</NuxtLink>
    <br />
    <small class="text-blue">
        <Date :dateString="date" />
    </small>
</template>