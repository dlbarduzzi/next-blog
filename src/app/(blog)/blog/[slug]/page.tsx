import { Container } from "@/components/container"

import { notFound } from "next/navigation"
import { allPosts } from "content-collections"

import { cn } from "@/lib/utils"
import { Mdx } from "@/components/mdx"

export function generateStaticParams(): { slug: string }[] {
  return allPosts.map(post => ({ slug: post._meta.path }))
}

type Params = {
  readonly params: Promise<{ slug: string }>
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const post = allPosts.find(({ _meta }) => _meta.path === slug)

  if (!post) {
    return notFound()
  }

  return (
    <Container
      className={cn(
        "relative w-full space-y-8 py-8 lg:grid lg:grid-cols-[2fr_1fr]",
        "lg:items-start lg:gap-x-8 lg:space-y-0"
      )}
    >
      <section>
        <article>
          <div>
            <div className="text-left">
              <dl>
                <dt className="sr-only">Date</dt>
                <dd className="text-sm">
                  <time dateTime={post.date.toISOString()}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </dd>
              </dl>
              <h1
                className={cn(
                  "pt-5 font-head text-2xl font-extrabold tracking-tight md:text-4xl"
                )}
              >
                {post.title}
              </h1>
              <p className="pt-1 text-sm uppercase tracking-wide md:text-base">
                {post.summary}
              </p>
            </div>
            <div className="mt-10">
              <Mdx code={post.body} />
            </div>
          </div>
        </article>
      </section>
      <section
        className={cn(
          "hidden lg:sticky lg:top-[6rem] lg:block lg:rounded-md lg:bg-gray-100"
        )}
      >
        <div className="py-24">
          <div className="px-4 text-center">Table of Contents</div>
        </div>
      </section>
    </Container>
  )
}
