<script setup>
useHead({
    link: [{ rel: "icon", href: "/favicon.ico" }],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  @apply transition
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0
}
</style>
