<script setup>
const name = ref("Andrew");

const route = useRoute();

const atHome = computed(() => route.path === '/')
</script>

<template>
    <div class="max-w-xl py-0 px-4 mt-12 mb-24 mx-auto">
        <head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Nuxt blog"
            />
        </head>
        <header>
            <div v-if="atHome" class="centered">
                <img
                    src="/images/profile.jpg"
                    class="rounded-full"
                    height="144"
                    width="144"
                    alt="Profile picture"
                />
                <h1 class="text-4xl font-extrabold tracking-normal my-4 mx-0">
                    {{ name }}
                </h1>
            </div>
            <div v-else class="centered">
                <NuxtLink to="/">
                    <img
                        src="/images/profile.jpg"
                        class="rounded-full"
                        height="108"
                        width="108"
                        alt="Profile picture"
                    />
                </NuxtLink>
                <h2 class="text-2xl font-bold my-4 mx-0">
                    <NuxtLink to="/" class="text-inherit">
                        {{ name }}
                    </NuxtLink>
                </h2>
            </div>
        </header>
        <main>
            <slot></slot>
        </main>
        <div>
            <div v-if="!atHome" class="mt-12">
                <NuxtLink to="/">← Back to home</NuxtLink>
            </div>
            <div class="centered">
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="https://github.com/OtherAndrew/nuxt-blog">
                    <img
                        src="/images/GitHub-Mark-ea2971cee799.png"
                        class="rounded-full"
                        height="32"
                        width="32"
                        alt="GitHub link"
                    />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>
.centered {
    @apply flex flex-col items-center;
}
</style>
