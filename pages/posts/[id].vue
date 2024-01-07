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
        <Title>{{ postData.title }}</Title>
    </Head>
    <article>
        <h1 class="text-3xl font-extrabold tracking-normal my-4 mx-0">{{ postData.title }}</h1>
        <div class="text-blue">
            <Date :dateString="postData.date" />
        </div>
        <div v-if="postData.updated" class="text-blue italic">
            <p class="inline">Updated: </p>
            <Date :dateString="postData.updated" />
        </div>
        <img v-if="postData.coverImage" class="my-4" :src="postData.coverImage" />
        <ContentDoc />
    </article>
</template>

<style scoped>
img {
    @apply max-w-lg block;
}
</style>