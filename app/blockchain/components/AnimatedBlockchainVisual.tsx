"use client"

import { motion } from "framer-motion"

export default function AnimatedBlockchainVisual() {
  return (
    <div className="relative h-60 mb-16">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-12 h-12 bg-blue-500 rounded-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -20, 0],
            rotateY: 360,
          }}
          transition={{
            duration: 2,
            delay: index * 0.2,
            y: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            },
            rotateY: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "linear",
            },
          }}
          style={{
            left: `${index * 25}%`,
            top: "50%",
          }}
        />
      ))}
      <motion.div
        className="absolute w-full h-1 bg-blue-400 top-1/2 -translate-y-1/2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </div>
  )
}

