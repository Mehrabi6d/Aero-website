import Link from "next/link"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blockchain", label: "Blockchain" },
  { href: "/game", label: "Game" },
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "/community", label: "Community" },
]

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Aero
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-blue-300 transition duration-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

