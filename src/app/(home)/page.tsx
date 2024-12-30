import Link from "next/link"

import { allPosts } from "content-collections"
import { Container } from "@/components/container"

import { cn } from "@/lib/utils"

export default function Page() {
  const posts = allPosts.toSorted((a, b) => b.date.getTime() - a.date.getTime())
  return (
    <Container
      className={cn(
        "relative w-full space-y-8 py-8 lg:grid lg:grid-cols-[2fr_1fr]",
        "lg:items-start lg:gap-x-8 lg:space-y-0"
      )}
    >
      <section>
        <ul className="space-y-8">
          {posts.map(post => (
            <Link key={post.title} href={`/blog/${post._meta.path}`} className="block">
              <li
                className={cn(
                  "rounded-md bg-gray-100 px-6 py-4 transition-colors hover:bg-gray-200"
                )}
              >
                <article>
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
                  <h3 className="pt-5 font-head text-lg font-extrabold tracking-tight">
                    {post.title}
                  </h3>
                  <p className="leading-7">{post.summary}</p>
                </article>
              </li>
            </Link>
          ))}
        </ul>
      </section>
      <section className="rounded-md bg-gray-100 lg:sticky lg:top-[6rem]">
        <div className="py-24">
          <div className="px-4 text-center">Categories</div>
        </div>
      </section>
    </Container>
  )
}
