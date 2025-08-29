import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  "Submit your CV or Application",
  "Screening & Interview",
  "Job Offer & Contract Signing",
  "Work Permit & Visa Support",
  "Relocation & Employment"
];

export default function JobSeekers(){
  return (
    <section className="py-16 bg-white" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-brand-700">Build Your Career in Europe</h3>
        <p className="mt-3 text-neutral-600 max-w-2xl">EuroRecruitX offers Indian candidates a gateway to international opportunities. With a transparent recruitment process, we ensure your skills find the right place in Europe’s growing industries.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s,i)=>(
            <motion.div key={s} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="p-4 rounded-lg border text-sm text-neutral-700">
              <div className="font-semibold">Step {i+1}</div>
              <div className="mt-2">{s}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-lg bg-accent-500 text-white">Start your journey today – Apply Now!</Link>
        </div>
      </div>
    </section>
  );
}
