"use client"

import { useState } from "react"
import { Wallet } from "lucide-react"
import WalletConnectModal from "./WalletConnectModal"

interface WalletButtonProps {
  onClick?: () => void
}

export default function WalletButton({ onClick }: WalletButtonProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    if (!isConnected) {
      setIsModalOpen(true)
    } else {
      // Implement disconnect logic here
      setIsConnected(false)
    }
    onClick?.()
  }

  const handleConnect = () => {
    // Implement actual wallet connection logic here
    setIsConnected(true)
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition duration-300 ease-in-out text-sm font-medium ${
          isConnected ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-transparent text-blue-600 hover:bg-blue-100"
        }`}
      >
        <Wallet size={16} />
        <span className="hidden sm:inline">{isConnected ? "Connected" : "Connect Wallet"}</span>
      </button>
      <WalletConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

