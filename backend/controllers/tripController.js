import ai from "../services/geminiService.js";

export const generateTrip = async (req, res) => {
  try {
    const {
      from,
      destination,
      budget,
      travelers,
      travelStyle,
      departure,
      returnDate,
    } = req.body;

    const prompt = `
Generate a travel itinerary.

Return ONLY valid JSON.

User Details:

From: ${from}
Destination: ${destination}
Budget: ${budget}
Travelers: ${travelers}
Travel Style: ${travelStyle}
Departure: ${departure}
Return: ${returnDate}

Return:

{
"summary":{},
"days":[],
"hotels":[],
"restaurants":[],
"packing":[],
"tips":[]
}
`;

    res.json({
  result: {
    summary: {
      destination,
      budget,
      travelers,
      travelStyle,
      duration: "5 Days / 4 Nights"
    },
    days: [
      {
        day: 1,
        title: "Arrival",
        activities: [
          "Flight from " + from,
          "Hotel Check-in",
          "Evening at Baga Beach",
          "Dinner at Fisherman's Wharf"
        ]
      },
      {
        day: 2,
        title: "North Goa",
        activities: [
          "Fort Aguada",
          "Calangute Beach",
          "Water Sports",
          "Night Market"
        ]
      },
      {
        day: 3,
        title: "South Goa",
        activities: [
          "Colva Beach",
          "Dudhsagar Falls",
          "Sunset Cruise"
        ]
      }
    ],
    hotels: [
      "Taj Resort Goa",
      "Holiday Inn Goa",
      "Fairfield by Marriott"
    ],
    restaurants: [
      "Fisherman's Wharf",
      "Vinayak Family Restaurant",
      "Thalassa"
    ],
    packing: [
      "Passport / ID",
      "Sunscreen",
      "Power Bank",
      "Beach Wear"
    ],
    tips: [
      "Carry cash",
      "Book attractions early",
      "Stay hydrated"
    ]
  }
});
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};