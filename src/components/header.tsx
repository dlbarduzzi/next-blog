import Link from "next/link"
import { Container } from "./container"
import { Logo } from "./Logo"

export function Header() {
  return (
    <header className="border-b border-b-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between gap-x-4">
          <div className="flex items-center">
            <Link href="/">
              <Logo />
              <span className="sr-only">Link to home page.</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}