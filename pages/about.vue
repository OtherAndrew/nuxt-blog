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
    <article>
        <h1 class="text-3xl font-extrabold my-4">About</h1>
        <p>
            The purpose of this blog is to document my software development experiences.
        </p>
        <p>
            This blog is based on <NuxtLink to="https://github.com/OtherAndrew/nextjs-blog">another blog</NuxtLink> I developed using the <NuxtLink to="https://nextjs.org/learn-pages-router/basics/create-nextjs-app">Learn Next.js Pages Router tutorial</NuxtLink>. I developed this blog using Vue.js, Nuxt, and Tailwind CSS. You can read more about how I created this blog <NuxtLink to="posts/nuxt-blog">here</NuxtLink>.
        </p>
        <p>
            Andrew is a recent graduate from the University of Washington Tacoma with a B.S. in Computer Science. He is a <NuxtLink to="https://en.wikipedia.org/wiki/Free_and_open-source_software">FOSS</NuxtLink> enthusiast and an avid GNU/Linux user. His favorite programming language is JavaScript, but he is also comfortable with Java and SQL. His other interests include <NuxtLink to="https://almostvintagestyle.com">heritage menswear</NuxtLink> and <NuxtLink to="https://www.stitchdown.com">welted footwear</NuxtLink>.
        </p>
    </article>
</template>