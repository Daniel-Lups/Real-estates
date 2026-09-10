import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, handle API submission here
  };

  return (
    <div className="bg-brand-50 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl mb-4">Let's Find Your Next Property</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about a property or need help selling yours? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="bg-brand-900 rounded-2xl p-8 lg:p-12 text-white shadow-xl">
            <h2 className="font-heading text-3xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-100 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                  <p className="text-brand-100 leading-relaxed">
                    PrimeHomes Minna<br />
                    Minna, Niger State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-brand-100 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                  <p className="text-brand-100">+234 800 000 0000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-brand-100 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                  <a href="mailto:hello@primehomesminna.com" className="text-brand-100 hover:text-white transition-colors">
                    hello@primehomesminna.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-brand-100 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                  <ul className="text-brand-100 space-y-1">
                    <li>Monday – Friday: 8:00 AM – 5:00 PM</li>
                    <li>Saturday: 9:00 AM – 2:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="h-20 w-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-8">Thank you for contacting PrimeHomes. A member of our team will get back to you shortly.</p>
                <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900">Name</label>
                    <Input id="name" required placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900">Phone</label>
                    <Input id="phone" type="tel" required placeholder="Your phone number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900">Email</label>
                  <Input id="email" type="email" required placeholder="Your email address" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-900">Subject</label>
                  <Input id="subject" required placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900">Message</label>
                  <textarea 
                    id="message" 
                    required 
                    rows={5}
                    className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-900"
                    placeholder="Provide details about your inquiry..."
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">Send Enquiry</Button>
              </form>
            )}
          </div>

        </div>

        {/* Map */}
        <div className="mt-16 bg-gray-200 rounded-2xl h-[400px] flex flex-col items-center justify-center relative overflow-hidden border border-gray-300">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.7483749439!2d6.46747201738722!3d9.608316278854467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c7104b2b28c89%3A0xb3cf51d8b67b1409!2sMinna%2C%20Niger!5e0!3m2!1sen!2sng!4v1716380587848!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
