<script setup>
const name = ref("Andrew");

const route = useRoute();

const atHome = computed(() => route.path === '/');
const atAbout = computed(() => route.path === '/about')
</script>

<template>
    <div class="max-w-md sm:max-w-xl mt-12 mb-24 mx-auto p-8 bg-darker rounded-3xl">
        <header>
            <div v-if="atHome" class="flex flex-col items-center">
                <img
                    src="/images/profile.jpg"
                    class="rounded-full size-36"
                    alt="Profile picture"
                />
                <h1 class="text-4xl font-extrabold mt-4">
                    {{ name }}
                </h1>
                <p class="text-xl mt-2">Lean, mean, programming machine.</p> 
            </div>
            <div v-else class="flex flex-col items-center">
                <NuxtLink to="/">
                    <img
                        src="/images/profile.jpg"
                        class="rounded-full size-28"
                        alt="Profile picture"
                    />
                </NuxtLink>
                <h2 class="text-2xl font-bold mt-4">
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
                <NuxtLink v-if="!atAbout" to="/about" class="mb-1">
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
