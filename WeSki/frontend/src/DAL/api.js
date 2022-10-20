const destinations = [
  {
    id: 1,
    name: "Val Thorens",
  },
  {
    id: 2,
    name: "Courchevel",
  },
  {
    id: 3,
    name: "Tignes",
  },
  {
    id: 4,
    name: "La Plagne",
  },
  {
    id: 5,
    name: "Chamonix",
  },
  {
    id: 6,
    name: "Les Menuires",
  },
  {
    id: 7,
    name: "L'alpes D'huez",
  },
  {
    id: 8,
    name: "Les Deux Alpes",
  },
];

async function searchHotels(data) {
  const response = await fetch("http://localhost:5000/api/hotels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export { destinations, searchHotels };
