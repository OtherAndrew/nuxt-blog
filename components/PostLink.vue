<script setup>
const props = defineProps(["post"]);

const post = reactive(props.post);
</script>

<template>
    <NuxtLink :to="post._path">
        <img v-if="post.coverImage" 
            class="max-w-16 mr-4 inline-block align-middle"
            :src="post.coverImage"
            :alt="post.altText"
        />
        <img v-else
            class="max-w-16 mr-4 inline-block align-middle grayscale"
            src="/images/vue logo.png"
            alt="Placeholder image"
        />
    </NuxtLink>
    <div class="inline-block align-middle">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        <br />
        <small class="text-blue">
            <Date :dateString="post.date" />
        </small>
    </div>
</template>