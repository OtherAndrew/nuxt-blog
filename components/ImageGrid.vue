<script setup>
import { getFileName } from '~/src/utils';

const props = defineProps(["images"]);

const gridImages = reactive(props.images.map(path => {
    return {
        path: path,
        altText: getFileName(path),
    }
}));
</script>

<template>
    <div class="grid grid-cols-3 sm:grid-cols-4 gap-3 p-3">
        <NuxtLink v-for="image in gridImages" :to="image.path" class="flex">
            <img class="object-cover transition duration-500 hover:opacity-80" 
                :src="image.path"
                :alt="image.altText"
            />
        </NuxtLink>
    </div>
</template>