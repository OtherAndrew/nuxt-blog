<script setup>
useSeoMeta({
    title: "About",
    ogTitle: "About",
    description: "About Andrew's dev blog.",
    ogDescription: "About Andrew's dev blog.",
    ogImage: "/images/profile.jpg",
    ogImageAlt: "Profile picture",
});

useHead({
    titleTemplate: "%s | Dev Blog",
});
</script>

<template>
    <div>
        <h1 class="text-3xl font-extrabold my-4">About</h1>

        <p>The purpose of this blog is to document my software development experiences. This blog uses Vue.js, Nuxt, and Tailwind CSS, and is based on <NuxtLink to="https://github.com/OtherAndrew/nextjs-blog">another blog</NuxtLink> I developed using the <NuxtLink to="https://nextjs.org/learn-pages-router/basics/create-nextjs-app">Next.js Page Router tutorial</NuxtLink>.</p>

        <p>Andrew is a recent graduate from the University of Washington Tacoma with a B.S. in Computer Science. He has been programming since high school and is interested in a full-time career in software development. His other interests include heritage menswear and welted footwear.</p>
    </div>
</template>