export default function BusinessDetailPage({ params }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Business Detail</h1>
        <a
          href={`/business/${params.businessId}/claim`}
          className="px-4 py-2 border border-gray-300 rounded"
        >
          Claim this Business
        </a>
      </div>
      <div className="bg-white p-6 rounded border border-gray-300">
        <p className="text-gray-500">Business ID: {params.businessId}</p>
        <p className="text-gray-500 mt-2">Business details will appear here</p>
      </div>
    </div>
  );
}
