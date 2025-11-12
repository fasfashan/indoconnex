// Mock business data for prototype
export const businesses = [
  {
    id: "1",
    name: "Warung Makan Sederhana",
    category: "Restaurant",
    description:
      "Traditional Indonesian food with authentic flavors. Family-owned since 1995.",
    location: "Jakarta Selatan",
    email: "contact@warungsederhana.com",
    phone: "+62 21 1234 5678",
    website: "https://warungsederhana.com",
    established: 1995,
    verified: true,
    claimed: true,
  },
  {
    id: "2",
    name: "Tech Solutions Indonesia",
    category: "IT Services",
    description:
      "Professional IT consulting and software development services for businesses.",
    location: "Jakarta Pusat",
    email: "info@techsolutions.id",
    phone: "+62 21 8765 4321",
    website: "https://techsolutions.id",
    established: 2010,
    verified: true,
    claimed: false,
  },
  {
    id: "3",
    name: "Kopi Kita",
    category: "Cafe",
    description:
      "Modern coffee shop with locally sourced beans. Cozy workspace and fast WiFi.",
    location: "Bandung",
    email: "hello@kopikita.com",
    phone: "+62 22 9876 5432",
    website: "https://kopikita.com",
    established: 2018,
    verified: false,
    claimed: true,
  },
  {
    id: "4",
    name: "Toko Buku Literasi",
    category: "Retail",
    description:
      "Independent bookstore specializing in Indonesian literature and international titles.",
    location: "Yogyakarta",
    email: "literasi@tokobuku.com",
    phone: "+62 274 1111 2222",
    website: null,
    established: 2015,
    verified: true,
    claimed: false,
  },
  {
    id: "5",
    name: "Salon Cantik",
    category: "Beauty Services",
    description:
      "Full-service salon offering hair, nails, and beauty treatments.",
    location: "Surabaya",
    email: "info@saloncantik.com",
    phone: "+62 31 3333 4444",
    website: "https://saloncantik.com",
    established: 2012,
    verified: false,
    claimed: true,
  },
];

export function getBusinessById(id) {
  return businesses.find((b) => b.id === id);
}

export function getBusinessesByCategory(category) {
  return businesses.filter((b) => b.category === category);
}

export const categories = [
  "Restaurant",
  "IT Services",
  "Cafe",
  "Retail",
  "Beauty Services",
  "Healthcare",
  "Education",
  "Finance",
  "Construction",
  "Other",
];
