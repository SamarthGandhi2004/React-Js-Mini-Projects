import React from "react";
import { motion } from "framer-motion";

const cards = [
  { title: "Licensed in Latvia", text: "Reg. No. 40103178617" },
  { title: "Skilled Trades", text: "Blue-Collar & Skilled Trades Recruitment" },
  { title: "End-to-End Support", text: "Recruitment, Work Permits & Staffing" },
  { title: "Offices in Europe & India", text: "Local presence for smoother onboarding" },
];

export default function Highlights(){
  return (
    <section className="py-20" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((c,i)=>(
            <motion.div key={c.title} initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:i*0.08}} className="p-6 rounded-2xl glass shadow">
              <div className="text-sm text-accent-500 font-semibold">✅</div>
              <div className="mt-3 font-semibold text-lg text-brand-700">{c.title}</div>
              <div className="text-sm mt-2 text-neutral-600">{c.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
