import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary-dark py-4 text-text-secondary flex flex-row gap-x-4">
      <h1 className="mx-8">Hippo Recipe App</h1>
      <Link href="/">Home</Link>
      <Link href="/post-recipe">Add Recipe</Link>
    </nav>
  )
}
