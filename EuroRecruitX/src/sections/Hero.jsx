import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero(){
  return (
    <section className="relative min-h-[70vh] flex items-center" data-scroll-section>
      <div className="absolute inset-0 -z-10">
        {/* subtle animated gradient could be added via canvas or GSAP; placeholder */}
        <div className="h-full w-full" style={{ background: 'linear-gradient(135deg, rgba(58,134,255,0.08), rgba(34,197,94,0.04))' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold text-brand-700">
            Connecting Talent with Opportunities Across Europe
          </motion.h1>
          <motion.p initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.12}} className="mt-6 text-lg text-neutral-700 max-w-2xl">
            At EuroRecruitX, we specialize in bridging the gap between skilled workers from India and reputable employers across Europe. As a trusted staffing and recruitment partner, we provide ethical, transparent, and efficient workforce solutions tailored to your needs.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <Link to="/employers" className="inline-flex items-center px-5 py-3 rounded-lg bg-brand-500 text-white font-semibold shadow">
              Employers → Find Skilled Workers Today
            </Link>
            <Link to="/job-seekers" className="inline-flex items-center px-5 py-3 rounded-lg border border-neutral-200 bg-white">
              Job Seekers → Apply for European Job Opportunities
            </Link>
          </div>

          <div className="mt-8 text-sm text-neutral-500">
            ✅ Licensed Company in Latvia (Reg. No. 40103178617) · Expertise in Blue-Collar & Skilled Trades Recruitment · End-to-End Support: Recruitment, Work Permits & Staffing · Offices in Europe & India
          </div>
        </div>

        <motion.div initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.6}} className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-xl glass p-6">
            {/* placeholder illustration; you can swap with hero svg */}
            <div className="h-64 w-full bg-gradient-to-br from-white/80 to-white/60 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <div className="text-xl font-semibold text-brand-700">Premium Recruitment Services</div>
                <div className="text-sm text-neutral-600 mt-2">Skilled candidates, verified employers, transparent process.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
