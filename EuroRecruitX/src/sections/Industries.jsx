import React from "react";
import { motion } from "framer-motion";

export default function Industries(){
  const tiles = ["Manufacturing & Engineering","Construction & Civil Works","Logistics & Warehousing","Hospitality & Services","Agriculture & Food Processing"];
  return (
    <section className="py-16" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-brand-700">Industries We Serve</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {tiles.map((t,i)=>(
            <motion.div key={t} whileHover={{y:-6}} transition={{type:"spring"}} className="p-6 rounded-2xl shadow glass">
              <div className="font-semibold">{t}</div>
              <div className="text-sm text-neutral-600 mt-2">We provide experienced workers suitable for {t.toLowerCase()} roles across Europe.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
