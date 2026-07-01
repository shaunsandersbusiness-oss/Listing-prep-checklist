import React, { useState, useEffect, useRef } from 'react';

// Data
const CHECKLIST_DATA = [
  {
    id: 'lighting',
    icon: '💡',
    title: 'Lighting & Windows',
    items: [
      'Open all blinds and curtains to let in maximum natural light',
      'Turn on ALL interior lights — ceiling fixtures, lamps, under-cabinet lighting, closet lights',
      'Check that all light bulbs are working and match in color temperature (no mix of warm yellow and cool white)',
      'Turn on exterior lights if the shoot includes twilight or exterior photos'
    ]
  },
  {
    id: 'bathrooms',
    icon: '🚿',
    title: 'Bathrooms',
    items: [
      'Close all toilet seats and lids',
      'Arrange shower curtains the way you want them photographed — open, closed, removed, or replaced.',
      'Remove ALL personal items — toothbrushes, razors, soaps, shampoo bottles, medications',
      'Clear countertops completely — store items under the sink or in a bin',
      'Wipe mirrors, faucets, and glass surfaces to remove water spots and streaks'
    ]
  },
  {
    id: 'bedrooms',
    icon: '🛏️',
    title: 'Bedrooms',
    items: [
      'Make all beds with neat, smooth bedding — tuck in sheets, fluff pillows, fold throws',
      'Declutter nightstands — remove water bottles, chargers, books, medications',
      'Clear dresser tops and remove any laundry, hampers, or clothes from view',
      'Open curtains and make sure windows are clean'
    ]
  },
  {
    id: 'living',
    icon: '🛋️',
    title: 'Living & Common Areas',
    items: [
      'Fluff pillows and straighten furniture — arrange cushions symmetrically',
      'Declutter coffee tables, shelves, and mantels — less is more',
      'Hide all visible cords, remotes, and charging cables',
      'Remove any kids\' toys, pet items, and shoes from the floor'
    ]
  },
  {
    id: 'kitchen',
    icon: '🍽️',
    title: 'Kitchen & Dining',
    items: [
      'Clear countertops of all items except 1-2 decorative pieces (a plant, a cookbook stand)',
      'Close ALL cabinet doors and drawers — check every single one',
      'Remove dish racks, sponges, dish soap, and paper towel holders',
      'Hide small appliances — toaster, coffee maker, knife block (unless they\'re high-end and part of the staging)',
      'Wipe down all surfaces, appliances, and the sink until they shine'
    ]
  },
  {
    id: 'exterior',
    icon: '🏡',
    title: 'Exterior & Curb Appeal',
    items: [
      'Move all vehicles out of the driveway and away from the front of the house',
      'Remove trash cans, recycling bins, and garden hoses from view',
      'Mow the lawn, sweep walkways, and clear any debris or leaves',
      'Put away kids\' outdoor toys, bikes, and pet items',
      'Close the garage door'
    ]
  },
  {
    id: 'pets',
    icon: '🐾',
    title: 'Pets & Personal Items',
    items: [
      'Remove pet beds, food bowls, litter boxes, and toys from all rooms',
      'Secure pets in a crate, vehicle, or off-property during the shoot',
      'Remove personal photos, religious items, and family memorabilia from walls and shelves'
    ]
  },
  {
    id: 'final',
    icon: '✨',
    title: 'Final Walkthrough',
    items: [
      'Walk through EVERY room and check it as if you were hosting an open house right now',
      'Check all closets — buyers and photographers may open them (neat and half-full is ideal)',
      'Make sure all ceiling fans are OFF (they blur in photos)',
      'Notify the photographer of any special features or angles you\'d like highlighted'
    ]
  }
];

