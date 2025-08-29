import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="bg-brand-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-xl font-semibold">EuroRecruitX</div>
          <div className="text-sm text-white/80 mt-2">Connecting Talent with Opportunities Across Europe</div>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <div className="mt-2 space-y-1 text-sm">
            <Link to="/" className="block">Home</Link>
            <Link to="/about" className="block">About</Link>
            <Link to="/services" className="block">Services</Link>
            <Link to="/contact" className="block">Contact</Link>
          </div>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-sm">
            📍 Āgenskalns iela 33-12, Riga, Latvia, LV-1046<br/>
            📞 +371 22464142<br/>
            ✉️ info@eurorecruitx.com
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-white/60 mt-6">© {new Date().getFullYear()} EuroRecruitX — SIA OBEREKS. All rights reserved.</div>
    </footer>
  );
}
