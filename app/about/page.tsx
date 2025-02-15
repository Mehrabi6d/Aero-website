"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {" "}
      {/* Added pt-16 for top padding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900 z-0"
      />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.section className="text-center mb-16" {...fadeIn}>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Aero – The Future of Decentralized Transactions
          </h1>
          <p className="text-xl mb-8 text-blue-200">
            Revolutionizing blockchain with speed, security, and scalability.
          </p>
          <Link
            href="/whitepaper"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center"
          >
            Read the Whitepaper
            <ArrowRight className="ml-2" />
          </Link>
        </motion.section>

        <motion.section className="mb-16" variants={stagger} initial="initial" animate="animate">
          <motion.h2 className="text-3xl font-bold mb-4" {...fadeIn}>
            What is Aero?
          </motion.h2>
          <motion.p className="text-lg mb-4" {...fadeIn}>
            Aero is a next-generation blockchain platform that revolutionizes decentralized transactions. It solves the
            scalability and efficiency issues plaguing traditional blockchains while maintaining top-notch security.
          </motion.p>
          <motion.p className="text-lg" {...fadeIn}>
            By leveraging advanced consensus mechanisms and innovative architecture, Aero provides a fast,
            cost-effective, and user-friendly ecosystem for decentralized applications and transactions.
          </motion.p>
        </motion.section>

        <motion.section className="mb-16" variants={stagger} initial="initial" animate="animate">
          <motion.h2 className="text-3xl font-bold mb-6" {...fadeIn}>
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-400" />}
              title="Decentralized & Secure"
              description="Built on blockchain for trustless transactions, ensuring maximum security and transparency."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              title="Efficient Transactions"
              description="Lightning-fast and cost-effective transactions, outperforming traditional blockchain systems."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-green-400" />}
              title="Scalability & Future-Proofing"
              description="Designed to handle high volumes and adapt to future technological advancements."
            />
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-purple-400" />}
              title="Proof-of-Stake Mechanism"
              description="Energy-efficient consensus mechanism ensuring network security and participant rewards."
            />
          </div>
        </motion.section>

        <motion.section className="mb-16" variants={stagger} initial="initial" animate="animate">
          <motion.h2 className="text-3xl font-bold mb-4" {...fadeIn}>
            Why Choose Aero?
          </motion.h2>
          <motion.ul className="list-none space-y-2" {...fadeIn}>
            {[
              "Unparalleled transaction speed and throughput",
              "Significantly lower fees compared to traditional blockchains",
              "Advanced security measures to protect assets and data",
              "Seamless integration with existing systems and dApps",
              "Committed to continuous innovation and improvement",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section className="mb-16" variants={stagger} initial="initial" animate="animate">
          <motion.h2 className="text-3xl font-bold mb-6" {...fadeIn}>
            Roadmap
          </motion.h2>
          <div className="space-y-4">
            <RoadmapItem quarter="Q1 2025" milestone="Blockchain launch" />
            <RoadmapItem quarter="Q2 2025" milestone="Wallet integration" />
            <RoadmapItem quarter="Q3 2025" milestone="Security enhancements" />
            <RoadmapItem quarter="Q4 2025" milestone="Full ecosystem rollout" />
          </div>
        </motion.section>

        <motion.section className="text-center" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-6">Ready to Dive Deeper?</h2>
          <Link
            href="/whitepaper"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Read the Whitepaper
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </motion.section>
      </div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </motion.div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

function RoadmapItem({ quarter, milestone }) {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{quarter}</div>
      <div className="ml-4 text-lg">{milestone}</div>
    </motion.div>
  )
}

