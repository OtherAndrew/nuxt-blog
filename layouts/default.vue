<script setup>
const name = ref("Andrew");

const route = useRoute();

const atHome = computed(() => route.path === '/');

useSeoMeta({
    ogImage: "/images/profile.jpg",
    ogImageAlt: "Profile picture",
})
</script>

<template>
    <div class="max-w-md sm:max-w-xl mt-12 mb-24 mx-auto p-8 bg-darker rounded-3xl">
        <header>
            <div v-if="atHome" class="flex flex-col items-center">
                <img
                    src="/images/profile.jpg"
                    class="rounded-full"
                    height="144"
                    width="144"
                    alt="Profile picture"
                />
                <h1 class="text-4xl font-extrabold tracking-normal mt-4">
                    {{ name }}
                </h1>
            </div>
            <div v-else class="flex flex-col items-center">
                <NuxtLink to="/">
                    <img
                        src="/images/profile.jpg"
                        class="rounded-full"
                        height="108"
                        width="108"
                        alt="Profile picture"
                    />
                </NuxtLink>
                <h2 class="text-2xl font-bold mt-4 mb-8">
                    <NuxtLink to="/" class="text-inherit">
                        {{ name }}
                    </NuxtLink>
                </h2>
            </div>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <div v-if="!atHome" class="mt-12">
                <NuxtLink to="/">← Back to home</NuxtLink>
            </div>
            <div class="flex flex-col items-center mt-4">
                <NuxtLink v-if="$route.name !== 'about'" to="/about" class="mb-1">
                    About
                </NuxtLink>
                <NuxtLink to="https://github.com/OtherAndrew/nuxt-blog">
                    <img class="transition duration-500 opacity-50 hover:opacity-100"
                        src="/images/github-mark-white.png"
                        height="32"
                        width="32"
                        alt="GitHub link"
                    />
                </NuxtLink>
            </div>
        </footer>
    </div>
</template>
