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
    <div class="grid grid-cols-4 gap-1 p-1">
        <div v-for="item in displayArray">
            <a :href="item.path">
                <div class="flex">
                    <img class="h-28 object-cover hover:scale-125 transition" 
                        :src="item.path"
                        :alt="item.altText"
                    />
                </div>
            </a>
        </div>
    </div>
</template>

<style>
</style>