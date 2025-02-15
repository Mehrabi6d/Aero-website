export default function Overview() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">What is Aero?</h2>
        <p className="text-xl mb-8">
          Aero is a revolutionary blockchain and play-to-earn gaming ecosystem that allows players to earn real value
          while enjoying immersive gameplay experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Fast & Low-Cost</h3>
            <p>Experience lightning-fast transactions with minimal fees on the Aero blockchain.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Secure & Decentralized</h3>
            <p>Enjoy the benefits of a robust, decentralized blockchain network built for gaming.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Integrated Gaming</h3>
            <p>Seamlessly integrated with our play-to-earn game ecosystem for a unified experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

