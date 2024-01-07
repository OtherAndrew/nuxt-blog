<script setup>
    const { data } = await useAsyncData(() => 
        queryContent('posts') 
            .only(["_path", "title", "date", "coverImage"])
            .sort({ date: -1 })
            .find()
    );

    function generateAltText(path) {
        const fileName = path.split("/").at(-1);
        return `Cover image for ${fileName}`;
    }

    const addAltText = data.value.map(post => {
        if ("coverImage" in post) {
            return {
                ...post,
                altText: generateAltText(post._path),
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
        <section class="text-xl pt-px">
            <h2 class="text-2xl font-bold my-4 mx-0">Posts</h2>
            <ul class="list-none p-0 m-0">
                <li v-for="post in blogPosts" class="pb-5" :key="post._path">
                    <PostLink :post="post" />
                </li>
            </ul>
        </section>   
    </div>
</template>