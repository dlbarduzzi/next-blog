import { compileMDX } from "@content-collections/mdx"
import { defineCollection, defineConfig } from "@content-collections/core"

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
        remarkPlugins: [],
        rehypePlugins: [],
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
