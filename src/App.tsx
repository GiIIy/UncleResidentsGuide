import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock3,
  Dumbbell,
  Home,
  Info,
  MessageCircle,
  Package,
  ShieldAlert,
  Wifi,
  Wrench,
  X,
  Zap,
  Clapperboard,
  CircleDot,
  Users,
} from "lucide-react";
import { useState } from "react";
import "./App.css";
import uncleLogo from "./assets/uncle-logo.jpg";

/* =========================================================
   REAL UNCLE LEEDS LINKS
========================================================= */

const LINKS = {
  hostingRoom:
    "https://meetings.hubspot.com/uncle-leeds?uuid=64f047aa-7e85-4b86-a900-3ce81be7a5b5",

  screeningRoom:
    "https://meetings.hubspot.com/uncle-leeds-screening-room?uuid=d32824e7-6e57-41ae-9932-403e18779bac",

  bowling:
    "https://meetings.hubspot.com/uncle-leeds-bowling-lounge?uuid=c5a1b069-2631-47a6-bd0a-9c242b6fd117",

  whatsapp:
    "https://chat.whatsapp.com/DdvBCZYK1pL0qZ5FXFyG1N?s=qs&p=i&mlu=0",

  maintenance:
    "https://join.uncle.co.uk/leeds-maintenance-diagnosis-visit",
};

/* =========================================================
   TYPES
========================================================= */

type Facility = {
  name: string;
  location: string;
  hours?: string;
  icon: typeof Building2;
};

type Booking = {
  name: string;
  description: string;
  icon: typeof Home;
  href: string;
};

type Floor = {
  floor: string;
  spaces: string[];
};

/* =========================================================
   BUILDING DATA
========================================================= */

const blockB: Floor[] = [
  {
    floor: "Ground floor",
    spaces: [
      "CoWorking",
      "Peloton Room",
      "Resident Lounge",
      "Reception",
      "Carpark",
      "Parcel Room",
      "Bike Storage",
      "Bowling",
      "Screening Room",
    ],
  },
  {
    floor: "1",
    spaces: ["Jazz Lounge", "Terrace", "Hosting Room"],
  },
  {
    floor: "20",
    spaces: ["Gym", "Roof Terrace"],
  },
];

const blockC: Floor[] = [
  {
    floor: "Ground floor",
    spaces: [
      "Reception",
      "Pool Room",
      "Darts",
      "Gym",
      "Parcel Room",
    ],
  },
  {
    floor: "Mz",
    spaces: ["Coworking Space", "Cardio"],
  },
  {
    floor: "1",
    spaces: ["Yoga Studio"],
  },
  {
    floor: "30",
    spaces: ["Penthouse"],
  },
];

/* =========================================================
   FACILITIES
========================================================= */

const facilities: Facility[] = [
  {
    name: "Reception",
    location: "Block B · Ground floor",
    hours: "Until 23:00",
    icon: Building2,
  },
  {
    name: "Gym",
    location: "Block B · 20th floor",
    hours: "Until 22:00",
    icon: Dumbbell,
  },
  {
    name: "Screening Room",
    location: "Block B · Ground floor",
    icon: Clapperboard,
  },
  {
    name: "Bowling",
    location: "Block B · Ground floor",
    icon: CircleDot,
  },
];

/* =========================================================
   BOOKINGS
========================================================= */

