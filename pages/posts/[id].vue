<script setup>

const route = useRoute();

const { data } = await useAsyncData(() =>
     queryContent(`posts/${route.params.id}`)
        .findOne()
);
const postData = data.value;

const postTitle = ref(postData.title);
const postDate = ref(postData.date);
const updatedDate = ref(postData.updated);
const coverImage = ref(postData.coverImage);
</script>

<template>
    <Head>
        <Title>{{ postTitle }}</Title>
    </Head>
    <article>
        <h1 class="text-3xl font-extrabold tracking-normal my-4 mx-0">{{ postTitle }}</h1>
        <div class="text-blue">
            <Date :dateString="postDate" />
        </div>
        <div v-if="updatedDate" class="text-blue italic">
            <p class="inline">Updated: </p>
            <Date :dateString="updatedDate" />
        </div>
        <img v-if="coverImage" class="my-4" :src="coverImage" />
        <ContentDoc />
    </article>
</template>

<style>
img {
    @apply max-w-lg block;
}
</style>