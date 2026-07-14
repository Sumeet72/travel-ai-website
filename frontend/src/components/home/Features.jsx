const features = [
  {
    icon: "🤖",
    title: "AI Trip Planner",
    description: "Generate personalized travel itineraries in seconds.",
  },
  {
    icon: "💰",
    title: "Budget Optimizer",
    description: "Plan trips that fit your budget without compromising experiences.",
  },
  {
    icon: "🏨",
    title: "Smart Hotel Suggestions",
    description: "Discover hotels based on your preferences and budget.",
  },
  {
    icon: "💬",
    title: "AI Travel Assistant",
    description: "Ask questions and get travel recommendations instantly.",
  },
];

function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose VoyageAI?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;