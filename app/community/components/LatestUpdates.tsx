import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface Update {
  title: string
  description: string
  date: string
}

const updates: Update[] = [
  {
    title: "Aero Partners with Major Gaming Studio",
    description: "Exciting new partnership announcement that will bring revolutionary features to our platform.",
    date: "3 days ago",
  },
  {
    title: "New Game Features Announced",
    description: "Check out the latest features coming to the Aero gaming ecosystem.",
    date: "1 week ago",
  },
  {
    title: "Community Tournament Results",
    description: "See who came out on top in our latest community-wide gaming event!",
    date: "2 weeks ago",
  },
]

export default function LatestUpdates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Latest Updates</h2>
      <div className="space-y-4">
        {updates.map((update, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-700 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition-all duration-300"
          >
            <h3 className="font-semibold mb-2 text-blue-300">{update.title}</h3>
            <p className="text-gray-300 text-sm mb-2">{update.description}</p>
            <div className="flex justify-between items-center">
              <time className="text-sm text-gray-400">{update.date}</time>
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-400 hover:text-blue-300"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}

