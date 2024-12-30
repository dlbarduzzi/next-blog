import type { Options as RehypePrettyCodeOptions } from "rehype-pretty-code"

import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"

import { compileMDX } from "@content-collections/mdx"
import { remarkGfm, remarkHeading } from "fumadocs-core/mdx-plugins"
import { defineCollection, defineConfig } from "@content-collections/core"

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: {
    dark: "catppuccin-mocha",
    light: "everforest-light",
  },
}

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.mdx",
  schema: z => ({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await context.cache(document.content, async () => {
      return compileMDX(context, document, {
        remarkPlugins: [remarkGfm, remarkHeading],
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions, rehypeSlug]],
      })
    })
    return {
      ...document,
      body: mdx,
      date: new Date(document.date),
      slug: document._meta.path,
    }
  },
})

export default defineConfig({ collections: [posts] })
