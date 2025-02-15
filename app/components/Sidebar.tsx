"use client"

import { useState } from "react"
import Link from "next/link"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="fixed top-4 left-4 z-50 text-2xl font-bold" onClick={() => setIsOpen(!isOpen)}>
        Aero
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4 mt-16">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="block hover:text-blue-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-blue-300 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/blockchain" className="block hover:text-blue-300 transition duration-300">
                Blockchain
              </Link>
            </li>
            <li>
              <Link href="/game" className="block hover:text-blue-300 transition duration-300">
                Game
              </Link>
            </li>
            <li>
              <Link href="/whitepaper" className="block hover:text-blue-300 transition duration-300">
                Whitepaper
              </Link>
            </li>
            <li>
              <Link href="/community" className="block hover:text-blue-300 transition duration-300">
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setIsOpen(false)}></div>}
    </>
  )
}

