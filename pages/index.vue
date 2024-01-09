<script setup>
    import { getFileName } from '~/src/utils';

    const { data } = await useAsyncData(() => 
        queryContent('posts') 
            .only(["_path", "title", "date", "coverImage"])
            .sort({ date: -1 })
            .find()
    );

    const postsWithAltText = data.value.map(post => {
        if ("coverImage" in post) {
            return {
                ...post,
                altText: `Cover image for ${getFileName(post._path)}`,
            };
        } else {
            return post;
        }
    });

    const blogPosts = reactive(postsWithAltText);
</script>

<template>
    <Head>
        <Title>Dev Blog</Title>
    </Head>
    <div>
        <section class="text-xl text-center">
            <p>Lean, mean, programming machine.</p> 
        </section>
        <section>
            <h2 class="text-2xl font-bold my-4">Posts</h2>
            <ul class="text-xl">
                <li v-for="post in blogPosts" class="my-2 rounded-xl transition duration-500 hover:bg-dark" :key="post._path">
                    <PostLink :post="post" />
                </li>
            </ul>
        </section>   
    </div>
</template>