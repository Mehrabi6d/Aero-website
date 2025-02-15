"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function BuyPage() {
  const [paymentMethod, setPaymentMethod] = useState<"fiat" | "crypto" | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700">
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Buy Aero Tokens
        </motion.h1>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            onClick={() => setPaymentMethod("fiat")}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Pay with Fiat
          </motion.button>
          <motion.button
            onClick={() => setPaymentMethod("crypto")}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Pay with Crypto
          </motion.button>
        </motion.div>
        {paymentMethod === "fiat" && (
          <motion.p
            className="mt-4 text-center text-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unavailable for now
          </motion.p>
        )}
        {paymentMethod === "crypto" && (
          <motion.p
            className="mt-4 text-center text-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Crypto payment implementation coming soon!
          </motion.p>
        )}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition duration-300">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

