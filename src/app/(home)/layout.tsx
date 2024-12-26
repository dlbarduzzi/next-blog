import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="gird flex-1">{children}</main>
    </div>
  )
}
