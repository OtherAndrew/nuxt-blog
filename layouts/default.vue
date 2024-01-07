<script setup>
const name = ref("Andrew");

const route = useRoute();

const atHome = computed(() => route.path === '/')
</script>

<template>
    <div class="max-w-xl py-0 px-4 mt-12 mb-24 mx-auto">
        <Head>
            <Link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Nuxt blog"
            />
        </Head>
        <header>
            <div v-if="atHome" class="centered">
                <img
                    src="/images/profile.jpg"
                    class="rounded-full"
                    height="144"
                    width="144"
                    alt="Profile picture"
                />
                <h1 class="text-4xl font-extrabold tracking-normal mt-4 mb-0 mx-0">
                    {{ name }}
                </h1>
            </div>
            <div v-else class="centered">
                <NuxtLink to="/">
                    <img
                        src="/images/profile.jpg"
                        class="rounded-full transition duration-500 opacity-50 hover:opacity-100"
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
        <footer>
            <div v-if="!atHome" class="mt-12">
                <NuxtLink to="/">← Back to home</NuxtLink>
            </div>
            <div class="centered">
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="https://github.com/OtherAndrew/nuxt-blog" class="pt-1">
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

<style scoped>
.centered {
    @apply flex flex-col items-center;
}
</style>
