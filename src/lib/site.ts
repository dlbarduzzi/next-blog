import { env } from "@/env/client"

export type SiteConfig = {
  name: string
  description: string
  url: string
}

export const siteConfig: SiteConfig = {
  name: "NextBlog",
  description: "A blog app about software development.",
  url: env.NEXT_PUBLIC_BASE_URL,
}
