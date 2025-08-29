import React from "react";
import { motion } from "framer-motion";

const employerServices = [
  "Recruitment of skilled & semi-skilled workers",
  "Temporary staffing (Latvia-based postings across EU)",
  "Workforce outsourcing & HR compliance",
  "Payroll & administrative support"
];

const seekerServices = [
  "Access to genuine job opportunities in Europe",
  "Transparent recruitment process with no hidden costs",
  "Assistance with work permits & visa guidance",
  "Ongoing support after placement"
];

export default function Services(){
  return (
    <section className="py-20" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} className="p-6 rounded-2xl glass shadow">
          <h3 className="text-2xl font-semibold text-brand-700">For Employers</h3>
          <ul className="mt-4 list-disc ml-5 text-neutral-600">
            {employerServices.map(s=> <li key={s} className="py-1">{s}</li> )}
          </ul>
        </motion.div>

        <motion.div initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1}} className="p-6 rounded-2xl glass shadow">
          <h3 className="text-2xl font-semibold text-brand-700">For Job Seekers</h3>
          <ul className="mt-4 list-disc ml-5 text-neutral-600">
            {seekerServices.map(s=> <li key={s} className="py-1">{s}</li> )}
          </ul>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <h4 className="font-semibold text-lg">Industries We Serve</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {["Manufacturing & Engineering","Construction & Civil Works","Logistics & Warehousing","Hospitality & Services","Agriculture & Food Processing"].map(i=>(
            <div key={i} className="p-3 rounded-lg border text-sm text-neutral-700">{i}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
