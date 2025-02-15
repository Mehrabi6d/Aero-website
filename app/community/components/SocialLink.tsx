import type React from "react"
import { motion } from "framer-motion"

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  name: string
  description: string
}

export default function SocialLink({ href, icon, name, description }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-6 rounded-lg transition duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
        {icon}
      </motion.div>
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-center text-gray-400">{description}</p>
    </motion.a>
  )
}

