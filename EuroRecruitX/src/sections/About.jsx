import React from "react";

export default function About({ full=false }){
  return (
    <section className={`py-20 ${full ? 'min-h-[60vh]' : ''}`} data-scroll-section>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-brand-700">Who We Are</h2>
          <p className="mt-4 text-neutral-700">EuroRecruitX, powered by SIA OBEREKS, is a Latvia-based staffing and recruitment agency committed to helping European employers find reliable workers while supporting Indian candidates in building international careers.</p>

          <h3 className="mt-6 font-semibold">Our Mission</h3>
          <p className="text-neutral-600">To deliver ethical, transparent, and professional recruitment services that benefit both employers and job seekers.</p>

          <h3 className="mt-6 font-semibold">Our Vision</h3>
          <p className="text-neutral-600">To become Europe’s trusted partner for international workforce solutions, setting a benchmark for quality, compliance, and integrity.</p>

          <div className="mt-6">
            <h4 className="font-semibold">Why Choose Us</h4>
            <ul className="mt-3 list-disc ml-5 text-neutral-600">
              <li>Strong presence in Europe & India</li>
              <li>Transparent pricing and processes</li>
              <li>Compliance with EU recruitment laws</li>
              <li>Wide network of skilled candidates</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-6">
            <div className="h-64 w-full bg-neutral-50 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-lg">SIA OBEREKS — Latvia</div>
                <div className="text-sm text-neutral-600 mt-2">Licensed recruitment operations with local offices in Europe & India.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
