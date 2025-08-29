import React from "react";
import TenantProfile from "./TenantProfile";

export default function TenantDashboard() {
  // Example tenant data
  const tenants = [
    { name: "John Doe", dob: "01 Jan 1990", room: 101, rentStatus: "Paid", lastPaid: "Aug 10, 2025" },
    { name: "Jane Smith", dob: "15 Feb 1992", room: 102, rentStatus: "Pending", lastPaid: "Jul 25, 2025" },
    { name: "Michael Lee", dob: "23 Mar 1988", room: 103, rentStatus: "Paid", lastPaid: "Aug 12, 2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-gradient opacity-30"></div>

      {/* Floating lights */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-white rounded-full absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random(),
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fadeIn">
          Welcome, Tenant!
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition animate-fadeIn">
            <h2 className="text-lg font-semibold text-gray-700">Total Rooms</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition animate-fadeIn delay-200">
            <h2 className="text-lg font-semibold text-gray-700">Rent Collected</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">₹75,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition animate-fadeIn delay-400">
            <h2 className="text-lg font-semibold text-gray-700">Pending Payments</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">₹12,000</p>
          </div>
        </div>

        {/* Tenant Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tenants.map((tenant, index) => (
            <TenantProfile
              key={index}
              name={tenant.name}
              dob={tenant.dob}
            />
          ))}
        </div>

        {/* Table of Tenants */}
        <div className="mt-10 bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn delay-600">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Tenant Name</th>
                <th className="px-4 py-2 text-left">Room No.</th>
                <th className="px-4 py-2 text-left">Rent Status</th>
                <th className="px-4 py-2 text-left">Last Paid</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{tenant.name}</td>
                  <td className="px-4 py-2">{tenant.room}</td>
                  <td className={`px-4 py-2 font-bold ${tenant.rentStatus === "Paid" ? "text-green-600" : "text-red-600"}`}>
                    {tenant.rentStatus}
                  </td>
                  <td className="px-4 py-2">{tenant.lastPaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
