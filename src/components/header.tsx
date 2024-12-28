import Link from "next/link"

import { Logo } from "./logo"
import { Container } from "./container"

export function Header() {
  return (
    <header className="sticky inset-0 z-50 border-b border-b-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between gap-x-4">
          <div className="flex items-center">
            <Link href="/">
              <Logo />
              <span className="sr-only">Link to home page.</span>
            </Link>
          </div>
          <div>Right</div>
        </div>
      </Container>
    </header>
  )
}
