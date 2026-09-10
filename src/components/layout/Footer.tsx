import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-baseline space-x-1">
              <span className="font-heading text-2xl font-bold tracking-tight text-white">PrimeHomes</span>
              <span className="text-sm font-medium text-gray-400">Minna</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              "Find a Place You'll Love to Call Home."
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/properties" className="hover:text-white">Properties</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/agents" className="hover:text-white">Agents</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/schedule-inspection" className="hover:text-white">Schedule Inspection</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Property Types</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/properties?type=Sale" className="hover:text-white">For Sale</Link></li>
              <li><Link to="/properties?type=Rent" className="hover:text-white">For Rent</Link></li>
              <li><Link to="/properties?type=Land" className="hover:text-white">Land</Link></li>
              <li><Link to="/properties?type=Commercial" className="hover:text-white">Commercial</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-gray-400" />
                <span>Minna, Niger State, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-gray-400" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-gray-400" />
                <a href="mailto:hello@primehomesminna.com" className="hover:text-white">
                  hello@primehomesminna.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PrimeHomes Minna. Demo website.</p>
        </div>
      </div>
    </footer>
  );
}
