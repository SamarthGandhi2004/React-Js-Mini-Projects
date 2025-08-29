import React from "react";
import ContactForm from "../sections/ContactForm";

export default function ContactPage(){
  return (
    <section className="pt-28 py-16" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-brand-700">Contact Us</h2>
          <p className="mt-3 text-neutral-600">EuroRecruitX – SIA OBEREKS<br/>Āgenskalns iela 33-12, Riga, Latvia, LV-1046<br/>+371 22464142<br/>info@eurorecruitx.com</p>
          <div className="mt-6">
            {/* placeholder map */}
            <div className="h-56 bg-neutral-50 rounded-lg flex items-center justify-center text-sm">Map Placeholder</div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
