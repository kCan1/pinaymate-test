import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [memberCount, setMemberCount] = useState(2847);
  const [spotsLeft, setSpotsLeft] = useState(47);
  const [verifiedToday, setVerifiedToday] = useState(23);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [onlineNow, setOnlineNow] = useState(156);
  const [newMatches, setNewMatches] = useState(23);

  // Enhanced attractive Filipina images with more variety
  const filipinaImages = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Attractive Asian woman with elegant smile
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Beautiful woman in stylish clothing
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Professional attractive woman
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Elegant Asian beauty
  ];

  // Simulate real-time engagement metrics (OnlyFans-style)
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setMemberCount((prev) => prev + 1);
        setOnlineNow(Math.floor(Math.random() * 50) + 120);
      }
      if (Math.random() > 0.8) {
        setNewMatches((prev) => prev + 1);
        setVerifiedToday((prev) => prev + 1);
      }
      if (Math.random() > 0.9 && spotsLeft > 0) {
        setSpotsLeft((prev) => prev - 1);
      }
      // Faster image rotation for visual stimulation
      setCurrentImageIndex((prev) => (prev + 1) % filipinaImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [spotsLeft, filipinaImages.length]);

  return (
    <div className="min-h-screen bg-black">
      {/* Enhanced Header with Live Activity - Fixed spacing */}
      <header className="fixed top-0 w-full bg-black/98 backdrop-blur-lg z-50 border-b border-pink-500/30 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group cursor-pointer">
                <span className="text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text animate-pulse hover:from-pink-300 hover:via-red-300 hover:to-orange-300 transition-all duration-700 font-serif italic">
                  Pinay
                </span>
                <span className="text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text hover:from-red-300 hover:via-orange-300 hover:to-yellow-300 transition-all duration-700 font-serif">
                  Mate
                </span>
                <div className="h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              {/* Live engagement metrics - improved spacing */}
              <div className="hidden lg:flex items-center space-x-3 xl:space-x-5">
                <div className="flex items-center space-x-2 bg-green-500/25 px-4 py-2 rounded-full border border-green-400/60 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-green-300 font-bold text-sm xl:text-base">
                    {onlineNow} beauties online
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-pink-500/25 px-4 py-2 rounded-full border border-pink-400/60 backdrop-blur-sm">
                  <span className="text-pink-300 font-bold text-sm xl:text-base">
                    💕 {newMatches} new matches today
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation - improved spacing */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 xl:space-x-10">
              <a
                href="#network"
                className="text-white hover:text-yellow-300 transition-all duration-300 hover:drop-shadow-lg font-medium text-sm lg:text-base xl:text-lg"
              >
                Network
              </a>
              <a
                href="#verification"
                className="text-white hover:text-yellow-300 transition-all duration-300 hover:drop-shadow-lg font-medium text-sm lg:text-base xl:text-lg"
              >
                Verification
              </a>
              <a
                href="#club"
                className="text-white hover:text-yellow-300 transition-all duration-300 hover:drop-shadow-lg font-medium text-sm lg:text-base xl:text-lg"
              >
                Club Benefits
              </a>
            </nav>

            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              {/* SheerID badge - improved visibility */}
              <div className="hidden lg:flex items-center space-x-2 bg-black/60 px-3 py-2 rounded-full border border-green-400/40">
                <img
                  src="https://via.placeholder.com/20x20/32CD32/FFFFFF?text=✓"
                  alt="SheerID"
                  className="w-5 h-5 xl:w-6 xl:h-6 animate-pulse"
                />
                <span className="text-green-300 font-medium text-sm xl:text-base">
                  100% Verified
                </span>
              </div>
              <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-full hover:from-pink-400 hover:to-red-400 transition-all duration-300 font-black shadow-lg hover:shadow-pink-400/25 transform hover:scale-105 animate-pulse text-xs sm:text-sm lg:text-base">
                <span className="hidden sm:inline">🔥 JOIN NOW - LIMITED</span>
                <span className="sm:hidden">🔥 JOIN</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Fixed spacing and visibility */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        {/* Enhanced backdrop for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>

        {/* Dynamic rotating backgrounds with attractive women */}
        <div className="absolute inset-0">
          {filipinaImages.map((image, index) => (
            <div key={index} className="absolute inset-0">
              <img
                src={image}
                alt="Beautiful verified Filipina waiting to connect"
                className={`w-full h-full object-cover transition-all duration-2000 ${
                  index === currentImageIndex
                    ? "opacity-100 scale-105"
                    : "opacity-0 scale-100"
                }`}
              />
              {/* Enhanced vignette effect for better text readability */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60"></div>
            </div>
          ))}
        </div>

        {/* Live Activity Feed - repositioned */}
        <div className="absolute top-28 sm:top-32 left-4 z-30 space-y-3 hidden xl:block max-w-xs">
          <div className="bg-black/80 border border-pink-400/60 rounded-xl p-4 backdrop-blur-sm animate-slide-in shadow-xl">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Maria online now"
                className="w-12 h-12 rounded-full object-cover border-2 border-pink-400 shadow-lg"
              />
              <div className="flex-1">
                <div className="text-white font-bold text-sm">Maria, 24</div>
                <div className="text-pink-300 text-xs">
                  💋 Online now • Manila
                </div>
                <div className="text-green-300 text-xs">
                  ⚡ Looking for serious relationship
                </div>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="bg-black/80 border border-purple-400/60 rounded-xl p-4 backdrop-blur-sm animate-slide-in delay-500 shadow-xl">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Isabella just verified"
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-400 shadow-lg"
              />
              <div className="flex-1">
                <div className="text-white font-bold text-sm">Isabella, 26</div>
                <div className="text-purple-300 text-xs">
                  ✨ Just verified • Cebu
                </div>
                <div className="text-yellow-300 text-xs">💎 Premium member</div>
              </div>
              <div className="text-xs text-purple-300 font-bold">NEW</div>
            </div>
          </div>

          <div className="bg-black/80 border border-red-400/60 rounded-xl p-4 backdrop-blur-sm animate-slide-in delay-1000 shadow-xl">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Sophia seeking connection"
                className="w-12 h-12 rounded-full object-cover border-2 border-red-400 shadow-lg"
              />
              <div className="flex-1">
                <div className="text-white font-bold text-sm">Sophia, 23</div>
                <div className="text-red-300 text-xs">
                  💕 Seeking love • Davao
                </div>
                <div className="text-orange-300 text-xs">🔥 2 likes today</div>
              </div>
              <div className="text-xs text-red-300 font-bold animate-pulse">
                HOT
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Notifications - better positioning */}
        <div className="absolute top-28 sm:top-32 right-4 lg:right-6 xl:right-8 z-30 space-y-2 sm:space-y-3 max-w-xs">
          <div className="bg-black/95 border border-green-400/70 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm backdrop-blur-md animate-slide-in shadow-xl">
            <div className="flex items-center space-x-2">
              <span className="text-green-400 text-sm sm:text-lg">💕</span>
              <span className="text-white font-bold">
                <span className="hidden sm:inline">
                  Michael just connected with Sophia!
                </span>
                <span className="sm:hidden">New match!</span>
              </span>
            </div>
            <div className="text-green-300 text-xs mt-1">
              💸 Premium match confirmed
            </div>
          </div>

          <div className="bg-black/95 border border-pink-400/70 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm backdrop-blur-md animate-slide-in delay-1000 shadow-xl">
            <div className="flex items-center space-x-2">
              <span className="text-pink-400 text-sm sm:text-lg">⚡</span>
              <span className="text-white font-bold">
                <span className="hidden sm:inline">
                  3 new premium members joined
                </span>
                <span className="sm:hidden">3 new members</span>
              </span>
            </div>
            <div className="text-pink-300 text-xs mt-1">
              🔥 Competition is heating up!
            </div>
          </div>

          <div className="bg-black/95 border border-purple-400/70 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm backdrop-blur-md animate-slide-in delay-2000 shadow-xl">
            <div className="flex items-center space-x-2">
              <span className="text-purple-400 text-sm sm:text-lg">💎</span>
              <span className="text-white font-bold">
                <span className="hidden sm:inline">
                  Limited spots filling fast!
                </span>
                <span className="sm:hidden">Spots filling!</span>
              </span>
            </div>
            <div className="text-purple-300 text-xs mt-1">
              ⏰ Only {spotsLeft} elite spots left
            </div>
          </div>
        </div>

        {/* Main content with improved spacing and visibility */}
        <div className="relative z-20 text-center text-white max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Ultra-urgent scarcity banner - Fixed spacing and visibility */}
          <div className="mb-8 sm:mb-12 lg:mb-16 inline-flex items-center justify-center space-x-3 sm:space-x-4 lg:space-x-6 bg-gradient-to-r from-red-600/60 to-pink-600/60 border-2 border-red-400/90 rounded-full px-6 py-4 sm:px-8 sm:py-5 lg:px-12 lg:py-6 backdrop-blur-md animate-pulse shadow-2xl max-w-full">
            <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-red-400 rounded-full animate-ping flex-shrink-0"></div>
            <span className="text-red-100 font-black text-sm sm:text-lg lg:text-xl xl:text-2xl text-center leading-tight">
              🚨 ALERT: Only {spotsLeft} VIP Spots Left Today!
            </span>
            <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-red-400 rounded-full animate-ping flex-shrink-0"></div>
          </div>

          {/* Main heading with better spacing */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 sm:mb-12 lg:mb-16 font-serif leading-tight text-shadow-lg">
            <span className="text-transparent bg-gradient-to-r from-pink-300 via-red-300 to-orange-300 bg-clip-text animate-pulse drop-shadow-2xl block">
              Find Your
            </span>
            <span className="text-transparent bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text drop-shadow-2xl block mt-2 sm:mt-4">
              Dream Filipina
            </span>
          </h1>

          {/* Subtitle with enhanced visibility */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 sm:mb-8 lg:mb-12 text-white font-black animate-fade-in delay-300 drop-shadow-lg bg-black/30 px-4 py-2 rounded-xl backdrop-blur-sm inline-block">
            💕 {memberCount.toLocaleString()} Verified Beauties • {onlineNow}{" "}
            Online Now
          </p>

          {/* Warning text with better contrast */}
          <div className="mb-10 sm:mb-12 lg:mb-16 max-w-6xl mx-auto bg-black/50 p-6 sm:p-8 lg:p-10 rounded-2xl backdrop-blur-md border border-white/20">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 animate-fade-in delay-500 leading-relaxed">
              <span className="text-pink-300 font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                WARNING:
              </span>{" "}
              These gorgeous verified Filipinas receive
              <span className="text-yellow-300 font-bold">
                {" "}
                50+ messages daily
              </span>
              .
            </p>
            <p className="text-red-300 font-black animate-pulse mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl">
              ⚡ Don't wait - someone else will claim your spot!
            </p>
          </div>

          {/* CTA buttons with improved spacing */}
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20">
            <button className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-8 py-5 sm:px-12 sm:py-6 md:px-16 md:py-7 lg:px-20 lg:py-8 rounded-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black hover:from-red-400 hover:via-pink-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 lg:hover:scale-110 shadow-2xl shadow-red-500/50 animate-bounce w-full sm:w-auto max-w-full">
              💖 ACCESS {onlineNow} ONLINE BEAUTIES NOW
            </button>

            <div className="text-center bg-black/40 px-6 py-4 rounded-xl backdrop-blur-sm inline-block">
              <div className="text-yellow-300 font-bold text-lg sm:text-xl md:text-2xl animate-pulse">
                ⏰ This offer expires in:
                <span className="text-red-300 font-black"> 2:47:23</span>
              </div>
            </div>
          </div>

          {/* Enhanced stats with better spacing and visibility */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center animate-fade-in delay-1000">
            <div className="transform hover:scale-105 lg:hover:scale-110 transition-transform duration-300 bg-black/60 rounded-xl p-4 sm:p-6 lg:p-8 border border-pink-400/60 backdrop-blur-md shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-pink-300 animate-pulse mb-2">
                {memberCount.toLocaleString()}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-200 font-bold mb-1">
                Verified Beauties
              </div>
              <div className="text-pink-400 text-xs sm:text-sm">
                💋 All real profiles
              </div>
            </div>

            <div className="transform hover:scale-105 lg:hover:scale-110 transition-transform duration-300 bg-black/60 rounded-xl p-4 sm:p-6 lg:p-8 border border-green-400/60 backdrop-blur-md shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-green-300 animate-pulse mb-2">
                {onlineNow}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-200 font-bold mb-1">
                Online Right Now
              </div>
              <div className="text-green-400 text-xs sm:text-sm">
                ⚡ Ready to chat
              </div>
            </div>

            <div className="transform hover:scale-105 lg:hover:scale-110 transition-transform duration-300 bg-black/60 rounded-xl p-4 sm:p-6 lg:p-8 border border-yellow-400/60 backdrop-blur-md shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-yellow-300 animate-pulse mb-2">
                94%
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-200 font-bold mb-1">
                Success Rate
              </div>
              <div className="text-yellow-400 text-xs sm:text-sm">
                💕 Find love fast
              </div>
            </div>

            <div className="transform hover:scale-105 lg:hover:scale-110 transition-transform duration-300 bg-black/60 rounded-xl p-4 sm:p-6 lg:p-8 border border-purple-400/60 backdrop-blur-md shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-300 animate-pulse mb-2">
                {spotsLeft}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-200 font-bold mb-1">
                Spots Left
              </div>
              <div className="text-red-400 text-xs sm:text-sm">
                🚨 Filling fast!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery with OnlyFans-style teasers */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-red-900/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 font-serif">
              🔥{" "}
              <span className="text-transparent bg-gradient-to-r from-pink-300 to-red-300 bg-clip-text">
                HOT
              </span>{" "}
              Members Online Now
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 sm:mb-6">
              💋 These verified beauties are waiting for YOUR message
            </p>
            <div className="bg-red-600/30 border border-red-400/60 rounded-xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 inline-block backdrop-blur-sm">
              <span className="text-red-200 font-black text-sm sm:text-base md:text-lg animate-pulse">
                ⚠️ WARNING: {onlineNow} gorgeous women online - they won't wait
                long!
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              {
                name: "Sophia",
                age: 25,
                location: "Manila",
                image:
                  "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                status: "🔥 ONLINE NOW",
                description: "Model & Entrepreneur",
                interests: "Luxury travel, Fine dining",
                messages: "47 msgs today",
                lastSeen: "Active now",
              },
              {
                name: "Isabella",
                age: 27,
                location: "Cebu",
                image:
                  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                status: "💎 VIP Member",
                description: "Doctor & Investor",
                interests: "International culture, Fitness",
                messages: "32 msgs today",
                lastSeen: "2 min ago",
              },
              {
                name: "Angelica",
                age: 24,
                location: "Davao",
                image:
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                status: "⭐ NEW TODAY",
                description: "Fashion Designer",
                interests: "Art, Photography",
                messages: "18 msgs today",
                lastSeen: "Just now",
              },
              {
                name: "Carmen",
                age: 26,
                location: "Iloilo",
                image:
                  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                status: "💕 PREMIUM",
                description: "Business Owner",
                interests: "Travel, Romance",
                messages: "23 msgs today",
                lastSeen: "Online",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative bg-black/70 rounded-2xl sm:rounded-3xl overflow-hidden border border-pink-400/40 hover:border-pink-300/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.age}, ${member.location} - Available now`}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Live status overlay */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                    <div className="bg-green-500 px-2 py-1 sm:px-3 rounded-full text-xs text-white font-bold animate-pulse">
                      {member.lastSeen}
                    </div>
                    <div className="bg-red-500 px-2 py-1 sm:px-3 rounded-full text-xs text-white font-bold">
                      {member.status}
                    </div>
                  </div>

                  {/* Message count */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/80 px-2 py-1 sm:px-3 rounded-full text-xs text-yellow-300 font-bold">
                    💬 {member.messages}
                  </div>

                  {/* Gradient overlay with info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                      {member.name}, {member.age}
                    </h3>
                    <p className="text-pink-300 text-sm mb-2 font-bold">
                      📍 {member.location}
                    </p>
                    <p className="text-gray-200 text-sm mb-2 font-semibold">
                      {member.description}
                    </p>
                    <p className="text-gray-300 text-xs mb-3 hidden sm:block">
                      {member.interests}
                    </p>

                    {/* Engagement metrics */}
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-green-300 font-bold">
                        ⚡ Very responsive
                      </span>
                      <span className="text-yellow-300 font-bold">
                        💎 Premium verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="p-3 sm:p-4 bg-gradient-to-r from-pink-900/60 to-purple-900/60">
                  <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 sm:py-3 rounded-full font-black hover:from-pink-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm">
                    💕 SEND PRIVATE MESSAGE
                  </button>
                  <div className="text-center mt-2 text-xs text-gray-300">
                    ⚠️ {Math.floor(Math.random() * 20) + 10} men viewed her
                    profile today
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Urgency CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600/30 to-pink-600/30 border border-red-400/60 rounded-2xl px-6 py-6 sm:px-8 sm:py-6 md:px-10 md:py-8 inline-block backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-red-200 font-black text-lg sm:text-xl block mb-2">
                🚨 FINAL WARNING: Only {spotsLeft} Elite Memberships Left!
              </span>
              <span className="text-yellow-300 font-bold text-sm sm:text-base md:text-lg">
                Don't let someone else get your dream girl - ACT NOW!
              </span>
            </div>
            <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-black hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-500/50 animate-pulse w-full sm:w-auto">
              🔥 CLAIM YOUR SPOT NOW - ${spotsLeft < 20 ? "199" : "99"}/MONTH
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced SheerID Verification with Desire Elements */}
      <section id="verification" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-serif">
              <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text">
                SheerID
              </span>{" "}
              Verified Beauties
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-4">
              🔒 Every Filipina is verified authentic - No fake profiles, No
              disappointments
            </p>
            <div className="text-green-300 font-semibold animate-pulse text-base sm:text-lg">
              💕 {verifiedToday} gorgeous women verified today
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-green-900/50 to-black/50 p-4 sm:p-6 rounded-lg border border-green-400/30 text-center group hover:border-green-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-400/30 transition-colors duration-300">
                  <span className="text-2xl">💰</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Income Verified
              </h3>
              <p className="text-gray-200 mb-2">
                $100K+ verified through SheerID
              </p>
              <div className="flex items-center justify-center space-x-2">
                <img
                  src="https://via.placeholder.com/80x20/32CD32/FFFFFF?text=SheerID"
                  alt="SheerID verification badge"
                  className="h-5"
                />
                <span className="text-green-300 text-sm font-medium">
                  ✓ Authenticated
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-black/50 p-4 sm:p-6 rounded-lg border border-blue-400/30 text-center group hover:border-blue-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-400/30 transition-colors duration-300">
                  <span className="text-2xl">🏢</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Employment Confirmed
              </h3>
              <p className="text-gray-200 mb-2">
                Professional status verification
              </p>
              <div className="flex items-center justify-center space-x-2">
                <img
                  src="https://via.placeholder.com/80x20/1E90FF/FFFFFF?text=SheerID"
                  alt="SheerID verification badge"
                  className="h-5"
                />
                <span className="text-blue-300 text-sm font-medium">
                  ✓ Verified
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-black/50 p-4 sm:p-6 rounded-lg border border-purple-400/30 text-center group hover:border-purple-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-400/30 transition-colors duration-300">
                  <span className="text-2xl">🆔</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Identity Authenticated
              </h3>
              <p className="text-gray-200 mb-2">
                Government ID + biometric check
              </p>
              <div className="flex items-center justify-center space-x-2">
                <img
                  src="https://via.placeholder.com/80x20/8B4513/FFFFFF?text=SheerID"
                  alt="SheerID verification badge"
                  className="h-5"
                />
                <span className="text-purple-300 text-sm font-medium">
                  ✓ Secured
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/50 to-black/50 p-4 sm:p-6 rounded-lg border border-orange-400/30 text-center group hover:border-orange-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-400/30 transition-colors duration-300">
                  <span className="text-2xl">🛡️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Background Cleared
              </h3>
              <p className="text-gray-200 mb-2">Clean record verification</p>
              <div className="flex items-center justify-center space-x-2">
                <img
                  src="https://via.placeholder.com/80x20/FF4500/FFFFFF?text=SheerID"
                  alt="SheerID verification badge"
                  className="h-5"
                />
                <span className="text-orange-300 text-sm font-medium">
                  ✓ Clear
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 sm:px-10 sm:py-4 md:px-12 rounded-full text-lg sm:text-xl font-bold hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 animate-pulse w-full sm:w-auto">
              🔥 Access Verified Filipinas Now
            </button>
          </div>
        </div>
      </section>

      {/* Network Map - Philippines to World */}
      <section id="network" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="World map"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Connect Philippines to the{" "}
              <span className="text-yellow-400">World</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Building bridges from the Philippines to 25 countries worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-yellow-900/30 to-black/50 p-6 rounded-2xl border border-yellow-500/30 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                1,247
              </div>
              <div className="text-white font-semibold mb-1">USA Members</div>
              <div className="text-gray-400 text-sm">
                🇺🇸 All 50 states covered
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-black/50 p-6 rounded-2xl border border-red-500/30 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">334</div>
              <div className="text-white font-semibold mb-1">
                Canada Members
              </div>
              <div className="text-gray-400 text-sm">🇨🇦 Coast to coast</div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-black/50 p-6 rounded-2xl border border-green-500/30 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">198</div>
              <div className="text-white font-semibold mb-1">
                Australia Members
              </div>
              <div className="text-gray-400 text-sm">🇦🇺 Major cities</div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-black/50 rounded-2xl p-8 border border-yellow-500/30 inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">
                Network Expansion Roadmap
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">
                    PinayMate - Philippines (Live)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">
                    Expanding to 50 US States
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">ThaiMate - Coming 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">VietMate - Coming 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club Membership Tiers */}
      <section id="club" className="py-20 bg-gradient-to-r from-yellow-900/20 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-serif">
            Elite Club <span className="text-yellow-400">Membership</span> Tiers
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Men's Elite Club */}
            <div className="bg-gradient-to-br from-blue-900/50 to-black/50 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-3xl font-bold text-white mb-6 text-center font-serif">
                Men's Elite Club
              </h3>

              <div className="space-y-6">
                <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-400 font-semibold">
                      🥉 Bronze Level
                    </span>
                    <span className="text-white text-2xl font-bold">
                      $50/mo
                    </span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Verified profile access</li>
                    <li>• Basic matching algorithm</li>
                    <li>• Standard customer support</li>
                  </ul>
                </div>

                <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-400 font-semibold">
                      🥇 Gold Level
                    </span>
                    <span className="text-white text-2xl font-bold">
                      $99/mo
                    </span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Priority matching + concierge</li>
                    <li>• Advanced search filters</li>
                    <li>• Monthly virtual events</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 rounded-lg border border-purple-500/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-400 font-semibold">
                      💎 Diamond Level
                    </span>
                    <span className="text-white text-2xl font-bold">
                      $199/mo
                    </span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Personal relationship advisor</li>
                    <li>• Exclusive events + travel assistance</li>
                    <li>• VIP concierge service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Filipina Network */}
            <div className="bg-gradient-to-br from-pink-900/50 to-black/50 p-8 rounded-2xl border border-pink-500/30">
              <h3 className="text-3xl font-bold text-white mb-6 text-center font-serif">
                Filipina Network
              </h3>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 p-4 rounded-lg border border-pink-500/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-pink-400 font-semibold">
                      ⭐ Star Status
                    </span>
                    <span className="text-green-400 text-2xl font-bold">
                      FREE
                    </span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• 7+ rating - Full access</li>
                    <li>• Premium profile visibility</li>
                    <li>• VIP event invitations</li>
                  </ul>
                </div>

                <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-400 font-semibold">
                      🌟 Rising Star
                    </span>
                    <span className="text-white text-2xl font-bold">
                      $25/mo
                    </span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• 6+ rating - Partial access</li>
                    <li>• Standard profile features</li>
                    <li>• Community events</li>
                  </ul>
                </div>

                <div className="bg-black/30 p-4 rounded-lg border border-blue-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400 font-semibold">
                      👑 VIP Ambassador
                    </span>
                    <span className="text-yellow-400 text-xl font-bold">
                      Earn Rewards
                    </span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Referral rewards program</li>
                    <li>• Exclusive ambassador benefits</li>
                    <li>• Monthly bonus opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-12 py-4 rounded-full text-xl font-bold hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 animate-pulse">
              🔥 Join Elite Club Now
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories - Club Member Spotlights */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-5xl md:text-7xl font-black text-center text-white mb-16 font-serif">
            💕 They Found Their{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text">
              SOULMATE
            </span>
          </h2>
          <p className="text-center text-2xl text-gray-200 mb-12">
            🔥 Real success stories from men who took action (and you should
            too!)
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Michael & Sophia",
                route: "Manila → Chicago",
                image:
                  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                story:
                  "Found my DREAM WOMAN in 3 days! Sophia is stunning, intelligent, and loving. Every penny was worth it. Don't wait like I almost did!",
                timeline: "💕 Matched in 3 days • Engaged in 6 months",
                verification: "✅ Verified Elite Success #1,247",
                badge: "💎 Diamond Success",
                investment: "Investment: $599 • Value: PRICELESS",
              },
              {
                name: "David & Maria",
                route: "Cebu → Texas",
                image:
                  "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                story:
                  "LIFE CHANGING! Maria is not just gorgeous but brilliant and caring. Best decision I EVER made. My only regret? Not joining sooner!",
                timeline: "💖 Connected in 1 week • Living together now",
                verification: "✅ Verified Elite Success #1,156",
                badge: "🔥 Hot Success",
                investment: "Investment: $299 • Result: MARRIED!",
              },
              {
                name: "James & Isabella",
                route: "Quezon City → California",
                image:
                  "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                story:
                  "INSTANT CONNECTION! Isabella exceeded every expectation. Beautiful, successful, perfect match. Already planning our wedding - THANK YOU PinayMate!",
                timeline: "⚡ Love at first chat • Married in 8 months",
                verification: "✅ Verified Elite Success #987",
                badge: "👑 Royal Romance",
                investment: "Investment: $199 • Outcome: JACKPOT!",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-900/40 to-black/70 p-8 rounded-3xl border border-pink-400/40 hover:border-pink-300/80 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="relative mb-6">
                  <img
                    src={story.image}
                    alt={`Success story: ${story.name}`}
                    className="w-full h-64 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute top-4 right-4 bg-black/90 px-4 py-2 rounded-full text-sm text-pink-300 font-black">
                    {story.badge}
                  </div>
                </div>

                <h4 className="text-2xl font-black text-white mb-2">
                  {story.name}
                </h4>
                <div className="text-pink-300 text-sm mb-3 font-bold">
                  {story.route}
                </div>

                <p className="text-gray-200 text-sm mb-6 italic font-bold leading-relaxed">
                  "{story.story}"
                </p>

                <div className="space-y-2 text-sm">
                  <div className="text-green-300 font-bold">
                    {story.timeline}
                  </div>
                  <div className="text-purple-300 font-semibold">
                    {story.verification}
                  </div>
                  <div className="text-yellow-300 font-bold text-xs bg-yellow-500/20 px-3 py-1 rounded-full inline-block">
                    {story.investment}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-600/30 to-red-600/30 border border-pink-400/60 rounded-2xl px-10 py-6 inline-block backdrop-blur-sm">
              <span className="text-pink-200 font-black text-xl block mb-2">
                💕 500+ Success Stories • 94% Find Love in 30 Days
              </span>
              <span className="text-yellow-300 font-bold text-lg">
                Your perfect Filipina might be taken while you hesitate!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form - Club Admission */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-serif">
              Apply for <span className="text-yellow-400">Elite</span> Club
              Admission
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-4">
              Join the most exclusive Filipino-International network
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="text-green-400">127 applications this week</div>
              <div className="text-yellow-400">{spotsLeft} spots remaining</div>
            </div>
          </div>

          {/* Progress Steps - responsive */}
          <div className="mb-8 sm:mb-12 flex justify-center overflow-x-auto">
            <div className="flex items-center space-x-2 sm:space-x-4 bg-black/50 rounded-full px-4 py-3 sm:px-6 sm:py-4 md:px-8 border border-yellow-500/30 min-w-max">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm">
                  1
                </div>
                <span className="text-white text-xs sm:text-sm">
                  Basic Info
                </span>
              </div>
              <div className="w-4 sm:w-8 h-0.5 bg-gray-600"></div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  2
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">
                  SheerID Verification
                </span>
              </div>
              <div className="w-4 sm:w-8 h-0.5 bg-gray-600"></div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  3
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">
                  Payment & Access
                </span>
              </div>
            </div>
          </div>

          <form className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 sm:p-4 bg-gray-900 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 sm:p-4 bg-gray-900 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-sm sm:text-base"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 sm:p-4 bg-gray-900 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-sm sm:text-base"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <select className="w-full p-3 sm:p-4 bg-gray-900 border border-yellow-500/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none text-sm sm:text-base">
                <option>Select Gender</option>
                <option>Male (Elite Club)</option>
                <option>Female (Filipina Network)</option>
              </select>
              <input
                type="number"
                placeholder="Age"
                className="w-full p-3 sm:p-4 bg-gray-900 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* SheerID Integration Section - responsive */}
            <div className="bg-gradient-to-r from-green-900/30 to-black/50 p-4 sm:p-6 rounded-lg border border-green-500/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <img
                  src="https://via.placeholder.com/100x25/32CD32/FFFFFF?text=SheerID"
                  alt="SheerID"
                  className="h-5 sm:h-6"
                />
                <span>Verification Required</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-white mb-2 text-sm sm:text-base">
                    Annual Income (USD)
                  </label>
                  <input
                    type="text"
                    placeholder="$100,000+"
                    className="w-full p-2.5 sm:p-3 bg-gray-900 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none text-sm sm:text-base"
                  />
                  <div className="text-green-400 text-xs mt-1">
                    ✓ Will be verified via SheerID
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 text-sm sm:text-base">
                    Employment Status
                  </label>
                  <select className="w-full p-2.5 sm:p-3 bg-gray-900 border border-green-500/30 rounded-lg text-white focus:border-green-400 focus:outline-none text-sm sm:text-base">
                    <option>Full-time Professional</option>
                    <option>Business Owner</option>
                    <option>Executive</option>
                    <option>Entrepreneur</option>
                  </select>
                  <div className="text-green-400 text-xs mt-1">
                    ✓ Will be verified via SheerID
                  </div>
                </div>
              </div>
            </div>

            {/* Document Upload - responsive */}
            <div>
              <label className="block text-white mb-2 text-sm sm:text-base">
                Upload Verification Documents
              </label>
              <div className="border-2 border-dashed border-yellow-500/30 rounded-lg p-6 sm:p-8 text-center hover:border-yellow-400/50 transition">
                <input
                  type="file"
                  multiple
                  className="hidden"
                  id="document-upload"
                />
                <label htmlFor="document-upload" className="cursor-pointer">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📄</div>
                  <div className="text-white font-semibold mb-2 text-sm sm:text-base">
                    Upload Documents
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mb-2">
                    Government ID, Pay Stub, Professional License
                  </div>
                  <div className="text-yellow-400 text-xs mt-2">
                    Secured by SheerID encryption
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-black py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:from-yellow-400 hover:to-orange-500 transition transform hover:scale-105 shadow-lg shadow-yellow-500/25"
            >
              Begin Elite Verification Process
            </button>

            <div className="text-center text-gray-400 text-xs sm:text-sm space-y-1">
              <p>🔒 All information encrypted and secured by SheerID</p>
              <p>⚡ Verification typically completed within 24-48 hours</p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer - responsive */}
      <footer className="bg-black py-8 sm:py-12 border-t border-yellow-500/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-serif">
                <span className="text-yellow-400">Pinay</span>Mate
              </h3>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                The elite Filipino-International network expanding worldwide.
              </p>
              <div className="text-xs sm:text-sm text-gray-500">
                Featured in Forbes, TechCrunch, Bloomberg
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Network Expansion
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">●</span>
                  <span>PinayMate (Live)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-yellow-400">●</span>
                  <span>ThaiMate (2025)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">●</span>
                  <span>VietMate (2026)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Elite Program
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Referral Rewards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Ambassador Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    VIP Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Connect With Us
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Instagram Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    TikTok Content
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Elite Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Press & Media
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                &copy; 2024 PinayMate Elite Network. All rights reserved.
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/80x20/32CD32/FFFFFF?text=SheerID"
                    alt="SheerID"
                    className="h-3 sm:h-4"
                  />
                  <span className="text-green-400">Verification Partner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/60x20/6B73FF/FFFFFF?text=Stripe"
                    alt="Stripe"
                    className="h-3 sm:h-4"
                  />
                  <span className="text-blue-400">Payment Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
