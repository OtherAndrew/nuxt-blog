<script setup>
const props = defineProps(["post"]);

const post = reactive(props.post);
</script>

<template>
    <NuxtLink :to="post._path">
        <img class="postImage inline-block align-middle"
            v-if="post.coverImage" 
            :src="post.coverImage"
            :alt="post.altText"
        />
        <img class="postImage inline-block align-middle grayscale"
            v-else
            src="/images/vue logo.png"
            alt="placeholder image"
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

<style scoped>
.postImage {
    @apply max-w-20 mr-4 transition duration-500 hover:opacity-50
}
</style>