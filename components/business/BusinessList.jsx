import BusinessCard from "./BusinessCard";

export default function BusinessList({ businesses = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
      {businesses.length === 0 && (
        <div className="col-span-full text-center py-12 text-gray-500">
          No businesses found
        </div>
      )}
    </div>
  );
}
