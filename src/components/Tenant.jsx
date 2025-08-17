import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, PlusCircle, FileDown, Share2 } from "lucide-react";

const Tenant = () => {
  const [tenants, setTenants] = useState([
    {
      id: 1,
      name: "Alok Singh",
      room: "101",
      doj: "2023-06-12",
      rentHistory: [
        { month: "July 2025", amount: "₹5000", status: "Paid" },
        { month: "June 2025", amount: "₹5000", status: "Paid" },
      ],
    },
    {
      id: 2,
      name: "Rohit Verma",
      room: "102",
      doj: "2024-02-01",
      rentHistory: [
        { month: "July 2025", amount: "₹4500", status: "Pending" },
        { month: "June 2025", amount: "₹4500", status: "Paid" },
      ],
    },
  ]);

  const handleDelete = (id) => {
    setTenants(tenants.filter((t) => t.id !== id));
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
      <motion.h1
        className="text-3xl font-bold text-center mb-8 text-indigo-700"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Tenant Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tenants.map((tenant, index) => (
          <motion.div
            key={tenant.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {tenant.name}
                  </h2>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="rounded-full"
                      onClick={() => handleDelete(tenant.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-gray-600 mt-2">
                  Room: <span className="font-medium">{tenant.room}</span>
                </p>
                <p className="text-gray-600">
                  Date of Joining:{" "}
                  <span className="font-medium">{tenant.doj}</span>
                </p>

                <h3 className="mt-4 font-semibold text-indigo-600">
                  Rent History
                </h3>
                <ul className="mt-2 space-y-1">
                  {tenant.rentHistory.map((rent, i) => (
                    <li
                      key={i}
                      className="flex justify-between text-sm text-gray-700 bg-gray-100 rounded-lg px-3 py-1"
                    >
                      <span>{rent.month}</span>
                      <span
                        className={`font-medium ${
                          rent.status === "Paid"
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {rent.amount} ({rent.status})
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-3">
                  <Button className="flex items-center gap-2 rounded-xl">
                    <FileDown className="w-4 h-4" /> Export PDF
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 rounded-xl"
                  >
                    <Share2 className="w-4 h-4" /> Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Add Tenant Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: tenants.length * 0.2 }}
        >
          <Card className="flex items-center justify-center h-full shadow-lg rounded-2xl border-dashed border-2 border-indigo-400 cursor-pointer hover:bg-indigo-50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Button className="flex items-center gap-2 rounded-xl">
                <PlusCircle className="w-5 h-5" /> Add Tenant
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Tenant;
