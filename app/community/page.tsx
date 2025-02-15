import CommunityPage from "./components/CommunityPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community | Aero",
  description: "Join the Aero community and connect with fellow blockchain gaming enthusiasts",
}

export default function Page() {
  return <CommunityPage />
}

