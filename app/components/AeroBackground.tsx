"use client"

import { motion } from "framer-motion"
import clsx from "clsx"
import { useState } from "react"

interface AeroBackgroundProps {
  title?: string
  description?: string
  className?: string
  variant?: keyof typeof COLOR_VARIANTS
  elementColor?: string
}

const COLOR_VARIANTS = {
  primary: {
    border: ["border-blue-500/60", "border-cyan-400/50", "border-slate-600/30"],
    gradient: "from-blue-500/30",
  },
  secondary: {
    border: ["border-indigo-500/60", "border-blue-400/50", "border-slate-600/30"],
    gradient: "from-indigo-500/30",
  },
  tertiary: {
    border: ["border-cyan-500/60", "border-blue-400/50", "border-slate-600/30"],
    gradient: "from-cyan-500/30",
  },
  quaternary: {
    border: ["border-sky-500/60", "border-blue-400/50", "border-slate-600/30"],
    gradient: "from-sky-500/30",
  },
} as const

const AnimatedBlockchain = () => (
  <motion.div
    className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%"],
    }}
    transition={{
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    }}
  >
    <div className="h-full w-full [background-image:repeating-linear-gradient(0deg,#3B82F6_0%,#3B82F6_1px,transparent_1px,transparent_64px),repeating-linear-gradient(90deg,#3B82F6_0%,#3B82F6_1px,transparent_1px,transparent_64px)] opacity-20" />
  </motion.div>
)

const AnimatedGamingIcon = ({ delay, color }: { delay: number; color: string }) => {
  const randomSize = Math.random() * 2 + 1 // Random size between 1 and 3
  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, randomSize, 0] }}
      transition={{
        duration: 4,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className="w-6 h-6">
        <path d="M14.25 6.75a5.25 5.25 0 00-10.5 0v2.25a.75.75 0 001.5 0V6.75a3.75 3.75 0 117.5 0v2.25a.75.75 0 001.5 0V6.75z" />
        <path d="M8.25 6.75a3.75 3.75 0 117.5 0v2.25a.75.75 0 11-1.5 0V6.75a2.25 2.25 0 00-4.5 0v2.25a.75.75 0 01-1.5 0V6.75zM1.5 15.75a.75.75 0 01.75-.75h19.5a.75.75 0 010 1.5H2.25a.75.75 0 01-.75-.75z" />
      </svg>
    </motion.div>
  )
}

export function AeroBackground({
  title = "Aero Blockchain Gaming",
  description = "The Future of Play-to-Earn",
  className,
  variant = "primary",
  elementColor = "#3B82F6",
}: AeroBackgroundProps) {
  const variantStyles = COLOR_VARIANTS[variant]

  return (
    <div
      className={clsx(
        "relative flex h-screen w-full items-center justify-center overflow-hidden",
        "bg-gray-900",
        className,
      )}
    >
      <AnimatedBlockchain />
      <motion.div className="absolute h-[480px] w-[480px]">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={clsx(
              "absolute inset-0 rounded-full",
              "border-2 bg-gradient-to-br to-transparent",
              variantStyles.border[i],
              variantStyles.gradient,
            )}
            animate={{
              rotate: 360,
              scale: [1, 1.05 + i * 0.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div
              className={clsx(
                "absolute inset-0 rounded-full mix-blend-screen",
                `bg-[radial-gradient(ellipse_at_center,${variantStyles.gradient.replace(
                  "from-",
                  "",
                )}/10%,transparent_70%)]`,
              )}
            />
          </motion.div>
        ))}
      </motion.div>

      {[...Array(10)].map((_, i) => (
        <AnimatedGamingIcon key={i} delay={i * 0.3} color={elementColor} />
      ))}

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className={clsx(
            "text-5xl font-bold tracking-tight md:text-7xl",
            "bg-gradient-to-b from-blue-300 to-blue-600 bg-clip-text text-transparent",
            "drop-shadow-[0_0_32px_rgba(59,130,246,0.4)]",
          )}
        >
          {title}
        </h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
          <span className="mx-3 opacity-50">·</span>
          Aero
        </motion.p>
      </motion.div>

      <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1D4ED8/30%,transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#60A5FA/15%,transparent)] blur-[80px]" />
      </div>
    </div>
  )
}

export function DemoAeroBackground() {
  const [currentVariant, setCurrentVariant] = useState<keyof typeof COLOR_VARIANTS>("primary")

  const variants = Object.keys(COLOR_VARIANTS) as (keyof typeof COLOR_VARIANTS)[]

  function getNextVariant() {
    const currentIndex = variants.indexOf(currentVariant)
    const nextVariant = variants[(currentIndex + 1) % variants.length]
    return nextVariant
  }

  return (
    <>
      <AeroBackground variant={currentVariant} />
      <div className="absolute top-12 right-12">
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-1 rounded-md z-10 text-sm font-medium"
          onClick={() => {
            setCurrentVariant(getNextVariant())
          }}
        >
          Change Variant
        </button>
      </div>
    </>
  )
}

