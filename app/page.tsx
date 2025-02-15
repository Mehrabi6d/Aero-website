"use client"
import Hero from "./components/Hero"
import Overview from "./components/Overview"
import Blockchain from "./components/Blockchain"
import Game from "./components/Game"
import FadeInSection from "./components/FadeInSection"
import { useState, useEffect } from "react"
import LoadingSpinner from "./components/LoadingSpinner"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // 1 second delay

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <>
      <Hero />
      <FadeInSection>
        <Overview />
      </FadeInSection>
      <FadeInSection>
        <Blockchain />
      </FadeInSection>
      <FadeInSection>
        <Game />
      </FadeInSection>
    </>
  )
}

