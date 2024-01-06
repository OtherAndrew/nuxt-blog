<script setup>

const route = useRoute();

const { data } = await useAsyncData(() =>
     queryContent(`posts/${route.params.id}`)
        .findOne()
);
const postData = data.value;

const postTitle = ref(postData.title);
const postDate = ref(postData.date);
const hasUpdatedDate = ref(postData.updated !== undefined);
const updatedDate = ref(postData.updated);
</script>

<template>
    <head>
        <title>{{ postTitle }}</title>
    </head>
    <article>
        <h1 class="text-3xl font-extrabold tracking-normal my-4 mx-0">{{ postTitle }}</h1>
        <div class="text-blue">
            <Date :dateString="postDate" />
        </div>
        <div v-if="hasUpdatedDate" class="text-blue italic">
            <span>Updated: </span>
            <Date :dateString="updatedDate" />
        </div>
        <br />
        <ContentDoc />
    </article>
</template>

<style>
img {
    @apply max-w-lg block;
}
</style>