const bookings: Booking[] = [
  {
    name: "Screening Room",
    description: "Book the cinema / screening room",
    icon: Clapperboard,
    href: LINKS.screeningRoom,
  },
  {
    name: "Bowling",
    description: "Book the bowling lounge",
    icon: CircleDot,
    href: LINKS.bowling,
  },
  {
    name: "Hosting Room",
    description: "Book the hosting room",
    icon: Users,
    href: LINKS.hostingRoom,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBlock, setActiveBlock] = useState<"B" | "C">("B");

  const currentBlock = activeBlock === "B" ? blockB : blockC;

  return (
    <div className="app">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            <img src={uncleLogo} alt="UNCLE" />
          </a>

          <div className="header-location">LEEDS</div>

          <button
            className="menu-button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* =====================================================
          MENU
      ====================================================== */}

      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-panel">
            <div className="menu-header">
              <span className="logo menu-logo">UNCLE</span>

              <button
                className="close-button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={23} />
              </button>
            </div>

            <nav className="menu-links">
              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="#bookings" onClick={() => setMenuOpen(false)}>
                Book a space
              </a>

              <a href="#building" onClick={() => setMenuOpen(false)}>
                Building guide
              </a>

              <a href="#information" onClick={() => setMenuOpen(false)}>
                Important information
              </a>

              <a href="#maintenance" onClick={() => setMenuOpen(false)}>
                Maintenance
              </a>

              <a href="#community" onClick={() => setMenuOpen(false)}>
                Community
              </a>
            </nav>
          </div>
        </div>
      )}

      <main>
        {/* =====================================================
            WELCOME
        ====================================================== */}

        <section className="welcome">
          <div>
            <p className="eyebrow">UNCLE LEEDS / RESIDENT GUIDE</p>

            <h1>
              GOOD
              <br />
              TO SEE
              <br />
              YOU.
            </h1>
          </div>

          <p className="welcome-text">
            Everything you need to get the most out of living at
            UNCLE Leeds.
          </p>
        </section>

        {/* =====================================================
            QUICK ACCESS
        ====================================================== */}

        <section className="quick-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">QUICK ACCESS</p>
              <h2>WHAT DO YOU NEED?</h2>
            </div>
          </div>

          <div className="main-actions">
            {/* BOOK */}

            <a href="#bookings" className="primary-action">
              <div className="action-icon">
                <CalendarDays size={25} strokeWidth={1.8} />
              </div>

              <div className="action-text">
                <span>01</span>
                <h3>Book a space</h3>
                <p>Screening room, bowling & hosting room</p>
              </div>

              <ArrowUpRight size={25} />
            </a>

            {/* MAINTENANCE */}

            <a
              href={LINKS.maintenance}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-action"
            >
              <div className="small-action-icon">
                <Wrench size={21} strokeWidth={1.8} />
              </div>

              <div>
                <h3>Maintenance</h3>
                <p>Report a problem</p>
              </div>

              <ArrowUpRight size={20} />
            </a>

            {/* BUILDING */}

            <a href="#building" className="secondary-action">
              <div className="small-action-icon">
                <Building2 size={21} strokeWidth={1.8} />
              </div>

              <div>
                <h3>Building guide</h3>
                <p>Find rooms & facilities</p>
              </div>

              <ChevronRight size={20} />
            </a>

            {/* WHATSAPP */}

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="community-action"
            >
              <div className="small-action-icon">
                <MessageCircle size={21} strokeWidth={1.8} />
              </div>

              <div>
                <h3>WhatsApp community</h3>
                <p>Join the resident group</p>
              </div>

              <ArrowUpRight size={20} />
            </a>
          </div>
        </section>

        {/* =====================================================
            BOOKINGS
        ====================================================== */}

        <section className="booking-section" id="bookings">
          <div className="section-heading">
            <div>
              <p className="eyebrow">RESIDENT BOOKINGS</p>
              <h2>BOOK A SPACE</h2>
            </div>

            <span className="section-number">01</span>
          </div>

          <p className="section-description">
            Choose a space to go straight to its booking page.
          </p>

          <div className="booking-list">
            {bookings.map((booking, index) => {
              const Icon = booking.icon;

              return (
                <a
                  href={booking.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="booking-row"
                  key={booking.name}
                >
                  <span className="booking-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="booking-icon">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="booking-info">
                    <h3>{booking.name}</h3>
                    <p>{booking.description}</p>
                  </div>

                  <ArrowUpRight size={21} />
                </a>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            BUILDING GUIDE
        ====================================================== */}

        <section className="building-section" id="building">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND YOUR WAY AROUND</p>
              <h2>BUILDING GUIDE</h2>
            </div>
          </div>

          {/* BLOCK SELECTOR */}

          <div className="block-selector">
            <button
              className={activeBlock === "B" ? "active" : ""}
              onClick={() => setActiveBlock("B")}
            >
              BLOCK B
            </button>

            <button
              className={activeBlock === "C" ? "active" : ""}
              onClick={() => setActiveBlock("C")}
            >
              BLOCK C
            </button>
          </div>

          {/* FLOOR LIST */}

          <div className="floor-list">
            {currentBlock.map((floor) => (
              <details className="floor" key={floor.floor}>
                <summary>
                  <div>
                    <span>FLOOR</span>
                    <h3>{floor.floor}</h3>
                  </div>

                  <ChevronDown size={21} className="floor-chevron" />
                </summary>

                <div className="floor-spaces">
                  {floor.spaces.map((space) => (
                    <div className="space" key={space}>
                      <span>{space}</span>
                      <ChevronRight size={17} />
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* =====================================================
            OPENING HOURS
        ====================================================== */}

        <section className="hours-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TODAY</p>
              <h2>OPENING HOURS</h2>
            </div>

            <Clock3 size={24} strokeWidth={1.7} />
          </div>

          <div className="facility-list">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <div className="facility" key={facility.name}>
                  <div className="facility-icon">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="facility-details">
                    <h3>{facility.name}</h3>
                    <p>{facility.location}</p>
                  </div>

                  {facility.hours ? (
                    <div className="facility-status">
                      <span className="open-dot" />
                      <span>Open</span>
                      <small>{facility.hours}</small>
                    </div>
                  ) : (
                    <ChevronRight size={19} />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            IMPORTANT INFORMATION
        ====================================================== */}

        <section className="info-section" id="information">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GOOD TO KNOW</p>
              <h2>IMPORTANT INFO</h2>
            </div>
          </div>

          <div className="info-grid">
            <a href="#" className="info-card">
              <Wifi size={22} strokeWidth={1.7} />

              <div>
                <h3>Wi-Fi</h3>
                <p>Connection details & help</p>
              </div>

              <ChevronRight size={19} />
            </a>

            <a href="#" className="info-card">
              <Zap size={22} strokeWidth={1.7} />

              <div>
                <h3>PROVIDERS</h3>
                <p>Provider & utility information</p>
              </div>

              <ChevronRight size={19} />
            </a>

            <a href="#" className="info-card">
              <Package size={22} strokeWidth={1.7} />

              <div>
                <h3>Deliveries</h3>
                <p>Parcel & delivery information</p>
              </div>

              <ChevronRight size={19} />
            </a>

            <a href="#" className="info-card">
              <ShieldAlert size={22} strokeWidth={1.7} />

              <div>
                <h3>Emergency</h3>
                <p>Important contacts & information</p>
              </div>

              <ChevronRight size={19} />
            </a>
          </div>
        </section>

        {/* =====================================================
            MAINTENANCE
        ====================================================== */}

        <section className="maintenance-section" id="maintenance">
          <div className="maintenance-icon">
            <Wrench size={25} strokeWidth={1.7} />
          </div>

          <p className="eyebrow">SOMETHING WRONG?</p>

          <h2>
            REPORT
            <br />
            MAINTENANCE.
          </h2>

          <p className="maintenance-description">
            Broken appliance, leaking tap or something else that
            needs fixing? Report it directly to the UNCLE team.
          </p>

          <a
            href={LINKS.maintenance}
            target="_blank"
            rel="noopener noreferrer"
            className="black-button"
          >
            Report an issue
            <ArrowUpRight size={18} />
          </a>
        </section>

        {/* =====================================================
            COMMUNITY
        ====================================================== */}

        <section className="community-section" id="community">
          <div className="community-icon">
            <MessageCircle size={25} strokeWidth={1.7} />
          </div>

          <p className="eyebrow">STAY CONNECTED</p>

          <h2>
            JOIN THE
            <br />
            COMMUNITY.
          </h2>

          <p>
            Join the UNCLE Leeds WhatsApp group and stay up to date
            with what's happening in the building.
          </p>

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="white-button"
          >
            Join WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </section>
      </main>

      {/* =====================================================
          MOBILE NAV
      ====================================================== */}

      <nav className="bottom-nav">
        <a href="#" className="nav-item active">
          <Home size={21} />
          <span>Home</span>
        </a>

        <a href="#bookings" className="nav-item">
          <CalendarDays size={21} />
          <span>Book</span>
        </a>

        <a href="#building" className="nav-item">
          <Building2 size={21} />
          <span>Building</span>
        </a>

        <a href="#information" className="nav-item">
          <Info size={21} />
          <span>More</span>
        </a>
      </nav>
    </div>
  );
}

export default App;