"use client"

import { motion } from "framer-motion"
import React from "react"

interface AnimatedPageContentProps {
  children: React.ReactNode
}

export default function AnimatedPageContent({ children }: AnimatedPageContentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const childrenArray = React.Children.toArray(children)

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

