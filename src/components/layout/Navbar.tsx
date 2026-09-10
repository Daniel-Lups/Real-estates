import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Agents', path: '/agents' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-baseline space-x-1" onClick={closeMenu}>
          <span className="font-heading text-2xl font-bold tracking-tight text-brand-900">PrimeHomes</span>
          <span className="text-sm font-medium text-gray-500">Minna</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-900 ${
                  isActive ? 'text-brand-900' : 'text-gray-500'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Button asChild>
            <Link to="/schedule-inspection">Schedule Inspection</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden text-gray-500 hover:text-brand-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-4 pb-6 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? 'bg-gray-50 text-brand-900' : 'text-gray-500 hover:bg-gray-50 hover:text-brand-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mt-4 px-3">
              <Button asChild className="w-full">
                <Link to="/schedule-inspection" onClick={closeMenu}>Schedule Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
