import type { ComponentProps, HTMLProps } from "react"

import Link from "next/link"
import { MDXContent } from "@content-collections/mdx/react"

import { cn } from "@/lib/utils"

const h1 = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "mb-6 mt-14 font-sans text-2xl font-bold tracking-tight text-black",
        "first:mt-0 md:text-3xl"
      )}
      {...props}
    />
  )
}

const h2 = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "mb-6 mt-10 font-head text-2xl font-bold tracking-tight text-black",
        "text-rose-500 first:mt-0 md:text-2xl"
      )}
      {...props}
    />
  )
}

//
//
// TODO: Redo this.
//
//
const a = ({ href, ...props }: HTMLProps<HTMLAnchorElement>) => {
  if (typeof href !== "string") {
    throw new TypeError("href is required")
  }

  const className = cn(
    "inline-block font-bold text-black underline decoration-gray-400 decoration-2",
    "underline-offset-2 transition-colors hover:text-rose-500",
    "hover:decoration-rose-400"
  )

  if (href.startsWith("/")) {
    return <Link href={href} className={className} {...props} />
  }

  if (href.startsWith("#")) {
    return <a href={href} className={className} {...props} />
  }

  return (
    <a
      {...props}
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}

const p = ({ ...props }: HTMLProps<HTMLParagraphElement>) => {
  return <p className={cn("text-base font-normal leading-8 text-black")} {...props} />
}

const ul = ({ ...props }: HTMLProps<HTMLUListElement>) => {
  return <ul className={cn("text-base font-normal leading-7 text-black")} {...props} />
}

const li = ({ ...props }: HTMLProps<HTMLLIElement>) => {
  return <li className={cn("marker:text-black")} {...props} />
}

const blockquote = ({ ...props }: HTMLProps<HTMLQuoteElement>) => {
  return <blockquote className={cn("border-black italic")} {...props} />
}

const codeBlock = ({ ...props }: HTMLProps<HTMLElement>) => {
  return <code className="" {...props} />
}

const strong = ({ ...props }: HTMLProps<HTMLElement>) => {
  return <strong className="" {...props} />
}

export function Mdx({ code, components }: ComponentProps<typeof MDXContent>) {
  return (
    <div className="prose max-w-none">
      <MDXContent
        code={code}
        components={{
          h1,
          h2,
          a,
          p,
          ul,
          li,
          blockquote,
          code: codeBlock,
          strong,
          ...components,
        }}
      />
    </div>
  )
}
