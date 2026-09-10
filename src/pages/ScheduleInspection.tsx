import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, CalendarDays } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export function ScheduleInspection() {
  const [searchParams] = useSearchParams();
  const initialProperty = searchParams.get('property') || '';
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-brand-50 min-h-screen py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl mb-4">Schedule a Property Inspection</h1>
          <p className="text-lg text-gray-600">
            Choose a convenient time to view your desired properties. We'll confirm your appointment shortly.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-10">
              <div className="h-24 w-24 bg-brand-50 text-brand-900 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-brand-900 mb-4">Inspection Request Received! 🎉</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Thank you for your interest. A PrimeHomes consultant will contact you shortly to confirm your inspection schedule.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link to="/properties">Browse More Properties</Link>
                </Button>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Book Another
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-gray-100 pb-6 mb-6">
                <h3 className="text-lg font-bold text-brand-900 mb-4 flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" /> Personal Details
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-gray-900">Full Name</label>
                    <Input id="fullName" required placeholder="E.g. Musa Ibrahim" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900">Phone Number</label>
                    <Input id="phone" type="tel" required placeholder="+234..." />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900">Email Address</label>
                    <Input id="email" type="email" required placeholder="your.email@example.com" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-bold text-brand-900 mb-4">Inspection Details</h3>
                
                <div className="space-y-2">
                  <label htmlFor="property" className="text-sm font-medium text-gray-900">Property of Interest</label>
                  <Input 
                    id="property" 
                    defaultValue={initialProperty} 
                    placeholder="E.g. Luxury 4-Bedroom Duplex in GRA" 
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave blank if you want a general consultation.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-gray-900">Preferred Date</label>
                    <Input id="date" type="date" required min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium text-gray-900">Preferred Time</label>
                    <Input id="time" type="time" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="visitors" className="text-sm font-medium text-gray-900">Number of Visitors</label>
                  <select id="visitors" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-900">
                    <option value="1">Just Me (1)</option>
                    <option value="2">2 People</option>
                    <option value="3-5">3 - 5 People</option>
                    <option value="6+">More than 5</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900">Additional Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-900"
                    placeholder="Any specific requirements or questions before the inspection?"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full text-lg h-14">
                  Request Inspection
                </Button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
