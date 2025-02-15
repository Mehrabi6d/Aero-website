export default function Game() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Play-to-Earn Game</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Game Introduction</h3>
            <p className="mb-4">
              Dive into an immersive world where your skills translate to real earnings. Use Aero tokens within the game
              economy and cash out your winnings.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">NFT Marketplace</h3>
            <p className="mb-4">
              Trade unique in-game assets and NFTs in our decentralized marketplace, adding real value to your gaming
              experience.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Download & Play Now
          </a>
        </div>
      </div>
    </section>
  )
}

