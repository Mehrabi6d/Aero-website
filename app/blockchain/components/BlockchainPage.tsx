"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Lock, Zap, Coins, Repeat, Users, Star } from "lucide-react"
import { AeroBackground } from "../../components/AeroBackground"
import AnimatedBlockchainVisual from "./AnimatedBlockchainVisual"
import AnimatedFeatureSection from "./AnimatedFeatureSection"
import AnimatedApplicationCard from "./AnimatedApplicationCard"

export default function BlockchainPage() {
  const [activeTab, setActiveTab] = useState("architecture")
  const [isChanging, setIsChanging] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AeroBackground title="Aero Blockchain" description="Powering the Future of Gaming" elementColor="#F4BC06" />
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A lightweight and efficient Proof-of-Stake (PoS) blockchain designed specifically for gaming, featuring secure
          transactions, modular design, and a stake-based consensus mechanism.
        </motion.p>

        <AnimatedBlockchainVisual />

        <div className="mb-16">
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {["architecture", "consensus", "transactions", "security"].map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => {
                  setIsChanging(true)
                  setTimeout(() => {
                    setActiveTab(tab)
                    setIsChanging(false)
                  }, 300)
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>
          <AnimatedFeatureSection activeTab={activeTab} isChanging={isChanging} />
        </div>

        <section className="mb-16">
          <motion.h2
            className="text-3xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🎮 Gaming Applications
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedApplicationCard
              title="Asset Ownership"
              description="Secure and transparent in-game asset ownership, allowing players to truly own their virtual items."
              icon={<Lock className="w-8 h-8 text-blue-400" />}
              delay={0}
            />
            <AnimatedApplicationCard
              title="Microtransactions"
              description="Efficient processing of microtransactions for seamless in-game purchases and trades."
              icon={<Coins className="w-8 h-8 text-yellow-400" />}
              delay={0.1}
            />
            <AnimatedApplicationCard
              title="Cross-Game Compatibility"
              description="Enable asset portability and interoperability across different games in the Aero ecosystem."
              icon={<Repeat className="w-8 h-8 text-green-400" />}
              delay={0.2}
            />
            <AnimatedApplicationCard
              title="Community Governance"
              description="Decentralized governance for community-driven game development and updates."
              icon={<Users className="w-8 h-8 text-purple-400" />}
              delay={0.3}
            />
            <AnimatedApplicationCard
              title="Verifiable Scarcity"
              description="Create and maintain verifiable scarcity for unique in-game items and collectibles."
              icon={<Star className="w-8 h-8 text-orange-400" />}
              delay={0.4}
            />
            <AnimatedApplicationCard
              title="Player Rewards"
              description="Implement transparent and fair player reward systems based on in-game achievements and contributions."
              icon={<Zap className="w-8 h-8 text-red-400" />}
              delay={0.5}
            />
          </div>
        </section>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="/whitepaper"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Whitepaper
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

