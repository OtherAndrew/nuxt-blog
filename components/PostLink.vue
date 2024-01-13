<script setup>
const props = defineProps(["post"]);

const post = ref(props.post);
</script>

<template>
    <NuxtLink :to="post._path" class="flex flex-row items-start p-2">
        <div class="flex mr-4 max-w-16 min-h-16 rounded-md">
            <img v-if="post.image"
                class="object-scale-down rounded-md"
                :src="post.image.src"
                :alt="post.image.alt"
            />
            <img v-else
                class="object-scale-down rounded-md"
                src="/images/icon-green.png"
                alt="Placeholder image"
            />
        </div>
        <div>
            <p class="my-0">{{ post.title }}</p>
            <small class="text-blue">
                <Date :dateString="post.date.published" />
            </small>
        </div>
    </NuxtLink>
</template>