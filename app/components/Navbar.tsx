import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary-dark py-4 text-text-secondary flex flex-row">
      <h1 className="mx-8">Hippo Recipe App</h1>
      <Link href="/">Home</Link>
    </nav>
  )
}
