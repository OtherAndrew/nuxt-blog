---
title: "Nuxt Dev Blog"
description: "A blog post describing the development process of this dev blog."
date:
    published: "2024-01-12"
image:
    src: "/images/posts/nuxt-blog/post-list.png"
    alt: "The list of posts on the dev blog."
---

[This dev blog](https://github.com/OtherAndrew/nuxt-blog) is a project I started working on after earning my CS degree. In this post, I will go over the development process of this blog.

## Description

---

A dev blog is used by a software developer to document and reflect upon their experiences in software development, among other things. One example of a dev blog is [Coding Horror](https://blog.codinghorror.com) by Jeff Atwood.

## Goals

---

- Use a modern front end web development framework to create a dev blog.
- Learn how to use Vue.js, Nuxt, and Tailwind CSS.
- Use my dev blog to effectively showcase my software development projects.

## Technologies Used

---

- JavaScript
- [Vue.js](https://vuejs.org)
- [Nuxt](https://nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)

## Features

---

- **Markdown content**: Blog posts are written with Markdown, which is parsed and displayed as a web page using [Nuxt Content](https://content.nuxt.com). This expedites the time required to publish new posts by providing a lighter markup language than HTML to author posts with.
- **Dynamic page routing**: A URL route for each blog post is dynamically generated using Nuxt's [pages router](https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes), eliminating the need to create a new Vue component and router entry for each post.
- **Page metadata with front-matter**: Using Nuxt Content, the [front-matter](https://content.nuxt.com/usage/markdown#front-matter) section of each post is parsed and used to set the web page's metadata. Cover images for each post can also be specified with front-matter.

## Development

---

This blog is based off [another blog](https://github.com/OtherAndrew/nextjs-blog) I created by following the [Learn Next.js Pages Router tutorial](https://nextjs.org/learn-pages-router/basics/create-nextjs-app). I built websites with plain old HTML, CSS, and JavaScript previously, but I didn't have much experience with modern front end frameworks. I thought creating a dev blog would be a great way to learn and I could use it to showcase my other projects.

 I initially chose to use React because I wanted to build up my React skills and I already had some experience with it. I chose to use Next.js alongside React to take advantage of the Pages Router, which eliminated the need to configure a router myself.

### Switching to Vue.js

After revisiting the blog, I decided to rewrite it using Vue.js and Nuxt. My reasons for switching over are:

#### The Next.js App Router

A while after completing my old blog, Next.js switched from the Pages Router to the App Router. The App Router seemed similar to the Pages Router that my old blog was based on, but I didn't want to refactor my code to make it work with the App Router.

#### Less corporate influence

Being an [FOSS](https://en.wikipedia.org/wiki/Free_and_open-source_software) enthusiast, I appreciated that Vue didn't have a big corporation behind it dictating its direction. The same can't be said for Angular or React.

#### Easier to understand syntax

Most importantly, I found Vue's [Single-File Component (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) syntax much easier to work with compared to React. I didn't like how React blended markup and logic with JSX and in the handful of React projects I've worked on, I found that my React files ended up looking like a jumbled mess of HTML and JavaScript. I particularly disliked how React handled conditional rendering with short-circuit evaluation and ternary expressions.

![Vue vs. React header](/images/posts/nuxt-blog/vue-vs-react-header.png)

*The Vue version of this blog's header vs the React version.*

With Vue, the logic and markup are mostly separate, which made writing both the JavaScript and HTML more straightforward. I can look at the HTML in a Vue component and immediately understand how it's supposed to look without having to mentally filter out the JavaScript embedded within.

I also appreciated that Vue SFCs contain their logic, markup, and styling in one file. I've worked on several projects where I needed to jump around all over the project just to implement one UI element, so the SFC approach is refreshing.

### Tailwind CSS

Since I was rewriting my blog from scratch, I also decided to redo the styling with Tailwind CSS. I was skeptical of the benefits Tailwind offered compared to vanilla CSS, and I initially wasn't a fan of how it resembled inline styling, but I wanted to familiarize myself with it in case I needed to use it in the future.

I ended up being pleasantly surprised by Tailwind. I appreciated how I could just add styles to an element without having to think about classes, and being able to see the styles next to the HTML elements they affected. I also found myself doing less mental math when adding spacing or setting sizes.

## Challenges

---

Rewriting my blog with Vue was not as simple as copying everything one-to-one and changing things to fit Vue. Here are some of the challenges I faced during development.

### Getting Markdown content

The old blog rendered Markdown content using a JavaScript module that parsed Markdown files with [remark](https://remark.js.org) and converted it to HTML which could then be displayed on the page. The problem with this approach was that it made use of Node modules that were disallowed by Vite, such as fs, path, and process.

I was stuck figuring out how to get the Markdown content without having to create a dedicated back end for my blog. That was until I watched [Fireship's "Nuxt in 100 Seconds"](https://www.youtube.com/watch?v=dCxSsr5xuL8&t=96) video, where he mentions the [Nuxt Content](https://content.nuxt.com) module that did exactly what I wanted. Nuxt Content automatically fetches the Markdown file matching the current URL route and gives me both its content and metadata. Its also able to scan the file system for Markdown files, working around the restrictions on server-side Node modules.

### Rendering Markdown content

Now that I could load the content of Markdown files, The next challenge I faced was actually getting the Markdown content to display correctly. When the content was displayed, every part of it was formatted like a `<p>` tag, with no special sizing, formatting, or spacing.

 I tried a couple things to fix this, one of which was using the [Tailwind CSS Typography plugin](https://stackoverflow.com/a/69602423). I was able to get the Markdown content formatted correctly using the plugin, but the problem was it rendered the content with light mode text by default. I never figured out [how to change the text color](https://tailwindcss.com/docs/typography-plugin) so I looked for other solutions.

The next thing I tried was [disabling Tailwind Preflight](https://stackoverflow.com/questions/75881126/tailwind-css-is-unstyling-page-created-through-remark-and-rehype). Disabling [Preflight](https://tailwindcss.com/docs/preflight) allowed the Markdown content to display correctly, with formatting and everything. The issue now was that disabling Preflight affected the styling of other Vue components on the same page as the Markdown content, resulting in unintended effects especially with images.

The solution I settled on was putting a `markdown` class on the `<ContentDoc>` where the Markdown content was being rendered, and using [nested CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting) to apply styles only to child elements of the `<ContentDoc>`. This worked out well and I could customize the sizing, spacing, and colors as I like, but I ended up having to manually write styling for each Markdown element, a non-trivial amount of work.

### Applying CSS styling to the GitHub logo

Changing the color and hover effects on the GitHub logo at the bottom of the page was surprisingly tricky. I couldn't put the logo in as an `<img>` because then I couldn't use CSS to change the color of the logo to match my page. What I needed to do was manually edit the SVG code of the logo so it could accept CSS colors with `fill="currentColor"`, and then enclose the SVG code in a Vue component so I could place it in the page.

Though I could now change the color of the logo with CSS and make it change color when hovered over, I couldn't scale it down. I once again needed to edit the SVG code. I added a [`viewBox`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox) to the SVG, and then I set the width and height of the `viewBox` to the original width and height of the logo as written in the SVG code. Once I did this I could apply a size to the Vue component containing the logo to scale it down.

## Takeaways

---

Though I am still new to Vue, I feel like I now have a good understanding of how it works and how to use it to create a website. Compared to React, I found developing with Vue a more pleasant experience and I plan to use it for future front end web development projects.
