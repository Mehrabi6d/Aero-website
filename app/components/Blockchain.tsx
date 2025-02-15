export default function Blockchain() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Aero Blockchain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical Overview</h3>
            <p className="mb-4">
              Aero utilizes a cutting-edge consensus mechanism designed for scalability and security.
            </p>
            <a href="#" className="text-blue-400 hover:underline">
              Learn more about our technology
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Block Explorer</h3>
            <p className="mb-4">
              Explore the Aero blockchain, check transactions, and view network activity in real-time.
            </p>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Launch Block Explorer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

