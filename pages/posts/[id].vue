<script setup>
const route = useRoute();

const { data } = await useAsyncData(() =>
     queryContent(`posts/${route.params.id}`)
        .findOne()
);

const postData = ref(data.value);

useHead({
    titleTemplate: `${postData.value.title} - Dev Blog`
});
</script>

<template>
    <article>
        <img v-if="postData.image" 
            class="mx-auto my-8"
            :src="postData.image.src"
            :alt="postData.image.alt"
        />
        <h1 class="text-3xl font-extrabold mt-8">{{ postData.title }}</h1>
        <div class="text-blue mt-1">
            <Date :dateString="postData.date.published" />
        </div>
        <div v-if="postData.date.updated" class="text-blue italic">
            <p class="inline">Updated: </p>
            <Date :dateString="postData.date.updated" />
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

    code {
        @apply bg-darkest p-0.5;
    }

    h1 {
        @apply mt-8 mb-4 text-3xl font-extrabold;
    }

    h2 {
        @apply mt-8 mb-4 text-2xl font-extrabold;
    }

    h3 {
        @apply my-4 text-xl font-bold;
    }

    h4 {
        @apply my-4 text-lg font-bold;
    }

    h5 {
        @apply my-4 text-base font-bold;
    }

    h6 {
        @apply my-4 text-sm font-bold;
    }

    h1 > a,
    h2 > a,
    h3 > a,
    h4 > a,
    h5 > a,
    h6 > a {
        @apply text-light;
    }

    li {
        @apply my-2;
    }

    ol {
        @apply my-4 list-decimal list-outside ml-6;
    }

    p {
        @apply my-4;
    }

    p > img {
        @apply mx-auto max-h-[32rem];
    }

    /* captions */
    p > small { 
        @apply px-8 block text-center italic;
    }
    
    pre {
        @apply my-4 py-2 px-4 bg-darkest;
    }
    
    ul {
        @apply my-4 list-disc list-outside ml-6;
    }
}
</style>