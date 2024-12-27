import { allPosts } from "content-collections"
import { Container } from "@/components/container"

import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <Container
      className={cn("relative grid w-full grid-cols-[2fr_1fr] items-start gap-8 py-8")}
    >
      <section className="space-y-8">
        <ul>
          {allPosts.map(post => (
            <li key={post._meta.path} className="rounded-md bg-gray-100 px-6 py-4">
              <a href={`/posts/${post._meta.path}`}>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="space-y-8">
          {Array.from({ length: 14 }).map((_, index) => (
            <div key={index} className="rounded-md bg-gray-100 px-4 py-[44px]">
              Content
            </div>
          ))}
        </div>
      </section>
      <section className="sticky top-8 bg-gray-100">
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="px-4 py-3">
              Sidebar
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
