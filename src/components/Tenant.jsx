import React from "react";
import { motion } from "framer-motion";

const tenants = [
  { name: "John Doe", room: "101", rent: "₹5000" },
  { name: "Jane Smith", room: "102", rent: "₹5500" },
];

const Tenant = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {tenants.map((t, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold">{t.name}</h3>
          <p>Room: {t.room}</p>
          <p>Rent: {t.rent}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Tenant;
