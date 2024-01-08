<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(["imgPathArray"]);

function generateAltText(path) {
    return path
        .split("/").at(-1)
        .split(".").at(0);
}

const displayArray = ref(props.imgPathArray.map(path => {
    return {
        path: path,
        altText: generateAltText(path),
    }
}));
</script>

<template>
    <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2">
        <a v-for="item in displayArray" :href="item.path" class="flex">
            <img class="object-cover transition duration-500 hover:opacity-80" 
                :src="item.path"
                :alt="item.altText"
            />
        </a>
    </div>
</template>