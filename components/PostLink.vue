<script setup>
const props = defineProps(["post"]);

const post = ref(props.post);
</script>

<template>
    <NuxtLink :to="post._path" class="flex flex-row items-start p-2">
        <img v-if="post.image"
            class="object-scale-down size-16 mr-4 rounded-md"
            :src="post.image.src"
            :alt="post.image.alt"
        />
        <img v-else
            class="object-scale-down size-16 mr-4 rounded-md"
            src="~/assets/images/nuxt-logo.png"
            alt="Placeholder image"
        />
        <div class="text-xl">
            <p class="my-0">{{ post.title }}</p>
            <small class="text-blue">
                <Date :dateString="post.date.published" />
            </small>
        </div>
    </NuxtLink>
</template>