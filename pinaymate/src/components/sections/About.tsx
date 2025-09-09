import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#F4376D] text-sm font-bold tracking-wider uppercase font-roboto">
                ABOUT US
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#283040] leading-tight font-roboto">
              Connecting Hearts,
              <br />
              <span className="italic">Building Relationships</span>
            </h2>

            <p className="text-lg text-[#8D99B2] leading-relaxed font-roboto">
              At PinayMate, we believe in the power of connection. Our mission
              is to bring people together, creating a community where meaningful
              relationships can thrive. We understand that in today's fast-paced
              world, it can be challenging to forge genuine connections amidst
              the noise and distractions. That's why we've built a platform that
              goes beyond superficial interactions, focusing on the core values
              of authenticity, compatibility, and shared experiences.
            </p>

            <button className="bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 shadow-xl transform hover:scale-105 font-roboto">
              Find Your Match
            </button>
          </div>

          {/* Right Content - Connection Network Visualization */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-96 h-96">
              {/* Central Connection Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-32 h-32 bg-white rounded-full border-4 border-[#F4376D] shadow-2xl flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 384 384"
              >
                <defs>
                  <linearGradient
                    id="connectionGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#F4376D" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Curved connection lines */}
                <path
                  d="M192 192 Q120 120 80 80"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M192 192 Q264 120 304 80"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M192 192 Q120 264 80 304"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M192 192 Q264 264 304 304"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M192 192 Q192 120 192 80"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>

              {/* Profile Circles */}
              <div className="absolute top-8 left-8">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Member"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>

              <div className="absolute top-8 right-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Member"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>

              <div className="absolute bottom-8 left-8">
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Member"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>

              <div className="absolute bottom-8 right-8">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Member"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>

              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <img
                  src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Member"
                  className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>

              {/* Floating Hearts */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 animate-pulse">
                <div className="w-8 h-8 bg-[#F4376D] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-16 left-1/4 animate-bounce delay-300">
                <div className="w-6 h-6 bg-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-1/4 right-1/4 animate-pulse delay-700">
                <div className="w-4 h-4 bg-[#3B82F6] rounded-full flex items-center justify-center">
                  <svg
                    className="w-2 h-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
