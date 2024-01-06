<script setup>
    import BlogLink from "../components/BlogLink.vue";

    const { data } = await useAsyncData(() => 
        queryContent('posts') 
            // .only(["_path", "title", "date", "coverImage"])
            .sort({ date: -1 })
            .find()
    );

    function generateAltText(file) {
        const fileName = file
            .split("/").at(-1) // get file name
            .split(".").at(0); // strip extension
        return `Cover image for "${fileName}"`;
    }

    const addAltText = data.value.map(p => (
        {
            ...p,
            altText: generateAltText(p._file)
        }
    ));

    const blogPosts = ref(addAltText);
</script>

<template>
    <Head>
        <Title>Dev Blog</Title>
    </Head>
    <div>
        <section class="text-xl">
            <p>Lean, mean, JS machine.</p> 
        </section>
        <section class="text-xl pt-px">
            <h2 class="text-2xl font-bold my-4 mx-0">Blog</h2>
            <ul class="list-none p-0 m-0">
                <li v-for="post in blogPosts" class="pb-5">
                    <!-- <BlogLink 
                        :link="post._path"
                        :title="post.title"
                        :date="post.date"
                    /> -->
                    <img
                        v-if="post.coverImage" 
                        class="max-w-20 mr-4 inline-block align-middle"
                        :src="post.coverImage"
                        :alt="post.altText"
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