"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function TopExpandingScrollbar() {
  const [isHovered, setIsHovered] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const width = useTransform(scaleX, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scaleX, [0, 0.1, 0.2, 0.3, 1], [0.5, 0.6, 0.7, 0.8, 1])

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
        className="fixed top-0 left-1/2 h-2 bg-[#F4BC06] z-50"
        style={{
          width,
          x: "-50%",
          opacity,
          transformOrigin: "center",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          height: isHovered ? "8px" : "4px",
          boxShadow: isHovered ? "0 0 10px rgba(244, 188, 6, 0.5)" : "none",
        }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#F4BC06]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      {showScrollTop && (
        <motion.button
          className="fixed bottom-4 right-4 bg-[#F4BC06] text-white p-3 rounded-full shadow-lg z-50"
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

