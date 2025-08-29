export default function TenantCard({ tenant }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-64 hover:scale-105 transform transition duration-300">
      <h3 className="font-bold text-lg">{tenant.name}</h3>
      <p className="text-gray-600">Room: {tenant.room}</p>
      <p className="text-gray-600">Rent Paid: ₹{tenant.rent}</p>
      <button className="mt-4 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
        Edit
      </button>
    </div>
  );
}
