<script setup>

const route = useRoute();

const { data } = await useAsyncData(() =>
     queryContent(`posts/${route.params.id}`)
        .findOne()
);
const postData = reactive(data.value);
</script>

<template>
    <Head>
        <Title>{{ postData.title }}</Title>
    </Head>
    <article>
        <img v-if="postData.coverImage" :src="postData.coverImage"/>
        <h1>{{ postData.title }}</h1>
        <div class="text-blue mt-1">
            <Date :dateString="postData.date" />
        </div>
        <div v-if="postData.updated" class="text-blue italic">
            <p class="inline">Updated: </p>
            <Date :dateString="postData.updated" />
        </div>
        <ContentDoc />
    </article>
</template>

<style>
img {
    @apply max-w-sm md:max-w-lg mx-auto;
}

h1,
h1 > a,
h2 > a,
h3 > a {
    @apply text-light hover:text-light
}

h1 {
    @apply mt-4 text-3xl font-extrabold
}

h2 {
    @apply mt-4 text-2xl font-extrabold
}

h3 {
    @apply mt-4 text-xl font-extrabold
}

ol {
    @apply list-decimal list-outside mt-2 ml-5
}

ul {
    @apply list-disc list-outside mt-2 ml-6
}

li {
    @apply mt-0
}

p {
    @apply mt-4 indent-8
}
</style>