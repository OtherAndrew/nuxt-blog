<script setup>
const props = defineProps(["images"]);

function generateAltText(path) {
    return path
        .split("/").at(-1)
        .split(".").at(0);
}

const gridImages = ref(props.images.map(path => {
    return {
        path: path,
        altText: generateAltText(path),
    }
}));
</script>

<template>
    <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2">
        <a v-for="image in gridImages" :href="image.path" class="flex">
            <img class="object-cover transition duration-500 hover:opacity-80" 
                :src="image.path"
                :alt="image.altText"
            />
        </a>
    </div>
</template>