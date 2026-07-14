function SearchBox() {
  return (
    <section className="-mt-20 relative z-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Plan Your Trip
        </h2>

        <div className="grid md:grid-cols-4 gap-5">

          <input
            type="text"
            placeholder="From"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Destination"
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Budget (₹)"
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Travelers"
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">
            <option>Solo</option>
            <option>Couple</option>
            <option>Family</option>
            <option>Friends</option>
          </select>

          <button className="bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
            Generate AI Trip
          </button>

        </div>

      </div>
    </section>
  );
}

export default SearchBox;