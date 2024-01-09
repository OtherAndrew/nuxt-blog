<script setup>
    const { data } = await useAsyncData(() => 
        queryContent('posts') 
            .only(["_path", "title", "date", "coverImage"])
            .sort({ date: -1 })
            .find()
    );

    const addAltText = data.value.map(post => {
        if ("coverImage" in post) {
            return {
                ...post,
                altText: `Cover image for ${post.title}`,
            };
        } else {
            return post;
        }
    });

    const blogPosts = reactive(addAltText);
</script>

<template>
    <Head>
        <Title>Dev Blog</Title>
    </Head>
    <div>
        <section class="text-xl text-center">
            <p>Lean, mean, JS machine.</p> 
        </section>
        <section class="text-xl">
            <h2 class="text-2xl font-bold my-4">Posts</h2>
            <ul>
                <li v-for="post in blogPosts" class="my-4" :key="post._path">
                    <PostLink :post="post" />
                </li>
            </ul>
        </section>   
    </div>
</template>