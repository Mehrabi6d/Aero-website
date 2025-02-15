"use client"

import Link from "next/link"
import { ArrowRight, Twitter, DiscIcon as Discord, MessageCircle, Instagram } from "lucide-react"
import SocialLink from "./SocialLink"
import LatestUpdates from "./LatestUpdates"
import CommunityHighlights from "./CommunityHighlights"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function CommunityPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle, rgba(29,78,216,0.15) 0%, rgba(30,64,175,0.1) 100%)",
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/blockchain-pattern.svg")',
            backgroundSize: "cover",
            y,
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {mounted && <FloatingParticles />}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join the Aero Community
        </motion.h1>

        <motion.p
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Be part of the revolution in blockchain gaming. Connect, share, and grow with fellow Aero enthusiasts!
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLink
            href="https://x.com/AeroGames831543"
            icon={<Twitter className="w-8 h-8" />}
            name="X (Twitter)"
            description="Get the latest updates and announcements"
          />
          <SocialLink
            href="https://discord.gg"
            icon={<Discord className="w-8 h-8" />}
            name="Discord"
            description="Chat with the community and get support"
          />
          <SocialLink
            href="https://t.me"
            icon={<MessageCircle className="w-8 h-8" />}
            name="Telegram"
            description="Join our Telegram for quick updates"
          />
          <SocialLink
            href="https://instagram.com"
            icon={<Instagram className="w-8 h-8" />}
            name="Instagram"
            description="See behind-the-scenes and community highlights"
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <LatestUpdates />
          <CommunityHighlights />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey with Aero today and become part of our growing community of blockchain gaming
            enthusiasts.
          </p>
          <Link
            href="/game"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Start Playing Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            opacity: Math.random() * 0.5 + 0.25,
          }}
        />
      ))}
    </div>
  )
}

