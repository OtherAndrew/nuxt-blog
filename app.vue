<script setup>
useSeoMeta({
    ogImage: "/images/profile.jpg",
    ogImageAlt: "Profile picture",
});

useHead({
    link: [{ rel: "icon", href: "/favicon.ico" }],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>