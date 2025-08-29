import React from "react";
import { motion } from "framer-motion";

const process = [
  "Share Your Requirements",
  "Candidate Shortlisting & Screening",
  "Interview & Selection",
  "Documentation & Legal Compliance",
  "Deployment & Ongoing Support"
];

export default function Employers(){
  return (
    <section className="py-16" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-brand-700">Hire Skilled Workers You Can Trust</h3>
        <p className="mt-3 text-neutral-600">We understand the workforce challenges in Europe. That’s why EuroRecruitX delivers reliable staffing solutions tailored to your industry needs.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
          {process.map((p,i)=>(
            <motion.div whileHover={{scale:1.02}} key={p} className="p-4 rounded-lg border text-sm">
              <div className="text-brand-500 font-semibold">Step {i+1}</div>
              <div className="mt-2">{p}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
