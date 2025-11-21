'use client'

import { useState } from 'react'
import { Star, Waves, Anchor, Calendar, MapPin, ExternalLink, Sparkles } from 'lucide-react'

interface Hotel {
  id: number
  name: string
  openedYear: number
  rating: number
  beach: string
  coralReef: string
  location: string
  description: string
  amenities: string[]
  beachScore: number
  reefScore: number
  image: string
  website: string
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Steigenberger Pure Lifestyle Resort",
    openedYear: 2023,
    rating: 5,
    beach: "Premium Private Beach",
    coralReef: "Pristine House Reef - Direct Access",
    location: "Makadi Bay, Hurghada",
    description: "Brand new adults-only resort opened in 2023 with spectacular house reef access directly from the beach. Features a 400m private sandy beach with world-class coral formations just meters from shore.",
    amenities: ["Adults Only", "Private Beach", "House Reef", "Spa", "Multiple Pools", "Gourmet Dining"],
    beachScore: 98,
    reefScore: 97,
    image: "🏝️",
    website: "steigenberger.com"
  },
  {
    id: 2,
    name: "Baron Palace Sahl Hasheesh",
    openedYear: 2022,
    rating: 5,
    beach: "Award-Winning Private Beach",
    coralReef: "Protected Marine Reserve Access",
    location: "Sahl Hasheesh Bay, Hurghada",
    description: "Luxurious resort in the protected Sahl Hasheesh bay, opened late 2022. Features direct access to a marine reserve with vibrant coral gardens and exceptional biodiversity. 700m of pristine beach.",
    amenities: ["Private Beach", "Marine Reserve", "Dive Center", "Kids Club", "Aqua Park", "Fine Dining"],
    beachScore: 96,
    reefScore: 95,
    image: "👑",
    website: "baronhotelsandresorts.com"
  },
  {
    id: 3,
    name: "Cleopatra Luxury Resort Makadi Bay",
    openedYear: 2021,
    rating: 5,
    beach: "Exclusive Sandy Beach",
    coralReef: "Vibrant Coral Gardens",
    location: "Makadi Bay, Hurghada",
    description: "Opened in 2021, this resort boasts one of Makadi Bay's finest house reefs. Direct beach access to stunning coral formations with sea turtles, rays, and tropical fish. 600m of golden sand.",
    amenities: ["House Reef", "PADI Dive Center", "Private Beach", "Spa", "Water Sports", "All-Inclusive"],
    beachScore: 95,
    reefScore: 96,
    image: "🌊",
    website: "cleopatrahotels.com"
  },
  {
    id: 4,
    name: "Jaz Aquamarine Resort",
    openedYear: 2022,
    rating: 5,
    beach: "Blue Flag Beach",
    coralReef: "Spectacular House Reef",
    location: "Hurghada City",
    description: "Contemporary luxury resort opened early 2022 with Blue Flag certified beach. Features an impressive house reef accessible via jetty and beach entry, teeming with colorful coral and marine life.",
    amenities: ["Blue Flag Beach", "House Reef", "Multiple Pools", "Spa", "Entertainment", "Diving Center"],
    beachScore: 94,
    reefScore: 93,
    image: "💎",
    website: "jazmakadibay.com"
  },
  {
    id: 5,
    name: "Ancient Sands Golf Resort & Residences",
    openedYear: 2023,
    rating: 5,
    beach: "Private Beach Club Access",
    coralReef: "Nearby Coral Gardens",
    location: "El Gouna near Hurghada",
    description: "Ultra-luxury resort opened in 2023 in El Gouna. While primarily a golf resort, it includes exclusive beach club access to pristine shores and nearby coral reef sites. Premium shuttle to best reef locations.",
    amenities: ["Championship Golf", "Beach Club", "Reef Excursions", "Marina Access", "Spa", "Fine Dining"],
    beachScore: 92,
    reefScore: 90,
    image: "⛳",
    website: "ancientsands.com"
  }
]

export default function Home() {
  const [sortBy, setSortBy] = useState<'newest' | 'beach' | 'reef'>('newest')

  const sortedHotels = [...hotels].sort((a, b) => {
    if (sortBy === 'newest') return b.openedYear - a.openedYear
    if (sortBy === 'beach') return b.beachScore - a.beachScore
    if (sortBy === 'reef') return b.reefScore - a.reefScore
    return 0
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Newest 5-Star Hotels in Hurghada
            </h1>
            <Sparkles className="w-8 h-8" />
          </div>
          <p className="text-xl text-center text-blue-100">
            Premium Beaches • Live Coral Reefs • Luxury Accommodations
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Sort By:
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSortBy('newest')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                sortBy === 'newest'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Calendar className="w-4 h-4 inline mr-2" />
              Newest First
            </button>
            <button
              onClick={() => setSortBy('beach')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                sortBy === 'beach'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Waves className="w-4 h-4 inline mr-2" />
              Best Beach
            </button>
            <button
              onClick={() => setSortBy('reef')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                sortBy === 'reef'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Anchor className="w-4 h-4 inline mr-2" />
              Best Coral Reef
            </button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="space-y-8">
          {sortedHotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="md:flex">
                {/* Image Section */}
                <div className="md:w-1/3 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-8xl mb-4">{hotel.image}</div>
                    <div className="bg-white/90 backdrop-blur rounded-full px-4 py-2 inline-block">
                      <span className="text-sm font-bold text-blue-600">
                        #{index + 1} {sortBy === 'newest' ? 'Newest' : sortBy === 'beach' ? 'Beach' : 'Reef'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {hotel.name}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {hotel.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Opened {hotel.openedYear}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {hotel.description}
                  </p>

                  {/* Scores */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Waves className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-700">Beach Quality</span>
                      </div>
                      <div className="text-3xl font-bold text-blue-600">
                        {hotel.beachScore}/100
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{hotel.beach}</p>
                    </div>
                    <div className="bg-cyan-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Anchor className="w-5 h-5 text-cyan-600" />
                        <span className="font-semibold text-gray-700">Coral Reef</span>
                      </div>
                      <div className="text-3xl font-bold text-cyan-600">
                        {hotel.reefScore}/100
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{hotel.coralReef}</p>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Amenities:</h3>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`https://${hotel.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Hotel Details
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Hurghada for Coral Reefs?
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Hurghada is one of the premier destinations in the Red Sea for coral reef diving and snorkeling.
              The region is famous for its crystal-clear waters, vibrant marine life, and accessible house reefs.
            </p>
            <p>
              <strong>Best Time to Visit:</strong> Year-round, but March-May and September-November offer
              ideal conditions with warm water temperatures (24-28°C) and excellent visibility.
            </p>
            <p>
              <strong>Marine Life:</strong> Expect to see colorful coral formations, sea turtles, rays,
              dolphins, and hundreds of tropical fish species. Many hotels offer direct beach access to
              their house reefs, making snorkeling convenient and accessible.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            Discover the newest luxury hotels in Hurghada with pristine beaches and live coral reefs
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Information updated 2025 • For bookings, contact hotels directly
          </p>
        </div>
      </footer>
    </main>
  )
}
