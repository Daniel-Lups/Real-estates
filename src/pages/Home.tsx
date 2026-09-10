import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, CheckCircle, Map, Shield, Users } from 'lucide-react';
import { properties, locations } from '../data/mockData';
import { PropertyCard } from '../components/properties/PropertyCard';
import { Button } from '../components/ui/button';

export function Home() {
  const navigate = useNavigate();
  const featuredProperties = properties.filter(p => p.featured).slice(0, 6);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    
    if (formData.get('type') && formData.get('type') !== 'All') params.append('type', formData.get('type') as string);
    if (formData.get('location') && formData.get('location') !== 'All') params.append('location', formData.get('location') as string);
    if (formData.get('category') && formData.get('category') !== 'All') params.append('category', formData.get('category') as string);
    
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] flex-col items-center justify-center pt-20 pb-32 lg:min-h-[700px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern home" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-white drop-shadow-md sm:text-5xl lg:text-7xl">
            FIND A PLACE YOU'LL LOVE TO CALL HOME.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-100 sm:text-xl drop-shadow">
            Discover carefully selected homes, apartments, land and commercial properties across Minna and beyond. Search by location, price, property type and more.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-white text-brand-900 hover:bg-gray-100">
              <Link to="/properties">Explore Properties</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/20 hover:text-white">
              <Link to="/schedule-inspection">Schedule an Inspection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Search Interface Container */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-24 rounded-2xl bg-white p-6 shadow-xl lg:p-8">
          <form onSubmit={handleSearch} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 items-end">
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Listing Type</label>
              <select name="type" className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-brand-900 focus:outline-none focus:ring-1 focus:ring-brand-900">
                <option value="All">Any Status</option>
                <option value="For Sale">Buy</option>
                <option value="For Rent">Rent</option>
              </select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <select name="location" className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-brand-900 focus:outline-none focus:ring-1 focus:ring-brand-900">
                <option value="All">Any Location</option>
                {locations.map(loc => (
                  <option key={loc.name} value={loc.name}>{loc.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Property Type</label>
              <select name="category" className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-brand-900 focus:outline-none focus:ring-1 focus:ring-brand-900">
                <option value="All">Any Type</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Duplex">Duplex</option>
                <option value="Land">Land</option>
                <option value="Commercial">Commercial/Office</option>
              </select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Price Range</label>
              <select name="price" className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-brand-900 focus:outline-none focus:ring-1 focus:ring-brand-900">
                <option value="All">Any Price</option>
                <option value="under_2m">Under ₦2M</option>
                <option value="2m_10m">₦2M – ₦10M</option>
                <option value="10m_50m">₦10M – ₦50M</option>
                <option value="over_50m">₦50M+</option>
              </select>
            </div>
            <Button type="submit" className="h-12 w-full">
              <Search className="mr-2 h-4 w-4" /> Search Properties
            </Button>
          </form>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">Featured Properties</h2>
              <p className="mt-4 text-lg text-gray-600">Explore some of our most popular properties currently available.</p>
            </div>
            <Button asChild variant="outline" className="mt-6 md:mt-0">
              <Link to="/properties">View All Properties</Link>
            </Button>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Explore Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Homes for Sale', desc: 'Find your next permanent home.', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800', link: '/properties?type=For+Sale&category=House' },
              { title: 'Apartments for Rent', desc: 'Comfortable spaces for individuals and families.', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800', link: '/properties?type=For+Rent&category=Apartment' },
              { title: 'Land & Plots', desc: 'Find strategically located land for your next project.', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800', link: '/properties?category=Land' },
              { title: 'Commercial Properties', desc: 'Offices, shops and spaces for growing businesses.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', link: '/properties?category=Commercial' },
            ].map((cat, i) => (
              <Link key={i} to={cat.link} className="group relative block h-80 overflow-hidden rounded-xl">
                <img src={cat.img} alt={cat.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 p-6">
                  <h3 className="font-heading text-xl font-bold text-white">{cat.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">Real Estate Made Simple</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We offer a premium, straightforward service to help you secure the best properties in Minna.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: 'Verified Listings', desc: 'We focus on providing clear and detailed property information.' },
              { icon: Map, title: 'Local Expertise', desc: 'Our knowledge of Minna\'s neighbourhoods helps clients make better decisions.' },
              { icon: CheckCircle, title: 'Transparent Process', desc: 'Clear property information and straightforward communication.' },
              { icon: Users, title: 'Personal Assistance', desc: 'From your first enquiry to inspection, we\'re here to guide you.' },
            ].map((feat, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-900 mb-6">
                  <feat.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-900 mb-3">{feat.title}</h3>
                <p className="text-gray-600">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Find Properties Across Minna
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
            {locations.map((loc) => (
              <Link 
                key={loc.name} 
                to={`/properties?location=${loc.name}`}
                className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-xl bg-gray-900"
              >
                <img src={loc.image} alt={loc.name} className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <div className="relative p-4 sm:p-6">
                  <h3 className="font-heading text-lg font-bold text-white sm:text-xl">{loc.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">{loc.count} Properties</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-900 py-24 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">Thinking About Property Investment?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether you're buying your first property or expanding your portfolio, our team can help you identify opportunities that match your goals.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-white text-brand-900 hover:bg-gray-100">
              <Link to="/properties">Explore Investment Properties</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-gray-500 text-white hover:bg-gray-800 hover:text-white">
              <Link to="/contact">Talk to an Agent</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
