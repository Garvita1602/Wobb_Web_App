import React, { useState } from 'react';
import './App.css';
import AboutModal from './components/AboutModal/AboutModal';
import CampaignCard from './components/CampaignCard/CampaignCard';
import brandsData from './components/CampaignModal/brandsData'; // Import the brandsData
import ContactForm from './components/ContactForm/ContactForm';
import Header from './components/Header/Header';
import influencerImage from './influencer.jpg';
const mockCampaigns = Array.from({ length: 30 }, (_, index) => {
  
  const payoutTypeOptions = ['Barter', 'Refund', 'Fixed Pay'];
  const payoutType = payoutTypeOptions[Math.floor(Math.random() * payoutTypeOptions.length)];

  let payoutAmount = '';
  if (payoutType === 'Barter') {
    payoutAmount = '1 Pair of Sneakers'; 
  } else if (payoutType === 'Refund') {
    payoutAmount = `$${(index + 1) * 100}`;  
  } else {
    payoutAmount = `$${(index + 1) * 50}`;  
  }
  const slots = Math.floor(Math.random() * 10) + 5; 
  const hired = Math.floor(Math.random() * (slots + 1)); 
  return {
    id: index + 1,
    brand: `Brand ${index + 1}`,
    payout: {
      type: payoutType,
      amount: payoutAmount,
    },
    slots,
    hired,
    image: 'https://via.placeholder.com/300x150',
    campaignImage: 'https://via.placeholder.com/600x300',
    description: `This is the description for campaign ${index + 1}. Collaborate with ${`Brand ${index + 1}`} to promote their latest product.`,
  };
});

const combinedCampaigns = [...brandsData, ...mockCampaigns];

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [filteredCampaigns, setFilteredCampaigns] = useState(combinedCampaigns);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    setFilteredCampaigns(
      combinedCampaigns.filter((campaign) =>
        campaign.brand.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Header
        onAboutClick={() => setShowAbout(true)}
        onContactClick={() => setShowContact(true)}
      />

      {/* Homepage Section with Campaign Introduction */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="text-content">
            <h1>Campaigns made simply for you</h1>
            <p>You just can’t miss on these impactful campaigns. Connect, Collaborate, and Create with us!</p>
            <p>Explore opportunities to work with top brands across industries.</p>
            <p>Get rewarded with payouts, barters, and exclusive benefits.</p>
            <p>Discover campaigns that match your niche and style.</p>
            <p>Make your influence count and grow your presence.</p>
            <p>Join us and transform your passion into profit!</p>
          </div>
          <div className="image-content">
            <img src={influencerImage} alt="Influencers collaborating" className="influencers-image" />
          </div>
        </div>
      </section>



      <div id="campaigns" className="main-content">
        

        <div className="cards-container">
          {filteredCampaigns.slice(0, 15).map((campaign) => (
            <CampaignCard
              key={campaign.id}
              brand={campaign.brand}
              payout={campaign.payout}
              slots={campaign.slots}
              hired={campaign.hired}
              campaignImage={campaign.campaignImage}
              description={campaign.description}
            />
          ))}
        </div>
      </div>

      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
      
    </div>
  );
}

export default App;
