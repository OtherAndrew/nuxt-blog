<script setup>
const { data } = await useAsyncData(() => 
    queryContent('posts') 
        .only(["_path", "title", "date", "image"])
        .sort({ "date.published": -1 })
        .find()
);

const blogPosts = ref(data.value);

useSeoMeta({
    title: "Dev Blog",
    ogTitle: "Dev Blog",
    description: "Andrew's dev blog.",
    ogDescription: "Andrew's dev blog.",
    ogImage: "~/assets/images/profile.jpg",
    ogImageAlt: "Profile picture",
});

useHead({
    title: "Dev Blog",
});
</script>

<template>
    <div>
        <h2 class="text-2xl font-bold my-4">Posts</h2>
        <ul class="text-xl">
            <li v-for="post in blogPosts" class="my-2 rounded-xl transition duration-500 hover:bg-dark" :key="post._path">
                <PostLink :post="post" />
            </li>
        </ul> 
    </div>
</template>