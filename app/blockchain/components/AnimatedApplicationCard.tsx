"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function AnimatedApplicationCard({ title, description, icon, delay }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="flex items-center mb-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
      >
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </motion.div>
      <motion.p
        className="text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

