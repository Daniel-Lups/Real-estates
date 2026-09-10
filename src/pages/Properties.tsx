import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties, locations } from '../data/mockData';
import { PropertyCard } from '../components/properties/PropertyCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Filter, X } from 'lucide-react';

export function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Form states based on URL params
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || 'All',
    category: searchParams.get('category') || 'All',
    location: searchParams.get('location') || 'All',
    beds: searchParams.get('beds') || 'Any',
    price: searchParams.get('price') || 'All',
    sort: searchParams.get('sort') || 'Newest'
  });

  useEffect(() => {
    // Sync state with URL if needed, but primarily drive UI from state and update URL on apply
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let result = [...properties];

    if (filters.type !== 'All') {
      result = result.filter(p => p.status === filters.type);
    }
    if (filters.category !== 'All') {
      result = result.filter(p => p.type === filters.category);
    }
    if (filters.location !== 'All') {
      result = result.filter(p => p.location.includes(filters.location));
    }
    if (filters.beds !== 'Any') {
      const minBeds = parseInt(filters.beds.replace('+', ''));
      result = result.filter(p => p.bedrooms && p.bedrooms >= minBeds);
    }
    if (filters.price !== 'All') {
      result = result.filter(p => {
        if (filters.price === 'under_2m') return p.price < 2000000;
        if (filters.price === '2m_10m') return p.price >= 2000000 && p.price <= 10000000;
        if (filters.price === '10m_50m') return p.price > 10000000 && p.price <= 50000000;
        if (filters.price === 'over_50m') return p.price > 50000000;
        return true;
      });
    }

    if (filters.sort === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    } // Newest keeps default order

    setFilteredProperties(result);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    
    // Update URL params
    const newParams = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, val]) => {
      if (val !== 'All' && val !== 'Any' && val !== 'Newest') {
        newParams.append(key, val);
      }
    });
    setSearchParams(newParams);
  };

  const resetFilters = () => {
    const defaultFilters = {
      type: 'All', category: 'All', location: 'All', beds: 'Any', price: 'All', sort: 'Newest'
    };
    setFilters(defaultFilters);
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="bg-brand-50 py-12 lg:py-16 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">Explore Properties</h1>
          <p className="mt-3 text-lg text-gray-600">Browse our collection of homes, land and commercial properties.</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button onClick={() => setIsMobileFiltersOpen(true)} className="w-full flex items-center justify-center gap-2">
              <Filter className="h-5 w-5" /> Filter Properties
            </Button>
          </div>

          {/* Sidebar Filters (Desktop + Mobile Drawer) */}
          <aside className={`fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm transition-opacity lg:static lg:block lg:w-72 lg:shrink-0 lg:bg-transparent lg:backdrop-blur-none ${isMobileFiltersOpen ? 'block' : 'hidden'}`}>
            <div className={`absolute right-0 top-0 h-full w-full max-w-xs bg-white p-6 shadow-xl transition-transform lg:static lg:h-auto lg:w-full lg:max-w-none lg:rounded-xl lg:border lg:border-gray-200 lg:p-6 lg:shadow-sm ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
              
              <div className="mb-6 flex items-center justify-between lg:hidden">
                <h2 className="font-heading text-xl font-bold text-brand-900">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="rounded-full p-2 hover:bg-gray-100">
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">Listing Type</label>
                  <select name="type" value={filters.type} onChange={handleFilterChange} className="w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-brand-900 focus:outline-none focus:ring-1 focus:ring-brand-900">
                    <option value="All">All Types</option>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">Property Type</label>
                  <select name="category" value={filters.category} onChange={handleFilterChange} className="w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-brand-900 focus:outline-none focus:ring-1 focus:ring-brand-900">
                    <option value="All">All Categories</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Duplex">Duplex</option>
                    <option value="Land">Land</option>
                    <option value="Commercial">Commercial/Office</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">Location</label>
                  <select name="location" value={filters.location} onChange={handleFilterChange} className="w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-brand-900 focus:outline-none focus:ring-1 focus:ring-brand-900">
                    <option value="All">All Locations</option>
                    {locations.map(loc => <option key={loc.name} value={loc.name}>{loc.name}</option>)}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">Bedrooms</label>
                  <select name="beds" value={filters.beds} onChange={handleFilterChange} className="w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-brand-900 focus:outline-none focus:ring-1 focus:ring-brand-900">
                    <option value="Any">Any</option>
                    <option value="1+">1+ Bedrooms</option>
                    <option value="2+">2+ Bedrooms</option>
                    <option value="3+">3+ Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">Price Range</label>
                  <select name="price" value={filters.price} onChange={handleFilterChange} className="w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-brand-900 focus:outline-none focus:ring-1 focus:ring-brand-900">
                    <option value="All">Any Price</option>
                    <option value="under_2m">Under ₦2M</option>
                    <option value="2m_10m">₦2M – ₦10M</option>
                    <option value="10m_50m">₦10M – ₦50M</option>
                    <option value="over_50m">₦50M+</option>
                  </select>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Button onClick={resetFilters} variant="outline" className="w-full">
                    Reset Filters
                  </Button>
                  <Button onClick={() => setIsMobileFiltersOpen(false)} className="mt-3 w-full lg:hidden">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="text-lg font-medium text-gray-900">
                <span className="font-bold">{filteredProperties.length}</span> Properties Found
              </h2>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <label className="shrink-0 text-sm font-medium text-gray-700">Sort By:</label>
                <select name="sort" value={filters.sort} onChange={handleFilterChange} className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-brand-900 sm:w-48">
                  <option value="Newest">Newest</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white py-20 text-center">
                <Filter className="mb-4 h-12 w-12 text-gray-400" />
                <h3 className="text-lg font-medium text-gray-900">No properties found</h3>
                <p className="mt-2 text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                <Button onClick={resetFilters} variant="outline" className="mt-6">Clear All Filters</Button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
