import { motion } from "framer-motion"
import { Users, Star, Gift, Calendar } from "lucide-react"

const highlights = [
  { icon: <Users size={24} />, title: "Gaming Tournaments", description: "Compete with the best players in Aero" },
  { icon: <Star size={24} />, title: "AMAs with the Team", description: "Get insights directly from Aero developers" },
  { icon: <Gift size={24} />, title: "Rewards & Giveaways", description: "Earn exclusive items and tokens" },
  { icon: <Calendar size={24} />, title: "Community Meetups", description: "Connect with fellow Aero enthusiasts" },
]

export default function CommunityHighlights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Community Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-700 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition-all duration-300"
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="mb-2 text-blue-300">
              {highlight.icon}
            </motion.div>
            <h3 className="font-semibold mb-1 text-blue-200">{highlight.title}</h3>
            <p className="text-gray-300 text-sm">{highlight.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center"
      >
        <p className="text-gray-300 text-sm mb-4">
          Join our community channels to participate in discussions, provide feedback, and help shape the future of
          Aero.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Get Involved
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

