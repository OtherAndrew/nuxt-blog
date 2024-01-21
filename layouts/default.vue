<script setup>
const route = useRoute();

const atHome = computed(() => route.path === '/');
const atAbout = computed(() => route.path === '/about')
</script>

<template>
    <div class="max-w-md sm:max-w-xl mt-12 mb-24 mx-auto p-8 bg-darker rounded-3xl">
        <header>
            <HeaderLarge v-if="atHome" />
            <HeaderSmall v-else />
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <div v-if="!atHome" class="mt-12">
                <NuxtLink to="/">← Back to home</NuxtLink>
            </div>
            <div class="flex flex-col items-center mt-4">
                <NuxtLink v-if="!atAbout" to="/about" class="mb-2">
                    About
                </NuxtLink>
                <NuxtLink to="https://github.com/OtherAndrew/nuxt-blog">
                    <LogosGitHub class="size-8 text-blue hover:text-light transition duration-500" />
                </NuxtLink>
            </div>
        </footer>
    </div>
</template>
