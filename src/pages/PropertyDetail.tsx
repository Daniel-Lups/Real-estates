import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties, agents } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { WhatsAppButton } from '../components/shared/WhatsAppButton';
import { Bed, Bath, Square, Car, MapPin, Phone, CheckCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';

export function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!property) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading text-3xl font-bold text-brand-900">Property Not Found</h1>
        <p className="mt-4 text-gray-600">The property you are looking for does not exist or has been removed.</p>
        <Button asChild className="mt-8">
          <Link to="/properties">Back to Properties</Link>
        </Button>
      </div>
    );
  }

  const agent = agents.find(a => a.id === property.agentId);
  const isSale = property.status === 'For Sale';

  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency', currency: 'NGN', maximumFractionDigits: 0,
  }).format(property.price);

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="bg-brand-50 pb-20 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-900">Home</Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-brand-900">Properties</Link>
          <span>/</span>
          <span className="truncate text-gray-900">{property.title}</span>
        </div>

        {/* Gallery */}
        <div className="mb-10 grid gap-4 lg:grid-cols-3">
          <div 
            className="relative col-span-2 cursor-pointer overflow-hidden rounded-2xl bg-gray-200 lg:h-[500px]"
            onClick={() => setIsLightboxOpen(true)}
          >
            <img src={property.images[0]} alt="Main" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            <div className="absolute left-4 top-4 flex gap-2">
              <Badge variant={isSale ? "sale" : "rent"} className="px-4 py-1.5 text-sm uppercase tracking-wider shadow-md">{property.status}</Badge>
            </div>
            <div className="absolute bottom-4 right-4 rounded-md bg-black/70 px-3 py-1 text-sm text-white backdrop-blur-md">
              1 / {property.images.length}
            </div>
          </div>
          <div className="hidden grid-rows-2 gap-4 lg:grid">
            {property.images.slice(1, 3).map((img, idx) => (
              <div 
                key={idx} 
                className="relative cursor-pointer overflow-hidden rounded-2xl bg-gray-200"
                onClick={() => { setActiveImageIndex(idx + 1); setIsLightboxOpen(true); }}
              >
                <img src={img} alt={`Gallery ${idx+1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                {idx === 1 && property.images.length > 3 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-xl font-medium text-white transition-colors hover:bg-black/60">
                    +{property.images.length - 3} Photos
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-3">
          
          {/* Main Details */}
          <div className="lg:col-span-2">
            <div className="mb-8 border-b border-gray-200 pb-8">
              <div className="flex items-center gap-2 text-brand-900 mb-3">
                <MapPin className="h-5 w-5" />
                <span className="text-lg font-medium">{property.location}</span>
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-5xl mb-4">
                {property.title}
              </h1>
              <div className="text-3xl font-bold text-brand-900">
                {formattedPrice} <span className="text-lg font-normal text-gray-500">{property.priceLabel}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {property.bedrooms && (
                <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                  <Bed className="mb-2 h-6 w-6 text-brand-900" />
                  <span className="text-xl font-bold text-brand-900">{property.bedrooms}</span>
                  <span className="text-sm text-gray-500">Bedrooms</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                  <Bath className="mb-2 h-6 w-6 text-brand-900" />
                  <span className="text-xl font-bold text-brand-900">{property.bathrooms}</span>
                  <span className="text-sm text-gray-500">Bathrooms</span>
                </div>
              )}
              {property.parking && (
                <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                  <Car className="mb-2 h-6 w-6 text-brand-900" />
                  <span className="text-xl font-bold text-brand-900">{property.parking}</span>
                  <span className="text-sm text-gray-500">Parking</span>
                </div>
              )}
              <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <Square className="mb-2 h-6 w-6 text-brand-900" />
                <span className="text-xl font-bold text-brand-900">{property.area || '-'}</span>
                <span className="text-sm text-gray-500">sqm</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-brand-900">Description</h2>
              <div className="prose prose-gray max-w-none text-gray-600">
                <p className="leading-relaxed">{property.description}</p>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-brand-900">Amenities & Features</h2>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {property.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar / Agent Info */}
          <div>
            <div className="sticky top-28 rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
              <h3 className="mb-6 font-heading text-xl font-bold text-brand-900">Interested in this property?</h3>
              
              {agent && (
                <div className="mb-6 flex items-center space-x-4 border-b border-gray-100 pb-6">
                  <img src={agent.image} alt={agent.name} className="h-16 w-16 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className="font-bold text-brand-900">{agent.name}</h4>
                    <p className="text-sm text-gray-500">{agent.role}</p>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <WhatsAppButton 
                  message={`Hello ${agent?.name || 'PrimeHomes'}, I am interested in the ${property.title} in ${property.location}. I would like to know more about the property and schedule an inspection.`}
                  className="w-full text-lg h-12" 
                />
                <Button variant="outline" className="w-full h-12 text-base">
                  <Phone className="mr-2 h-5 w-5" /> Call Agent
                </Button>
                <Button asChild variant="secondary" className="w-full h-12 text-base mt-2">
                  <Link to={`/schedule-inspection?property=${encodeURIComponent(property.title)}`}>
                    Schedule Inspection
                  </Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6">
          <button 
            className="absolute right-4 top-4 z-[110] rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white sm:right-8 sm:top-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          
          <button className="absolute left-4 z-[110] rounded-full p-3 text-white/70 hover:bg-white/10 hover:text-white sm:left-8" onClick={prevImage}>
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <div className="relative max-h-[85vh] w-full max-w-6xl">
            <img 
              src={property.images[activeImageIndex]} 
              alt="Lightbox view" 
              className="h-full w-full object-contain"
            />
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/70">
              {activeImageIndex + 1} / {property.images.length}
            </div>
          </div>

          <button className="absolute right-4 z-[110] rounded-full p-3 text-white/70 hover:bg-white/10 hover:text-white sm:right-8" onClick={nextImage}>
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  );
}
