<script setup>
useSeoMeta({
    title: "About",
    ogTitle: "About",
    description: "About Andrew's dev blog.",
    ogDescription: "About Andrew's dev blog.",
    ogImage: "/images/icon-green.png",
    ogImageAlt: "Nuxt.js logo",
});

useHead({
    titleTemplate: "%s | Dev Blog",
});
</script>

<template>
    <div>
        <h1 class="text-3xl font-extrabold my-4">About</h1>

        <p>This is a dev blog ported over from React.js + Next.js. The <NuxtLink to="https://github.com/OtherAndrew/nextjs-blog">original blog</NuxtLink> was based on the <NuxtLink to="https://nextjs.org/learn-pages-router/basics/create-nextjs-app">Next.js Page Router tutorial</NuxtLink>. This blog was developed using Vue.js, Nuxt.js, and Tailwind CSS.</p>

        <p>Andrew is a recent graduate from the University of Washington Tacoma with a B.S. in Computer Science. He has been programming since high school and is interested in a full-time career in software development. His other interests include heritage menswear and welted footwear.</p>
    </div>
</template>