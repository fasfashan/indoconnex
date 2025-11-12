export default function ClaimBusinessPage({ params }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Claim Business</h1>
      {/* BusinessClaimForm component will go here */}
      <div className="bg-white p-6 rounded border border-gray-300">
        <p className="text-gray-500">Business ID: {params.businessId}</p>
        <p className="text-gray-500 mt-2">Claim form placeholder</p>
      </div>
    </div>
  );
}
