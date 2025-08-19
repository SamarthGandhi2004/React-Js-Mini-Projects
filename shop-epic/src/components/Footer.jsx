import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <footer className="border-t bg-white mt-12">
      <div className="container mx-auto px-4 py-8 text-slate-600 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">ShopEpic</h4>
          <p className="text-sm mt-2">A beautiful UI kit made with shadcn and Tailwind — navigation only.</p>
        </div>
        <div>
          <h5 className="font-medium">Company</h5>
          <ul className="mt-2 text-sm space-y-1">
            <li><Link to="/about" className="text-slate-600">About</Link></li>
            <li><Link to="/careers" className="text-slate-600">Careers</Link></li>
            <li><Link to="/contact" className="text-slate-600">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Support</h5>
          <ul className="mt-2 text-sm space-y-1">
            <li><Link to="/help" className="text-slate-600">Help Center</Link></li>
            <li><Link to="/shipping" className="text-slate-600">Shipping</Link></li>
            <li><Link to="/returns" className="text-slate-600">Returns</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} ShopEpic — UI Prototype</div>
    </footer>
  )
}

export default Footer