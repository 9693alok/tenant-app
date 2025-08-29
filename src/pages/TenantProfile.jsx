import React from "react";

export default function TenantProfile({ name, dob }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-1">Date of Birth: {dob}</p>
    </div>
  );
}
