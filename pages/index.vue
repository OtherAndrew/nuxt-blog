<script setup>
    import BlogLink from "../components/BlogLink.vue";

    const { data } = await useAsyncData(() => 
        queryContent('posts') 
            .only(["_path", "title", "date"])
            .sort({ date: -1 })
            .find()
    );
    const blogPosts = ref(data.value);
</script>

<template>
    <head>
        <title>Dev Blog</title>
    </head>
    <section class="text-xl">
       <p>Lean, mean, JS machine.</p> 
    </section>
    <section class="text-xl pt-px">
        <h2 class="text-2xl font-bold my-4 mx-0">Blog</h2>
        <ul class="list-none p-0 m-0">
            <li v-for="post in blogPosts" class="pb-5">
                <BlogLink 
                    :link="post._path"
                    :title="post.title"
                    :date="post.date"
                />
            </li>
        </ul>
    </section>    
</template>