// Components
const BackgroundAnimation = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate particles
    const isMobile = window.innerWidth < 768;
    const numParticles = isMobile ? 6 : 15;
    const newParticles = Array.from({ length: numParticles }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${17 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 15}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      <div className="bg-layer-1" aria-hidden="true"></div>
      <div className="bg-layer-2" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="bg-layer-3" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              animation: `particleFloat ${p.animationDuration} infinite ${p.animationDelay} ease-in-out`
            }}
          ></div>
        ))}
      </div>
      <div className="bg-layer-4" aria-hidden="true"></div>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="regalis-nav" id="regalisNav">
        <div className="nav-inner">
          <a href="https://www.regalisrealtymedia.com" className="nav-logo">
            <img src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/66c7f601fff376e4c95274b3_Regalis%20Realty%20Main%20Logo%20(1).png" alt="Regalis Realty Media" className="nav-logo-img" />
          </a>
          <div className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
            <a href="https://www.regalisrealtymedia.com" className="nav-link" data-page="home" onClick={closeMenu}>Home</a>
            <a href="https://regalisrealtymedia25.pixieset.com/regalisrealtymediaportfolio/compassphotos/" className="nav-link" data-page="portfolio" target="_blank" onClick={closeMenu}>Portfolio</a>
            <a href="https://pricing.regalisrealtymedia.com" className="nav-link" data-page="pricing" onClick={closeMenu}>Pricing</a>
            <a href="https://catalog.regalisrealtymedia.com" className="nav-link" data-page="catalog" onClick={closeMenu}>Catalog</a>
            <a href="https://branding.regalisrealtymedia.com" className="nav-link" data-page="branding" onClick={closeMenu}>Branding</a>
            <a href="https://portal.regalisrealtymedia.com" className="nav-link" data-page="portal" onClick={closeMenu}>Portal</a>
            <a href="https://contactus.regalisrealtymedia.com" className="nav-link" data-page="contact" onClick={closeMenu}>Contact</a>
            <a href="https://prep.regalisrealtymedia.com" className="nav-link active" data-page="checklist" onClick={closeMenu}>Listing Checklist</a>
          </div>
          <button className={`nav-hamburger ${isOpen ? 'open' : ''}`} id="navHamburger" aria-label="Toggle menu" onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>
      <div className={`nav-overlay ${isOpen ? 'open' : ''}`} id="navOverlay" onClick={closeMenu}></div>
    </>
  );
};

