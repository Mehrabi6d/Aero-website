import { AeroBackground } from "@/app/components/AeroBackground"
import AnimatedBlockchainVisual from "./AnimatedBlockchainVisual"
import AnimatedFeatureSection from "./AnimatedFeatureSection"
import AnimatedApplicationCard from "./AnimatedApplicationCard"
import { useState } from "react"
import { motion } from "framer-motion"

const features = ["architecture", "consensus", "transactions", "security"]

export default function BlockchainPage() {
  const [activeTab, setActiveTab] = useState("architecture")
  const [isChanging, setIsChanging] = useState(false)

  const handleTabChange = (tab: string) => {
    setIsChanging(true)
    setTimeout(() => {
      setActiveTab(tab)
      setIsChanging(false)
    }, 300)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AeroBackground title="Aero Blockchain" description="Secure, Scalable, and Game-Optimized" />
      <div className="container mx-auto px-4 py-16">
        <AnimatedBlockchainVisual />
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {features.map((feature) => (
            <motion.button
              key={feature}
              onClick={() => handleTabChange(feature)}
              className={`bg-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition duration-300 ${
                activeTab === feature ? "bg-blue-600 text-white" : "text-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {feature}
            </motion.button>
          ))}
        </div>
        <AnimatedFeatureSection activeTab={activeTab} isChanging={isChanging} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <AnimatedApplicationCard
            title="Game Integration"
            description="Seamless integration with our play-to-earn game ecosystem."
            icon={<img src="/game-icon.svg" alt="Game Icon" className="w-12 h-12" />}
            delay={0}
          />
          <AnimatedApplicationCard
            title="NFT Marketplace"
            description="Trade unique in-game assets and NFTs in our decentralized marketplace."
            icon={<img src="/nft-icon.svg" alt="NFT Icon" className="w-12 h-12" />}
            delay={0.2}
          />
          <AnimatedApplicationCard
            title="Decentralized Finance (DeFi)"
            description="Earn passive income by staking your Aero tokens or participating in our DeFi protocols."
            icon={<img src="/defi-icon.svg" alt="DeFi Icon" className="w-12 h-12" />}
            delay={0.4}
          />
          <AnimatedApplicationCard
            title="Cross-Chain Compatibility"
            description="Seamlessly interact with other blockchain networks."
            icon={<img src="/cross-chain-icon.svg" alt="Cross-Chain Icon" className="w-12 h-12" />}
            delay={0.6}
          />
        </div>
      </div>
    </div>
  )
}

