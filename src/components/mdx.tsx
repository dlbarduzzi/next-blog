import type { ComponentProps, HTMLProps } from "react"

import Link from "next/link"
import { MDXContent } from "@content-collections/mdx/react"

import { cn } from "@/lib/utils"

const h2 = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return <h2 className={cn("")} {...props} />
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

  const className = cn("")

  if (href.startsWith("/")) {
    return <Link href={href} className={className} {...props} />
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
  return <p className={cn("")} {...props} />
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
        components={{ h2, a, p, code: codeBlock, strong, ...components }}
      />
    </div>
  )
}
