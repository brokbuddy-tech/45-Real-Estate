export interface Property {
  id: number;
  title: string;
  type: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  rating: number;
  status: string;
  category: string;
  image: string;
  gallery: string[];
  description: string[];
  amenities: string[];
  faqs: { q: string; a: string }[];
  agent: {
    name: string;
    role: string;
    rating: number;
    reviews: number;
    image: string;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'River flat for rental',
    type: 'Villa',
    price: 1850,
    address: '2/A, New South Quest',
    beds: 2,
    baths: 2,
    sqft: '1,500 sqft',
    rating: 4.8,
    status: 'Ready',
    category: 'For Rent',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    ],
    description: [
      'A beautiful and serene river flat located in the heart of New South Quest. Perfect for young professionals or small families looking for a peaceful retreat with easy access to city amenities.',
      'This property features open-plan living spaces, modern appliances, and a stunning balcony view of the nearby river.',
    ],
    amenities: ['River View', 'Smart Home System', 'Central AC & Heating', 'Concierge Services', 'State-of-the-art Gym', 'High-speed Elevators'],
    faqs: [
      { q: "Are pets allowed?", a: "Yes, small pets are allowed with a minor pet deposit." },
      { q: "Is parking included?", a: "One covered parking spot is included in the rent." },
    ],
    agent: {
      name: 'Sarah Jenkins',
      role: 'Leasing Specialist',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 2,
    title: 'Beach villa for lease',
    type: 'Cottage',
    price: 1900,
    address: '10/B, Palm Coast',
    beds: 3,
    baths: 2,
    sqft: '6,000 sqft',
    rating: 4.9,
    status: 'Ready',
    category: 'For Rent',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    ],
    description: [
      'Escape to this stunning beach villa located right on Palm Coast. Offering direct beach access and uninterrupted ocean views.',
      'The property features a massive outdoor patio, private plunge pool, and incredibly spacious living areas adorned with coastal luxury finishes.',
    ],
    amenities: ['Private Beach Access', 'Private Swimming Pool', 'Valet Parking 24/7', 'Smart Home System', 'Central AC & Heating', 'Secure Perimeter'],
    faqs: [
      { q: "What is the minimum lease term?", a: "The minimum lease term is 12 months." },
      { q: "Does it come furnished?", a: "Yes, the villa comes fully furnished with designer coastal furniture." },
    ],
    agent: {
      name: 'Almond D. Dawson',
      role: 'Senior Principal Broker',
      rating: 4.9,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 3,
    title: 'Penthouse in downtown',
    type: 'Apartment',
    price: 2000,
    address: '170, Queen\'s Street',
    beds: 3,
    baths: 3,
    sqft: '4,000 sqft',
    rating: 4.7,
    status: 'Off-Plan',
    category: 'Off-Plan',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    ],
    description: [
      'An ultra-modern penthouse currently in development in the heart of downtown. This off-plan opportunity offers investors a chance to secure premium real estate before completion.',
      'Enjoy panoramic city skyline views, bespoke Italian kitchens, and access to a rooftop infinity pool exclusive to penthouse residents.',
    ],
    amenities: ['Rooftop Infinity Pool', 'Bespoke Italian Kitchen', 'Smart Home System', 'Concierge Services', 'State-of-the-art Gym', 'High-speed Elevators'],
    faqs: [
      { q: "What is the expected handover date?", a: "The expected handover date is Q4 2026." },
      { q: "Is there a payment plan?", a: "Yes, we offer a 50/50 payment plan linked to construction milestones." },
    ],
    agent: {
      name: 'Marcus Chen',
      role: 'Investment Advisor',
      rating: 4.7,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 4,
    title: 'One Crescent Palm Residence',
    type: 'Villa',
    price: 4495000,
    address: '50/C, La Paz Valley',
    beds: 3,
    baths: 3,
    sqft: '4,500 sqft',
    rating: 4.6,
    status: 'Ready',
    category: 'For Buy',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    ],
    description: [
      'Experience ultra-luxury waterfront living at One Crescent Palm. Designed by world-renowned architects, this residence offers sweeping views of the Arabian Gulf, private elevator access, custom Italian marble flooring, and smart home automation throughout.',
      'The open-plan living and dining space flows seamlessly onto an expansive terrace equipped with a plunge pool and dining area, perfect for entertaining guests against breathtaking sunset backdrops.',
    ],
    amenities: ['Private Swimming Pool', 'Valet Parking 24/7', 'Smart Home System', 'Central AC & Heating', 'Concierge Services', 'Private Beach Access', 'State-of-the-art Gym', 'High-speed Elevators', 'Secure Perimeter'],
    faqs: [
      { q: "What is the service charge fee?", a: "The service charge is estimated at $14 per sqft annually, covering full building maintenance, security, and pool upkeep." },
      { q: "Is financing available for international buyers?", a: "Yes, partner banks offer up to 75% mortgage financing for qualified international buyers." },
      { q: "What is included in the kitchen setup?", a: "The kitchen comes fully fitted with integrated Miele appliances, custom cabinetry, and marble countertops." }
    ],
    agent: {
      name: 'Almond D. Dawson',
      role: 'Senior Principal Broker',
      rating: 4.9,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 5,
    title: 'Chic Marina Apartment',
    type: 'Apartment',
    price: 1850000,
    address: 'Dubai Marina, Dubai',
    beds: 2,
    baths: 2,
    sqft: '1,600 sqft',
    rating: 4.7,
    status: 'Ready',
    category: 'For Buy',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    description: [
      'A refined two-bedroom apartment in Dubai Marina, designed for effortless waterfront living and moments from the promenade.',
      'Floor-to-ceiling windows, contemporary finishes, and a private balcony create a light-filled home with skyline and marina views.',
    ],
    amenities: ['Marina View', 'Private Balcony', 'Swimming Pool', 'State-of-the-art Gym', '24/7 Security', 'Covered Parking'],
    faqs: [
      { q: 'Is the apartment furnished?', a: 'It is offered with a curated furniture package; an unfurnished option can be discussed.' },
      { q: 'How close is it to the marina walk?', a: 'The marina walk, cafés, and waterfront dining are a short walk from the residence.' },
    ],
    agent: {
      name: 'Marcus Chen',
      role: 'Investment Advisor',
      rating: 4.7,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 6,
    title: 'Desert Oasis Retreat',
    type: 'Villa',
    price: 7200000,
    address: 'Al Barari, Dubai',
    beds: 6,
    baths: 7,
    sqft: '14,500 sqft',
    rating: 4.9,
    status: 'Ready',
    category: 'For Buy',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    ],
    description: [
      'A secluded six-bedroom villa set within the lush landscape of Al Barari, balancing generous family spaces with resort-style privacy.',
      'The residence features a landscaped garden, a private pool, and expansive indoor-outdoor entertaining areas for Dubai living at its most relaxed.',
    ],
    amenities: ['Private Swimming Pool', 'Landscaped Garden', 'Smart Home System', 'Private Cinema', 'Maid\'s Room', 'Secure Perimeter'],
    faqs: [
      { q: 'Is the villa move-in ready?', a: 'Yes. The villa is ready for immediate occupation, subject to the standard completion process.' },
      { q: 'Does the property have a private pool?', a: 'Yes, the landscaped grounds include a private pool and outdoor entertaining area.' },
    ],
    agent: {
      name: 'Almond D. Dawson',
      role: 'Senior Principal Broker',
      rating: 4.9,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    }
  }
];
