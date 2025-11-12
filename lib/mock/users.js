// Mock user data for prototype
export const users = [
  {
    id: "1",
    name: "Budi Santoso",
    email: "budi@example.com",
    avatar: null,
    bio: "Entrepreneur and business consultant based in Jakarta.",
    location: "Jakarta",
    joinedDate: "2024-01-15",
    businessesOwned: ["1"],
    connections: ["2", "3"],
  },
  {
    id: "2",
    name: "Siti Rahmawati",
    email: "siti@example.com",
    avatar: null,
    bio: "Coffee enthusiast and cafe owner.",
    location: "Bandung",
    joinedDate: "2024-02-20",
    businessesOwned: ["3"],
    connections: ["1", "4"],
  },
  {
    id: "3",
    name: "Ahmad Wijaya",
    email: "ahmad@example.com",
    avatar: null,
    bio: "Tech professional with 15 years of experience in software development.",
    location: "Jakarta",
    joinedDate: "2024-03-10",
    businessesOwned: ["2"],
    connections: ["1", "5"],
  },
  {
    id: "4",
    name: "Dewi Lestari",
    email: "dewi@example.com",
    avatar: null,
    bio: "Book lover and independent bookstore owner.",
    location: "Yogyakarta",
    joinedDate: "2024-04-05",
    businessesOwned: ["4"],
    connections: ["2"],
  },
  {
    id: "5",
    name: "Rina Kusuma",
    email: "rina@example.com",
    avatar: null,
    bio: "Beauty specialist and salon owner.",
    location: "Surabaya",
    joinedDate: "2024-05-12",
    businessesOwned: ["5"],
    connections: ["3"],
  },
];

export function getUserById(id) {
  return users.find((u) => u.id === id);
}

export function getUserByEmail(email) {
  return users.find((u) => u.email === email);
}

// Mock current user (for prototype - simulating logged in state)
export const currentUser = users[0];
