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
  const isAnchorLink = props.id && props.id.trim().length > 0
  if (isAnchorLink) {
    return (
      <h2
        className={cn(
          "group relative mb-6 mt-10 flex items-center font-head text-2xl",
          "scroll-mt-20 tracking-tight first:mt-0 md:text-2xl"
        )}
        {...props}
      >
        <span
          className={cn(
            "absolute -left-6 hidden text-rose-500 group-hover:inline-block"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <line x1="4" x2="20" y1="9" y2="9" />
            <line x1="4" x2="20" y1="15" y2="15" />
            <line x1="10" x2="8" y1="3" y2="21" />
            <line x1="16" x2="14" y1="3" y2="21" />
          </svg>
        </span>
        <a href={`#${props.id}`} className="font-bold text-rose-500 no-underline">
          {props.children}
        </a>
      </h2>
    )
  }
  return (
    <h2
      className={cn(
        "mb-6 mt-10 bg-gray-100 font-head text-2xl font-bold tracking-tight",
        "text-rose-500 first:mt-0 md:text-2xl"
      )}
      {...props}
    />
  )
}

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
  return (
    <ul className={cn("ps-10 text-base font-normal leading-7 text-black")} {...props} />
  )
}

const li = ({ ...props }: HTMLProps<HTMLLIElement>) => {
  return <li className={cn("marker:text-black")} {...props} />
}

const blockquote = ({ ...props }: HTMLProps<HTMLQuoteElement>) => {
  return <blockquote className={cn("border-black italic")} {...props} />
}

const codeBlock = ({ ...props }: HTMLProps<HTMLElement>) => {
  return <code className="font-code text-indigo-500" {...props} />
}

const strong = ({ ...props }: HTMLProps<HTMLElement>) => {
  return <strong className="font-bold text-black" {...props} />
}

export function Mdx({ code, components }: ComponentProps<typeof MDXContent>) {
  return (
    <div className="prose max-w-none text-red-500">
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
