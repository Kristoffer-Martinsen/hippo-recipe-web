import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-cyan-950 text-slate-50 py-4 flex flex-row gap-x-4">
      <h1 className="mx-8">Hippo Recipe App</h1>
      <Link href="/">Home</Link>
      <Link href="/post-recipe">Add Recipe</Link>
    </nav>
  )
}
