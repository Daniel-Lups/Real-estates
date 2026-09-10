import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <div className="bg-brand-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-brand-900 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">About PrimeHomes</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            At PrimeHomes Minna, we believe finding the right property should be straightforward, transparent and stress-free.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200" 
              alt="PrimeHomes Office" 
              className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-900 mb-6">Our Goal</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our goal is to connect people with properties that match their needs, lifestyle and investment goals. We combine local market knowledge with a commitment to exceptional service to ensure every client finds exactly what they are looking for.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-brand-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To make property discovery and real estate transactions simpler through reliable information, local knowledge and personalized service.
                </p>
              </div>
              
              <div>
                <h3 className="font-heading text-2xl font-bold text-brand-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become one of the most trusted property discovery platforms and agencies in Niger State.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h2 className="text-center font-heading text-3xl font-bold text-brand-900 mb-12">Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Integrity', 'Transparency', 'Professionalism', 'Customer Focus', 'Local Expertise', 'Excellence'].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-900 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-900 mb-2">{value}</h3>
                  <p className="text-gray-500 text-sm">We uphold the highest standards of {value.toLowerCase()} in all our dealings.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
