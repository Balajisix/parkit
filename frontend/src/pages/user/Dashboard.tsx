import { Header } from '../../components/Header';

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-600 drop-shadow-lg">
            Book Your Parking Spot Instantly
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience seamless parking with PARKIT. Reserve your slot in advance and enjoy stress-free parking at top locations.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Book Now
          </button>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1611845129188-d798bdfa0773?q=80&w=2070&auto=format&fit=crop"
              alt="Modern Parking"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center p-6 bg-gray-100 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Smart Parking Solutions</h2>
            <p className="text-lg text-gray-700">
              Our intelligent parking system saves your time by offering real-time availability updates and quick reservations.
            </p>
          </div>
        </section>

        {/* Customer Stories Section */}
        <section className="bg-gray-100 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                alt="Customer"
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-600"
              />
              <h3 className="text-xl font-semibold mb-2">Sanjay</h3>
              <p className="text-gray-600 mb-4">
                "PARKIT transformed my shopping trips! Now I can book parking in advance and enjoy my day hassle-free."
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
                alt="Customer"
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-600"
              />
              <h3 className="text-xl font-semibold mb-2">Haareez Ahamed</h3>
              <p className="text-gray-600 mb-4">
                "The best parking experience ever! Quick, easy, and super convenient."
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}