const Hero = () => (
  <div className="pt-24 pb-8 text-center">
    <div className="text-[12px] text-[#c9a84c] uppercase tracking-[3px] mb-4 font-semibold">
      PHOTO DAY PREP
    </div>
    <h1 className="text-[36px] md:text-[44px] text-white font-bold mb-6 leading-tight">
      Listing Preparation Checklist
    </h1>
    <p className="text-[16px] text-[#D4D4D4] leading-[1.7] max-w-[540px] mx-auto mb-8">
      Prepare your listing before the photographer arrives to ensure the best photos and a strong first impression. A well-prepped home enhances image quality and attracts more buyers.
    </p>
    <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-[12px] p-4 max-w-[540px] mx-auto text-[14px] text-[#D4D4D4] mb-8 text-center leading-[1.6]">
      📲 Send this page to your clients before photo day. Share the link via text or email so they can work through the checklist on their own. For best results, do a quick walkthrough — in person or on a video call — to confirm the property meets these standards before the photographer arrives.
    </div>
    <div className="bg-[#c9a84c]/10 border border-[#c9a84c] rounded-[12px] p-4 max-w-[540px] mx-auto text-[14px] text-[#D4D4D4]">
      ⚠️ If the listing is not prepared according to this checklist, all delivered media will be provided as-is. Any corrections such as object removal, retouching, or reshoots may incur additional costs. Please check that complete every item before your scheduled shoot for the best result.
    </div>
    <div className="bg-red-500/10 border border-red-500 rounded-[12px] p-4 max-w-[540px] mx-auto text-[14px] text-[#D4D4D4] mt-4">
      🚫 Do not complete checklist items during the shoot. Our photographers are not stagers — their job is to capture the property, not prepare it. Moving items, tidying rooms, or working through this checklist during the shoot disrupts the photographer's workflow and delays the schedule. A $75 fee may be applied if on-site preparation during the shoot affects the scheduled timeline. Have everything ready before we walk through the door.
    </div>
  </div>
);

const ProgressTracker = ({ checkedCount, totalCount }: { checkedCount: number, totalCount: number }) => {
  const percent = totalCount === 0 ? 0 : Math.round((checkedCount / totalCount) * 100);
  
  return (
    <div className="progress-tracker">
      <div className="progress-info">
        <span className="progress-count"><span>{checkedCount}</span> of <span>{totalCount}</span> complete</span>
        <span className="progress-percent">{percent}%</span>
      </div>
      <div className="progress-bar-track">
        <div className={`progress-bar-fill ${percent === 100 ? 'complete' : ''}`} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

const ChecklistCategory = ({ 
  category, 
  checkedItems, 
  onToggleItem,
  index
}: { 
  category: typeof CHECKLIST_DATA[0], 
  checkedItems: Record<string, boolean>,
  onToggleItem: (id: string) => void,
  index: number
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const categoryCheckedCount = category.items.filter((_, i) => checkedItems[`${category.id}_${i}`]).length;
  const isAllChecked = categoryCheckedCount === category.items.length;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (cardRef.current) {
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(20px)';
      cardRef.current.style.transition = `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`;
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={cardRef} className={`checklist-category ${collapsed ? 'collapsed' : ''} ${isAllChecked ? 'all-checked' : ''}`}>
      <div className="category-header" onClick={() => setCollapsed(!collapsed)}>
        <div className="category-left">
          <span className="category-icon">{category.icon}</span>
          <h2 className="category-title">{category.title}</h2>
        </div>
        <div className="category-right">
          <span className="category-progress">{categoryCheckedCount}/{category.items.length}</span>
          <span className="category-chevron">▾</span>
        </div>
      </div>
      <div className="category-items">
        {category.items.map((item, i) => {
          const itemId = `${category.id}_${i}`;
          return (
            <label key={itemId} className="checklist-item">
              <input 
                type="checkbox" 
                className="checklist-checkbox" 
                checked={!!checkedItems[itemId]}
                onChange={() => onToggleItem(itemId)}
              />
              <span className="custom-checkbox"></span>
              <span className="item-text">{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

const CompletionMessage = ({ show }: { show: boolean }) => {
  if (!show) return null;
  
  return (
    <div className="completion-message">
      <div className="completion-card">
        <span className="completion-icon">🎉</span>
        <h2 className="completion-title">Your Home Is Photo-Ready!</h2>
        <p className="completion-text">All 34 items checked. Your listing is prepared for a stunning photoshoot. We can't wait to capture it!</p>
        <p className="completion-subtext">See you on shoot day.</p>
      </div>
    </div>
  );
};

const Footer = ({ onReset }: { onReset: () => void }) => (
  <>
    <div className="text-center mb-12">
      <a href="#" onClick={(e) => { e.preventDefault(); onReset(); }} className="text-[#666] text-[12px] no-underline transition-colors hover:text-[#999]">
        Reset Checklist
      </a>
    </div>
    <footer className="bg-black text-center py-[32px] px-[24px] border-t border-white/5">
      <p className="text-[#999] text-[14px] mb-[12px] m-0">© 2026 Regalis Realty Media</p>
      <div className="flex justify-center gap-[24px]">
        <a href="https://termsandconditions.regalisrealtymedia.com/" className="text-[#c9a84c] text-[14px] no-underline hover:underline">Terms &amp; Conditions</a>
        <a href="https://privacypolicy.regalisrealtymedia.com/" className="text-[#c9a84c] text-[14px] no-underline hover:underline">Privacy Policy</a>
      </div>
    </footer>
  </>
);

export default function App() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  const totalCount = CHECKLIST_DATA.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const isComplete = totalCount > 0 && checkedCount === totalCount;

  useEffect(() => {
    const saved = localStorage.getItem('regalis_checklist');
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved checklist state', e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('regalis_checklist', JSON.stringify(checkedItems));
    }
  }, [checkedItems, isLoaded]);

  const handleToggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    if (window.confirm('Reset all checked items? This cannot be undone.')) {
      setCheckedItems({});
      localStorage.removeItem('regalis_checklist');
    }
  };

  if (!isLoaded) return null;

  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <ProgressTracker checkedCount={checkedCount} totalCount={totalCount} />
      
      <main className="checklist-content relative z-10 pb-12">
        <Hero />
        
        <div className="checklist-sections">
          {CHECKLIST_DATA.map((category, index) => (
            <ChecklistCategory 
              key={category.id} 
              category={category} 
              checkedItems={checkedItems}
              onToggleItem={handleToggleItem}
              index={index}
            />
          ))}
        </div>
        
        <CompletionMessage show={isComplete} />
      </main>
      
      <div className="relative z-10">
        <Footer onReset={handleReset} />
      </div>
    </>
  );
}
