<script setup>
import { getFileName } from '~/src/utils';

const route = useRoute();

const { data } = await useAsyncData(() =>
     queryContent(`posts/${route.params.id}`)
        .findOne()
);

const postData = reactive(data.value);

if (postData.coverImage) {
    postData.coverAltText = `Cover image for ${getFileName(postData._path)}`
    useSeoMeta({
        ogImage: postData.coverImage,
        ogImageAlt: postData.coverAltText,
    });
}

useHead({
    titleTemplate: `${postData.title} | Dev Blog`
});
</script>

<template>
    <article>
        <img v-if="postData.coverImage" 
            class="mx-auto my-8"
            :src="postData.coverImage"
            :alt="postData.coverAltText"
        />
        <h1 class="text-3xl font-extrabold mt-8">{{ postData.title }}</h1>
        <div class="text-blue mt-1">
            <Date :dateString="postData.date" />
        </div>
        <div v-if="postData.updated" class="text-blue italic">
            <p class="inline">Updated: </p>
            <Date :dateString="postData.updated" />
        </div>
        <ContentDoc class="markdown"/>
        <div v-if="postData.galleryImages" class="mt-8">
            <p class="text-blue">Images from this post:</p>
            <ImageGrid :images="postData.galleryImages" class="bg-darkest rounded-xl" />
        </div>
    </article>
</template>

<style>
.markdown {
    blockquote {
        @apply my-4 py-2 pl-3 pr-2 border-l-4 border-blue bg-dark selection:bg-darker;
    }

    blockquote > p {
        @apply my-0;
    }

    h1,
    h1 > a,
    h2 > a,
    h3 > a {
        @apply text-light;
    }

    h1 {
        @apply mt-8 text-3xl font-extrabold;
    }

    h2 {
        @apply mt-8 text-2xl font-extrabold;
    }

    h3 {
        @apply mt-8 text-xl font-extrabold;
    }

    li {
        @apply my-2;
    }

    ol {
        @apply list-decimal list-outside my-2 ml-6;
    }

    p {
        @apply my-4;
    }

    p > img {
        @apply mx-auto;
    }

    pre {
        @apply my-4 py-2 px-4 bg-darkest;
    }
    
    ul {
        @apply list-disc list-outside my-2 ml-6;
    }
}
</style>