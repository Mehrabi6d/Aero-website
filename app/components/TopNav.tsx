"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import WalletButton from "./WalletButton"

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTabOpen, setIsTabOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blockchain", label: "Blockchain" },
    { href: "/game", label: "Game" },
    { href: "/whitepaper", label: "Whitepaper" },
    { href: "/community", label: "Community" },
  ]

  return (
    <nav className="bg-gray-800 w-full fixed top-0 z-50">
      {" "}
      {/* Added fixed top-0 z-50 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_last-mvRsqdiYPT8fg8XicYmT0G7UGFDZ9h.png"
                alt="AGT Logo"
                width={40}
                height={40}
                className="w-auto h-8 sm:h-10"
              />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <WalletButton onClick={() => setIsTabOpen(!isTabOpen)} />
              {isTabOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Account
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <WalletButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ml-4"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

