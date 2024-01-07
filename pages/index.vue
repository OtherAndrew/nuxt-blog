<script setup>
    import BlogLink from "../components/BlogLink.vue";

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

    const blogPosts = data.value.map(p => (
        {
            ...p,
            altText: generateAltText(p._path),
        }
    ));

    // const blogPosts = ref(addAltText);
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
            <h2 class="text-2xl font-bold my-4 mx-0">Blog</h2>
            <ul class="list-none p-0 m-0">
                <li v-for="post in blogPosts" class="pb-5">
                    <img class="max-w-20 mr-4 inline-block align-middle"
                        v-if="post.coverImage" 
                        :src="post.coverImage"
                        :alt="post.altText"
                    />
                    <img class="max-w-20 mr-4 inline-block align-middle grayscale"
                        v-else
                        src="/images/vue logo.png"
                        alt="placeholder image"
                    />
                    <div class="inline-block align-middle">
                        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
                        <br />
                        <small class="text-blue">
                            <Date :dateString="post.date" />
                        </small>
                    </div>
                </li>
            </ul>
        </section>   
    </div>
</template>