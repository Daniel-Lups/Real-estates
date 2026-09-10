import React from 'react';
import { agents } from '../data/mockData';
import { WhatsAppButton } from '../components/shared/WhatsAppButton';
import { Mail, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function Agents() {
  return (
    <div className="bg-brand-50 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl mb-4">Meet Our Agents</h1>
          <p className="text-lg text-gray-600">
            Our experienced team of property consultants is dedicated to helping you find the perfect property in Minna.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {agents.map(agent => (
            <div key={agent.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="font-heading text-2xl font-bold text-brand-900">{agent.name}</h2>
                <p className="text-brand-900 font-medium mb-4">{agent.role}</p>
                <div className="bg-brand-50 px-4 py-3 rounded-lg mb-6 border border-brand-100">
                  <p className="text-sm text-gray-600"><span className="font-semibold block mb-1">Specialty:</span> {agent.specialty}</p>
                </div>
                
                <div className="mt-auto space-y-3">
                  <WhatsAppButton 
                    message={`Hello ${agent.name}, I would like to speak with you regarding real estate services.`}
                    className="w-full"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" /> Call
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/contact">
                        <Mail className="mr-2 h-4 w-4" /> Email
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
