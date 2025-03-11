import React, { useState } from 'react';
import { Hotel, Utensils, MapPin, Search, ChevronRight, User, Phone, Menu, X } from 'lucide-react';

const places = {
  hotels: [
    { id: 1, name: "Taj Lake Palace", rating: 4.8, price: "1000", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=1200" },
    { id: 2, name: "The Oberoi Udaivilas", rating: 4.9, price: "3000", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200" },
    { id: 3, name: "ITC Grand Chola", rating: 4.7, price: "6000", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" },
  ],
  restaurants: [
    { id: 1, name: "Bukhara", cuisine: "North Indian", rating: 4.8, price: "2000", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" },
    { id: 2, name: "Indian Accent", cuisine: "Modern Indian", rating: 4.9, price: "5000", image: "https://images.unsplash.com/photo-1514412076816-d228b5c0973c?auto=format&fit=crop&q=80&w=1200" },
    { id: 3, name: "Karavalli", cuisine: "Coastal", rating: 4.7, price: "6999", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200" },
  ],
  attractions: [
    { id: 1, name: "Taj Mahal", type: "Monument", rating: 4.9, image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200" },
    { id: 2, name: "Amber Fort", type: "Heritage", rating: 4.7, image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&q=80&w=1200" },
    { id: 3, name: "City Palace", type: "Palace", rating: 4.6, image: "https://images.unsplash.com/photo-1590090208734-2c382730a24e?auto=format&fit=crop&q=80&w=1200" },
  ],
};

const packages = [
  {
    name: "Weekend Getaway",
    price: 5000,
    features: ["2 Night Luxury Stay", "Traditional Welcome", "Spa Treatment", "Heritage Walk"],
    recommended: false
  },
  {
    name: "Royal Experience",
    price: 10000,
    features: ["4 Night Palace Stay", "Private Butler", "Cultural Shows", "Fine Dining", "Luxury Car Transfer"],
    recommended: true
  },
  {
    name: "Maharaja Journey",
    price: 20000,
    features: ["7 Night Multi-Palace Tour", "Private Chef", "Helicopter Transfers", "Royal Experiences", "Exclusive Access"],
    recommended: false
  }
];

function LoginPage() {
  const [activeTab, setActiveTab] = useState('signin');

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[url('https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center">
      <div className="w-full max-w-md backdrop-blur-xl bg-[#0A1628]/70 p-8 rounded-3xl shadow-2xl border border-[#1E293B]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
            {activeTab === 'signin' ? 'Welcome Back' : 'Join Us'}
          </h2>
          <p className="text-[#94A3B8] mt-2">Experience luxury like never before</p>
        </div>

        <div className="flex mb-8 p-1 bg-[#1E293B] rounded-xl">
          <button
            className={`flex-1 py-3 text-center font-medium rounded-lg transition-all ${
              activeTab === 'signin'
                ? 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-lg'
                : 'text-[#94A3B8] hover:text-white'
            }`}
            onClick={() => setActiveTab('signin')}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium rounded-lg transition-all ${
              activeTab === 'signup'
                ? 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-lg'
                : 'text-[#94A3B8] hover:text-white'
            }`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {activeTab === 'signin' && (
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#94A3B8]">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-[#334155] text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#94A3B8]">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-[#334155] text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 rounded bg-[#1E293B] border-[#334155] text-[#3B82F6] focus:ring-[#3B82F6] focus:ring-offset-[#0A1628]" />
                <span className="text-[#94A3B8]">Remember me</span>
              </label>
              <a href="#" className="text-[#60A5FA] hover:text-[#93C5FD] transition-colors">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:from-[#2563EB] hover:to-[#3B82F6] transition-all font-medium text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>
        )}

        {activeTab === 'signup' && (
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#94A3B8]">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-[#334155] text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                  placeholder="Raj"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#94A3B8]">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-[#334155] text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                  placeholder="Kumar"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#94A3B8]">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-[#334155] text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#94A3B8]">Mobile Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-[#334155] text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#94A3B8]">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-[#334155] text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded bg-[#1E293B] border-[#334155] text-[#3B82F6] focus:ring-[#3B82F6] focus:ring-offset-[#0A1628]"
              />
              <label className="text-sm text-[#94A3B8]">
                I agree to the <a href="#" className="text-[#60A5FA] hover:text-[#93C5FD]">Terms of Service</a> and{' '}
                <a href="#" className="text-[#60A5FA] hover:text-[#93C5FD]">Privacy Policy</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:from-[#2563EB] hover:to-[#3B82F6] transition-all font-medium text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Luxury Packages</h2>
      <p className="text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto">Experience the grandeur of India's finest hotels and palaces with our curated luxury packages.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg) => (
          <div key={pkg.name} className={`bg-[#1E293B] rounded-lg overflow-hidden ${pkg.recommended ? 'ring-2 ring-[#3B82F6]' : ''}`}>
            {pkg.recommended && (
              <div className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-center py-2 text-sm font-medium">
                RECOMMENDED
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">₹{pkg.price.toLocaleString('en-IN')}</span>
                <span className="text-[#94A3B8]">/person</span>
              </div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center text-[#94A3B8]">
                    <ChevronRight className="w-4 h-4 text-[#60A5FA] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition-all font-medium ${
                  pkg.recommended
                    ? 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:from-[#2563EB] hover:to-[#3B82F6]'
                    : 'bg-[#334155] hover:bg-[#475569]'
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  const [activeTab, setActiveTab] = useState('attractions');

  return (
    <>
      <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200")' }}>
        <div className="absolute inset-0 bg-[#0A1628] bg-opacity-60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
              Discover India's
              <br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Finest Experiences
              </span>
            </h1>
            <p className="text-xl mb-8 text-center max-w-2xl">Explore the rich heritage, luxurious stays, and authentic flavors of incredible India.</p>
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Where in India would you like to explore?"
                className="w-full px-6 py-4 rounded-full bg-[#1E293B] bg-opacity-50 backdrop-blur-sm border border-[#334155] text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#94A3B8]" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-12 space-x-8">
          <TabButton
            active={activeTab === 'attractions'}
            onClick={() => setActiveTab('attractions')}
            icon={<MapPin />}
            text="Attractions"
          />
          <TabButton
            active={activeTab === 'hotels'}
            onClick={() => setActiveTab('hotels')}
            icon={<Hotel />}
            text="Hotels"
          />
          <TabButton
            active={activeTab === 'restaurants'}
            onClick={() => setActiveTab('restaurants')}
            icon={<Utensils />}
            text="Restaurants"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places[activeTab as keyof typeof places].map((item) => (
            <Card key={item.id} item={item} type={activeTab} />
          ))}
        </div>
      </div>
    </>
  );
}

function HotelsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Luxury Hotels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.hotels.map((hotel) => (
          <Card key={hotel.id} item={hotel} type="hotels" />
        ))}
      </div>
    </div>
  );
}

function RestaurantsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Fine Dining</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.restaurants.map((restaurant) => (
          <Card key={restaurant.id} item={restaurant} type="restaurants" />
        ))}
      </div>
    </div>
  );
}

function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Customer Support</h2>
        <div className="bg-[#1E293B] rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#0A1628] border border-[#334155] text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-[#0A1628] border border-[#334155] text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-[#0A1628] border border-[#334155] text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] h-32"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:from-[#2563EB] hover:to-[#3B82F6] transition-all font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1E293B] rounded-lg p-6">
            <Phone className="w-8 h-8 text-[#60A5FA] mb-4" />
            <h4 className="text-lg font-semibold mb-2">Phone Support</h4>
            <p className="text-[#94A3B8]">Available 24/7</p>
            <p className="text-[#60A5FA] mt-2">+91 (800) 123-4567</p>
          </div>
          <div className="bg-[#1E293B] rounded-lg p-6">
            <User className="w-8 h-8 text-[#60A5FA] mb-4" />
            <h4 className="text-lg font-semibold mb-2">Live Chat</h4>
            <p className="text-[#94A3B8]">Chat with our support team</p>
            <button className="text-[#60A5FA] mt-2 hover:text-[#93C5FD]">Start Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, text }: { active: boolean; onClick: () => void; icon: React.ReactNode; text: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
        active
          ? 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
          : 'bg-[#1E293B] hover:bg-[#334155]'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function Card({ item, type }: { item: any; type: string }) {
  return (
    <div className="bg-[#1E293B] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#334155]">
      <div className="relative h-48">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-[#94A3B8]">{item.rating}</span>
          </div>
          {item.price && <span className="text-[#94A3B8]">{item.price}</span>}
        </div>
        {type === 'restaurants' && (
          <p className="text-[#94A3B8] mb-4">{item.cuisine} Cuisine</p>
        )}
        {type === 'attractions' && (
          <p className="text-[#94A3B8] mb-4">{item.type}</p>
        )}
        <button className="flex items-center text-[#60A5FA] hover:text-[#93C5FD] transition-colors">
          Learn more <ChevronRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function NavLink({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-sm font-medium transition-colors ${
        active ? 'text-[#60A5FA]' : 'text-[#94A3B8] hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

function MobileNavLink({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
        active ? 'bg-[#1E293B] text-[#60A5FA]' : 'text-[#94A3B8] hover:bg-[#1E293B] hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'login':
        return <LoginPage />;
      case 'hotels':
        return <HotelsPage />;
      case 'restaurants':
        return <RestaurantsPage />;
      case 'support':
        return <SupportPage />;
      case 'pricing':
        return <PricingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      <nav className="bg-[#0A1628]/90 fixed w-full z-50 backdrop-blur-sm border-b border-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-[#60A5FA]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Adventure Awaits
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink active={currentPage === 'home'} onClick={() => setCurrentPage('home')}>Home</NavLink>
              <NavLink active={currentPage === 'hotels'} onClick={() => setCurrentPage('hotels')}>Hotels</NavLink>
              <NavLink active={currentPage === 'restaurants'} onClick={() => setCurrentPage('restaurants')}>Restaurants</NavLink>
              <NavLink active={currentPage === 'pricing'} onClick={() => setCurrentPage('pricing')}>Pricing</NavLink>
              <NavLink active={currentPage === 'support'} onClick={() => setCurrentPage('support')}>Support</NavLink>
              <button
                onClick={() => setCurrentPage('login')}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:from-[#2563EB] hover:to-[#3B82F6] transition-all"
              >
                Login
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-[#94A3B8]" /> : <Menu className="text-[#94A3B8]" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0A1628]/90 backdrop-blur-sm border-t border-[#1E293B]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink active={currentPage === 'home'} onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}>Home</MobileNavLink>
              <MobileNavLink active={currentPage === 'hotels'} onClick={() => { setCurrentPage('hotels'); setIsMenuOpen(false); }}>Hotels</MobileNavLink>
              <MobileNavLink active={currentPage === 'restaurants'} onClick={() => { setCurrentPage('restaurants'); setIsMenuOpen(false); }}>Restaurants</MobileNavLink>
              <MobileNavLink active={currentPage === 'pricing'} onClick={() => { setCurrentPage('pricing'); setIsMenuOpen(false); }}>Pricing</MobileNavLink>
              <MobileNavLink active={currentPage === 'support'} onClick={() => { setCurrentPage('support'); setIsMenuOpen(false); }}>Support</MobileNavLink>
              <MobileNavLink active={currentPage === 'login'} onClick={() => { setCurrentPage('login'); setIsMenuOpen(false); }}>Login</MobileNavLink>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {renderPage()}
      </main>

      <footer className="bg-[#0A1628] mt-20 py-12 border-t border-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Adventure Awaits</h3>
              <p className="text-[#94A3B8]">Your gateway to extraordinary experiences and unforgettable journeys across India.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#94A3B8]">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-[#60A5FA]">Home</button></li>
                <li><button onClick={() => setCurrentPage('hotels')} className="hover:text-[#60A5FA]">Hotels</button></li>
                <li><button onClick={() => setCurrentPage('restaurants')} className="hover:text-[#60A5FA]">Restaurants</button></li>
                <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-[#60A5FA]">Pricing</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-[#94A3B8]">
                <li><button onClick={() => setCurrentPage('support')} className="hover:text-[#60A5FA]">Contact Us</button></li>
                <li>FAQ</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 text-[#94A3B8]">
                <a href="#" className="hover:text-[#60A5FA] transition-colors">Twitter</a>
                <a href="#" className="hover:text-[#60A5FA] transition-colors">Facebook</a>
                <a href="#" className="hover:text-[#60A5FA] transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#1E293B] text-center text-[#94A3B8]">
            <p>&copy; 2025 Adventure Awaits. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;