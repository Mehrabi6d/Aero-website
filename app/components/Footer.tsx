import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_last-mvRsqdiYPT8fg8XicYmT0G7UGFDZ9h.png"
                alt="AGT Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              AGT
            </h3>
            <p className="text-sm mb-4">Play to earn, not just to win.</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} Aero. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap">
              <div className="w-1/2 mb-6">
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:text-blue-300 transition duration-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blockchain" className="hover:text-blue-300 transition duration-300">
                      Blockchain
                    </Link>
                  </li>
                  <li>
                    <Link href="/game" className="hover:text-blue-300 transition duration-300">
                      Game
                    </Link>
                  </li>
                  <li>
                    <Link href="/whitepaper" className="hover:text-blue-300 transition duration-300">
                      Whitepaper
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 mb-6">
                <h4 className="text-lg font-semibold mb-4">Community</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://x.com/AeroGames831543" className="hover:text-blue-300 transition duration-300">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-300 transition duration-300">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-300 transition duration-300">
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

