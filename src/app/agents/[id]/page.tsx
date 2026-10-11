import AgentDetailClient from './AgentDetailClient';

const agentsData = [
  { id: '1', name: 'Almond D. Dawson', role: 'Senior Principal Broker', phone: '+971 50 123 4567', email: 'almond@45 real estate.com', office: 'Downtown Dubai', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', listings: 14, bio: 'With over 15 years of experience in the luxury real estate market, Almond is known for his exceptional negotiation skills and unparalleled knowledge of the Dubai property landscape. He has consistently ranked among the top 1% of brokers nationwide.' },
  { id: '2', name: 'Sarah Jenkins', role: 'Luxury Real Estate Specialist', phone: '+971 50 987 6543', email: 'sarah@45 real estate.com', office: 'Palm Jumeirah', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', listings: 9, bio: 'Sarah specializes in waterfront properties and ultra-luxury penthouses. Her background in interior design gives her clients a unique advantage when staging homes for sale or finding properties with incredible potential.' },
  { id: '3', name: 'Marcus Vance', role: 'Commercial & Residential Agent', phone: '+971 50 456 7890', email: 'marcus@45 real estate.com', office: 'Dubai Marina', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80', listings: 11, bio: 'Marcus bridges the gap between commercial investments and residential luxury. His analytical approach and vast network of international investors make him the go-to advisor for high-yield property portfolios.' },
];

const agentProperties = [
  {
    id: 1,
    title: 'Modern Glass Villa',
    location: 'Palm Jumeirah, Dubai',
    price: '$4,500,000',
    type: 'Villa',
    beds: 5,
    baths: 6,
    sqft: '8,500',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    location: 'Downtown Dubai',
    price: '$2,200,000',
    type: 'Penthouse',
    beds: 3,
    baths: 4,
    sqft: '4,200',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Serene Garden Estate',
    location: 'Emirates Hills, Dubai',
    price: '$5,100,000',
    type: 'Estate',
    beds: 6,
    baths: 7,
    sqft: '12,000',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
];

export default async function AgentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = agentsData.find(a => a.id === id) || agentsData[0];

  return <AgentDetailClient agent={agent} properties={agentProperties} />;
}
