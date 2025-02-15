"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronDown, Database, Zap, ArrowRight, Shield } from "lucide-react"

export default function AnimatedFeatureSection({ activeTab, isChanging }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  useEffect(() => {
    if (isChanging) {
      controls.start({ opacity: 0, y: 20, transition: { duration: 0.3 } })
    } else {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.3 } })
    }
  }, [isChanging, controls])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const features = {
    architecture: {
      title: "Blockchain Architecture",
      icon: <Database className="w-12 h-12 text-blue-400" />,
      description:
        "Our game-optimized blockchain architecture ensures seamless integration of gaming logic with blockchain operations.",
      items: [
        "Game-optimized blocks containing transactions, timestamps, and cryptographic hashes",
        "SHA-256 hashing ensures chain integrity and game state security",
        "Modular structure with clear separation of game logic and blockchain operations",
      ],
    },
    consensus: {
      title: "Proof-of-Stake Consensus",
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      description:
        "Our PoS consensus mechanism provides a fair, energy-efficient solution for block validation in gaming environments.",
      items: [
        "Stake-weighted validator selection for fair block proposal",
        "Randomized selection mechanism to prevent monopolization",
        "Energy-efficient design perfect for sustainable gaming",
      ],
    },
    transactions: {
      title: "Transaction & State Management",
      icon: <ArrowRight className="w-12 h-12 text-green-400" />,
      description:
        "Efficient transaction and state management systems ensure smooth in-game economies and asset transfers.",
      items: [
        "Double-entry bookkeeping for accurate in-game asset tracking",
        "Nonce tracking prevents transaction replay attacks in gaming sessions",
        "Fee system for prioritizing critical game transactions",
      ],
    },
    security: {
      title: "Security & Performance",
      icon: <Shield className="w-12 h-12 text-red-400" />,
      description: "Robust security measures and optimized performance for a seamless and safe gaming experience.",
      items: [
        "SHA-256 cryptographic hashing for robust game data protection",
        "Strict balance verification before approving in-game transactions",
        "Flask-based API for seamless integration with game clients",
        "Optimized for low-latency gaming experiences",
      ],
    },
  }

  const feature = features[activeTab]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-gray-800 p-6 rounded-lg"
    >
      <motion.div
        className="flex items-center mb-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {feature.icon}
        <h3 className="text-2xl font-semibold ml-4">{feature.title}</h3>
      </motion.div>
      <motion.p
        className="text-gray-300 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {feature.description}
      </motion.p>
      <ul className="space-y-2">
        {feature.items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          >
            <ChevronDown className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

