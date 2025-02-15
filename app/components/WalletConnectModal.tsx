"use client"

declare global {
  interface Window {
    ethereum?: any
  }
}

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Wallet, QrCode } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface WalletConnectModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WalletConnectModal({ isOpen, onClose }: WalletConnectModalProps) {
  const [activeTab, setActiveTab] = useState<"direct" | "qr">("direct")
  const [selectedWallet, setSelectedWallet] = useState<"aero" | "metamask" | null>(null)
  const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(true)

  useEffect(() => {
    setIsMetaMaskAvailable(typeof window.ethereum !== "undefined")
  }, [])

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" })
        // Account connected successfully
        onClose()
        // You might want to update the global state here to reflect that the wallet is connected
      } catch (error) {
        console.error("User denied account access")
      }
    } else {
      console.log("MetaMask not detected")
      // You might want to show a message to the user here
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Connect Wallet</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            variant={activeTab === "direct" ? "default" : "outline"}
            onClick={() => setActiveTab("direct")}
            className={`w-full ${
              activeTab === "direct"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <Wallet className="mr-2 h-4 w-4" />
            Direct Login
          </Button>
          <Button
            variant={activeTab === "qr" ? "default" : "outline"}
            onClick={() => setActiveTab("qr")}
            className={`w-full ${
              activeTab === "qr"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <QrCode className="mr-2 h-4 w-4" />
            Scan QR Code
          </Button>
        </div>
        {activeTab === "direct" ? (
          <div className="space-y-6">
            <p className="text-sm text-gray-400">Choose your wallet to connect:</p>
            <RadioGroup
              onValueChange={(value) => setSelectedWallet(value as "aero" | "metamask")}
              value={selectedWallet || undefined}
            >
              <div
                className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${selectedWallet === "aero" ? "bg-blue-600" : "bg-gray-800"}`}
              >
                <RadioGroupItem value="aero" id="aero" />
                <Label htmlFor="aero" className="text-white cursor-pointer flex-grow">
                  Aero Wallet
                </Label>
              </div>
              <div
                className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${
                  selectedWallet === "metamask" ? "bg-blue-600" : "bg-gray-800"
                } ${!isMetaMaskAvailable ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <RadioGroupItem value="metamask" id="metamask" disabled={!isMetaMaskAvailable} />
                <Label
                  htmlFor="metamask"
                  className={`text-white cursor-pointer flex-grow ${!isMetaMaskAvailable ? "cursor-not-allowed" : ""}`}
                >
                  {isMetaMaskAvailable ? "MetaMask Wallet" : "MetaMask Not Detected"}
                </Label>
              </div>
            </RadioGroup>
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white transition-all duration-300"
              onClick={() => {
                if (selectedWallet === "metamask") {
                  connectMetaMask()
                } else {
                  // Implement connection logic for other wallet types
                  console.log("Connecting to", selectedWallet)
                }
              }}
              disabled={!selectedWallet}
            >
              Connect{" "}
              {selectedWallet === "aero" ? "Aero Wallet" : selectedWallet === "metamask" ? "MetaMask" : "Wallet"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-400">Scan this QR code with your mobile wallet app to connect.</p>
            <div className="bg-gray-800 w-full aspect-square rounded-lg flex items-center justify-center p-4">
              <div className="w-full h-full bg-white rounded-md flex items-center justify-center">
                <QrCode className="w-3/4 h-3/4 text-gray-900" />
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

