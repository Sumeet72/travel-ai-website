import { useParams } from "react-router-dom";

function Destination() {
  const { id } = useParams();

  const destinations = {
    1: {
      name: "Goa",
      description:
        "Goa is famous for beaches, nightlife, water sports, seafood, and Portuguese architecture.",
      places: [
        "Baga Beach",
        "Calangute Beach",
        "Anjuna Beach",
        "Fort Aguada",
        "Dudhsagar Falls",
        "Basilica of Bom Jesus",
      ],
    },
    2: {
      name: "Manali",
      description:
        "Manali is known for mountains, snow, adventure sports, and scenic valleys.",
      places: [
        "Solang Valley",
        "Rohtang Pass",
        "Hadimba Temple",
        "Old Manali",
        "Mall Road",
        "Jogini Waterfall",
      ],
    },
    3: {
      name: "Kerala",
      description:
        "Kerala is famous for backwaters, houseboats, tea gardens, and beaches.",
      places: [
        "Munnar",
        "Alleppey",
        "Kochi",
        "Thekkady",
        "Varkala Beach",
        "Kovalam Beach",
      ],
    },
    4: {
      name: "Jaipur",
      description:
        "Jaipur is the Pink City known for forts, palaces, and royal heritage.",
      places: [
        "Amber Fort",
        "Hawa Mahal",
        "City Palace",
        "Jantar Mantar",
        "Nahargarh Fort",
        "Jal Mahal",
      ],
    },
    5: {
      name: "Bali",
      description:
        "Bali offers beaches, temples, waterfalls, and vibrant nightlife.",
      places: [
        "Ubud",
        "Tanah Lot",
        "Nusa Penida",
        "Seminyak",
        "Kuta Beach",
        "Uluwatu Temple",
      ],
    },
    6: {
      name: "Paris",
      description:
        "Paris is famous for art, fashion, food, and iconic landmarks.",
      places: [
        "Eiffel Tower",
        "Louvre Museum",
        "Notre-Dame",
        "Arc de Triomphe",
        "Seine River Cruise",
        "Montmartre",
      ],
    },
  };

  const place = destinations[id];

  if (!place) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Destination not found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">{place.name}</h1>

        <p className="text-gray-600 mb-6">
          {place.description}
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Top Places to Visit
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          {place.places.map((spot, index) => (
            <li key={index}>{spot}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Destination;