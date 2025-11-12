export default function BusinessCard({ business }) {
  return (
    <a href={`/business/${business.id}`} className="block">
      <div className="bg-white p-4 rounded border border-gray-300 hover:border-gray-400 transition-colors">
        <h3 className="font-bold text-lg mb-2">{business.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{business.category}</p>
        <p className="text-sm text-gray-500 line-clamp-2">
          {business.description}
        </p>
        <div className="mt-3 text-xs text-gray-400">{business.location}</div>
      </div>
    </a>
  );
}
