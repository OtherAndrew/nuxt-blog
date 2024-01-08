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
        <img v-if="postData.coverImage" :src="postData.coverImage" class="my-4"/>
        <h1 class="text-3xl font-extrabold tracking-normal my-4 mx-0">{{ postData.title }}</h1>
        <div class="text-blue">
            <Date :dateString="postData.date" />
        </div>
        <div v-if="postData.updated" class="text-blue italic">
            <p class="inline">Updated: </p>
            <Date :dateString="postData.updated" />
        </div>
        <ContentDoc />
        <Gallery v-if="postData.galleryImages" :imgPathArray="postData.galleryImages" class="bg-darkest"/>
    </article>
</template>

<style>
img {
    @apply max-w-sm md:max-w-lg block mx-auto;
}
</style>