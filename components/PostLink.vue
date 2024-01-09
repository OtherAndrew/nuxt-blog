<script setup>
const props = defineProps(["post"]);

const post = reactive(props.post);
</script>

<template>
    <div class="flex flex-row items-start p-2">
        <NuxtLink :to="post._path" class="flex mr-4 max-w-16 min-h-16 rounded-md">
            <img v-if="post.coverImage"
                class="object-scale-down rounded-md"
                :src="post.coverImage"
                :alt="post.altText"
            />
            <img v-else
                class="object-scale-down rounded-md"
                src="/images/vue logo.png"
                alt="Placeholder image"
            />
        </NuxtLink>
        <div>
            <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
            <br />
            <small class="text-blue">
                <Date :dateString="post.date" />
            </small>
        </div>
    </div>
</template>