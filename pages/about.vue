<script setup>
useSeoMeta({
    title: "About",
    ogTitle: "About",
    description: "About Andrew's dev blog.",
    ogDescription: "About Andrew's dev blog.",
    ogImage: "/images/icon-green.jpg",
    ogImageAlt: "Nuxt.js logo",
});

useHead({
    titleTemplate: "%s | Dev Blog",
});
</script>

<template>
    <div>
        <h1 class="text-3xl font-extrabold my-4">About</h1>

        <p>This is a dev blog ported over from React.js + Next.js (original blog <NuxtLink to="https://nextjs-blog-otherandrew.vercel.app">here</NuxtLink>). It uses Vue.js, Nuxt.js, and Tailwind CSS.</p>

        <p>Andrew is a recent graduate from the University of Washington Tacoma with a B.S. in Computer Science. He has been programming since high school and is interested in a full-time career in software development. His other interests include heritage menswear and welted footwear.</p>
    </div>
</template>