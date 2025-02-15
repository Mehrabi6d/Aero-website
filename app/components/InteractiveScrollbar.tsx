"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function InteractiveScrollbar() {
  const [isHovered, setIsHovered] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const width = useTransform(scaleY, [0, 1], ["4px", "12px"])
  const opacity = useTransform(scaleY, [0, 0.1, 0.2, 0.3, 1], [0, 0.2, 0.4, 0.6, 1])

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", checkScroll)
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  return (
    <>
      <motion.div
        className="fixed right-0 top-0 bottom-0 bg-blue-500 origin-top z-50 rounded-l-full"
        style={{ scaleY, width, opacity }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          boxShadow: isHovered ? "0 0 10px rgba(59, 130, 246, 0.5)" : "none",
        }}
      >
        <motion.div
          className="absolute top-0 right-0 w-full h-full bg-blue-300 rounded-l-full"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      {showScrollTop && (
        <motion.button
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </>
  )
}

