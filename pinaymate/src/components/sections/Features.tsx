import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2d3748] via-[#1a202c] to-[#283040]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 font-roboto leading-tight">
            Why Choose{" "}
            <span className="text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text">
              PinayMate
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-[#8D99B2] leading-relaxed max-w-3xl mx-auto font-roboto px-4">
            Experience the most advanced Filipino dating platform with
            cutting-edge features designed to help you find genuine connections
            and lasting relationships.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {/* Feature 1: Advanced Matching Algorithm - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="flex-shrink-0 order-2 lg:order-1">
              <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-gradient-to-br from-[#8D99B2]/20 to-[#283040]/40 rounded-2xl md:rounded-3xl p-3 md:p-4 backdrop-blur-sm border border-[#F4376D]/20">
                <div className="w-full h-96 bg-white rounded-2xl overflow-hidden relative">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-[#283040] font-roboto">
                        Advanced Matching
                      </h3>
                      <div className="w-6 h-6 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 p-4 rounded-xl border border-[#F4376D]/20">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              97%
                            </span>
                          </div>
                          <span className="font-semibold text-[#283040] text-sm">
                            Compatibility Match
                          </span>
                        </div>
                        <p className="text-xs text-[#8D99B2]">
                          Based on 50+ compatibility factors
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 p-4 rounded-xl border border-[#A855F7]/20">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              AI
                            </span>
                          </div>
                          <span className="font-semibold text-[#283040] text-sm">
                            Smart Algorithm
                          </span>
                        </div>
                        <p className="text-xs text-[#8D99B2]">
                          Learning your preferences daily
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="w-full bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white py-2 rounded-full text-sm font-bold font-roboto">
                        Find Your Match
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-roboto">
                Advanced Matching
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#F4376D] to-[#A855F7] bg-clip-text">
                  Algorithm
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#8D99B2] leading-relaxed font-roboto px-4 lg:px-0">
                Our advanced matching algorithm utilizes a combination of user
                preferences, interests, and compatibility factors to suggest
                highly compatible matches. Say goodbye to endless scrolling and
                let our algorithm do the work of finding your ideal connections.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-lg transform hover:scale-105 font-roboto text-sm md:text-base">
                  🔍 Find Your Match
                </button>
              </div>
            </div>
          </div>

          {/* Feature 2: Rich Profile Customization - Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-roboto">
                Rich Profile
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#F4376D] to-[#3B82F6] bg-clip-text">
                  Customization
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#8D99B2] leading-relaxed font-roboto px-4 lg:px-0">
                Personalize your profile with our extensive customization
                options. Showcase your personality, interests, and lifestyle
                through photos, videos, and detailed bio sections. Let your
                unique self shine and attract like-minded individuals who
                resonate with your passions.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-[#F4376D] via-[#3B82F6] to-[#A855F7] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-lg transform hover:scale-105 font-roboto text-sm md:text-base">
                  ✨ Create Your Profile
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 order-1 lg:order-2">
              <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-gradient-to-br from-[#8D99B2]/20 to-[#283040]/40 rounded-2xl md:rounded-3xl p-3 md:p-4 backdrop-blur-sm border border-[#F4376D]/20">
                <div className="w-full h-96 bg-white rounded-2xl overflow-hidden relative">
                  <div className="p-4">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">MJ</span>
                      </div>
                      <h3 className="font-bold text-[#283040] font-roboto">
                        Maria, 24
                      </h3>
                      <p className="text-xs text-[#8D99B2]">
                        📍 Manila, Philippines
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 p-2 rounded-lg border border-[#F4376D]/20">
                        <p className="text-xs font-semibold text-[#283040] mb-1">
                          About Me
                        </p>
                        <p className="text-xs text-[#8D99B2]">
                          Love traveling, cooking, and family time 💕
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 p-2 rounded-lg border border-[#A855F7]/20">
                        <p className="text-xs font-semibold text-[#283040] mb-1">
                          Interests
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <span className="bg-[#F4376D] text-white px-2 py-1 rounded-full text-xs">
                            Cooking
                          </span>
                          <span className="bg-[#A855F7] text-white px-2 py-1 rounded-full text-xs">
                            Travel
                          </span>
                          <span className="bg-[#3B82F6] text-white px-2 py-1 rounded-full text-xs">
                            Music
                          </span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#F4376D]/10 p-2 rounded-lg border border-[#3B82F6]/20">
                        <p className="text-xs font-semibold text-[#283040] mb-1">
                          Looking For
                        </p>
                        <p className="text-xs text-[#8D99B2]">
                          Serious relationship & family
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-full bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white py-2 rounded-full text-xs font-bold font-roboto">
                        💕 Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Real-Time Chat and Messaging - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="flex-shrink-0 order-2 lg:order-1">
              <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-gradient-to-br from-[#8D99B2]/20 to-[#283040]/40 rounded-2xl md:rounded-3xl p-3 md:p-4 backdrop-blur-sm border border-[#A855F7]/20">
                <div className="w-full h-96 bg-[#283040] rounded-2xl overflow-hidden relative">
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full"></div>
                      <span className="text-white font-bold text-sm font-roboto">
                        Messages
                      </span>
                      <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex-shrink-0"></div>
                        <div className="bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white p-2 rounded-lg text-xs font-roboto max-w-[200px]">
                          Hi! I loved your profile 😊 How's your day going?
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 justify-end">
                        <div className="bg-[#8D99B2] text-white p-2 rounded-lg text-xs font-roboto max-w-[200px]">
                          Thank you! Having a great day. Love your photos! 💕
                        </div>
                        <div className="w-8 h-8 bg-[#8D99B2] rounded-full flex-shrink-0"></div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex-shrink-0"></div>
                        <div className="bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white p-2 rounded-lg text-xs font-roboto max-w-[200px]">
                          Would you like to video chat later? 📹
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="inline-flex items-center space-x-1 text-green-400 text-xs font-roboto">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Online now</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center space-x-2 bg-[#1a202c] rounded-full p-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent text-white text-xs placeholder-gray-400 outline-none font-roboto"
                      />
                      <div className="w-6 h-6 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-roboto">
                Real-Time Chat and
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#A855F7] to-[#F4376D] bg-clip-text">
                  Messaging
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#8D99B2] leading-relaxed font-roboto px-4 lg:px-0">
                Stay connected with your matches through our real-time chat and
                messaging system. Enjoy seamless conversations, share photos and
                videos, and get to know each other at your best pace. Our
                intuitive interface makes it easy to strike up meaningful
                connections and build connections that last.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-[#A855F7] via-[#F4376D] to-[#3B82F6] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-lg transform hover:scale-105 font-roboto text-sm md:text-base">
                  💬 Start Chatting
                </button>
              </div>
            </div>
          </div>

          {/* Feature 4: SheerID Verified Users - Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-roboto">
                SheerID
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7] bg-clip-text">
                  Verified Users
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#8D99B2] leading-relaxed font-roboto px-4 lg:px-0">
                Every member undergoes comprehensive SheerID verification
                including identity, income, and background checks. Connect with
                confidence knowing all profiles are 100% authentic with no fake
                accounts or catfish profiles.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#F4376D] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-lg transform hover:scale-105 font-roboto text-sm md:text-base">
                  🛡️ Get Verified Now
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 order-1 lg:order-2">
              <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-gradient-to-br from-[#8D99B2]/20 to-[#283040]/40 rounded-2xl md:rounded-3xl p-3 md:p-4 backdrop-blur-sm border border-[#3B82F6]/20">
                <div className="w-full h-96 bg-white rounded-2xl overflow-hidden relative">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-[#283040] font-roboto">
                        Verified Profiles
                      </h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-bold text-green-600">
                          SheerID
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[#283040] text-sm">
                            Identity Verified
                          </p>
                          <p className="text-xs text-[#8D99B2]">
                            Government ID confirmed
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[#283040] text-sm">
                            Income Verified
                          </p>
                          <p className="text-xs text-[#8D99B2]">
                            Financial status confirmed
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[#283040] text-sm">
                            Background Check
                          </p>
                          <p className="text-xs text-[#8D99B2]">
                            Clean record verified
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <span className="text-xs text-green-600 font-bold">
                        ✅ 100% Authentic Profiles
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
