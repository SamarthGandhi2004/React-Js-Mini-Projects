import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from  "../assets/"
export default function Navbar(){
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const [lastY, setLastY] = useState(0);

  useEffect(()=>{
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 100); // hide on scroll down
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/job-seekers", label: "Job Seekers" },
    { to: "/employers", label: "Employers" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed w-full z-40 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <nav className="backdrop-blur-md bg-white/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold">ERX</div>
            <div>
              <div className="font-semibold text-brand-700">EuroRecruitX</div>
              <div className="text-xs text-neutral-500 leading-3">Connecting Talent with Opportunities</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className={`text-sm ${location.pathname === l.to ? "text-brand-500 font-semibold" : "text-neutral-700"} hover:text-brand-500`}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="ml-3 bg-brand-500 text-white px-4 py-2 rounded-lg text-sm">Apply Now</Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Open menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden px-6 pb-6">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="block py-2 text-neutral-700">{l.label}</Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
