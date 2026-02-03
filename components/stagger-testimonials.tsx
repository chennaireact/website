"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Tech Lead at Zoho",
    content: "Chennai React has been instrumental in building our community. The meetups are well-organized and the speakers are top-notch!",
    avatar: "👨‍💻",
  },
  {
    name: "Priya Subramanian",
    role: "Senior Developer at Freshworks",
    content: "Best React community in Chennai! I've learned so much from the workshops and networking events. Highly recommended for all React developers.",
    avatar: "👩‍💻",
  },
  {
    name: "Karthik Venkatesh",
    role: "Frontend Engineer at PayPal",
    content: "The quality of talks and the passionate community make Chennai React meetups a must-attend for anyone serious about React development.",
    avatar: "👨‍🎓",
  },
  {
    name: "Divya Ramesh",
    role: "Full Stack Developer at Thoughtworks",
    content: "Amazing community with great energy! The hands-on sessions have helped me level up my React skills significantly.",
    avatar: "👩‍🔬",
  },
  {
    name: "Arun Prakash",
    role: "CTO at StartupTN",
    content: "Chennai React is doing fantastic work in nurturing the tech community. The knowledge sharing and collaboration is unmatched!",
    avatar: "🧑‍💼",
  },
  {
    name: "Nikhil Kumar",
    role: "CTO at StartupTN",
    content: "Chennai React is doing fantastic work in nurturing the tech community. The knowledge sharing and collaboration is unmatched!",
    avatar: "🧑‍💼",
  },
  {
    name: "Kumar",
    role: "CTO at StartupTN",
    content: "Chennai React is doing fantastic work in nurturing the tech community. The knowledge sharing and collaboration is unmatched!",
    avatar: "🧑‍💼",
  },
  {
    name: "Kumaran",
    role: "CTO at StartupTN",
    content: "Chennai React is doing fantastic work in nurturing the tech community. The knowledge sharing and collaboration is unmatched!",
    avatar: "🧑‍💼",
  },
  {
    name: "Ritesh",
    role: "CTO at StartupTN",
    content: "Chennai React is doing fantastic work in nurturing the tech community. The knowledge sharing and collaboration is unmatched!",
    avatar: "🧑‍💼",
  },
  {
    name: "Ritesh S",
    role: "CTO at StartupTN",
    content: "Chennai React is doing fantastic work in nurturing the tech community. The knowledge sharing and collaboration is unmatched!",
    avatar: "🧑‍💼",
  },
];

export function StaggerTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Calculate position relative to active card
  const getCardPosition = (index: number) => {
    let diff = index - activeIndex;
    const half = Math.floor(testimonials.length / 2);

    // Wrap around for infinite effect
    if (diff > half) {
      diff -= testimonials.length;
    } else if (diff < -half) {
      diff += testimonials.length;
    }

    return diff;
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-white via-orange-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">What Our Community Says</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">Hear from developers who are part of Chennai's most vibrant React community</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mx-auto h-[450px] w-full">
          <div className="relative flex h-full items-center justify-center overflow-hidden">
            {testimonials.map((testimonial, index) => {
              const position = getCardPosition(index);
              const isActive = position === 0;
              const absPosition = Math.abs(position);

              // Calculate dynamic spacing based on viewport and number of cards
              const cardSpacing = typeof window !== "undefined" ? Math.min(window.innerWidth / (testimonials.length + 1), 320) : 280;

              return (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer"
                  initial={false}
                  animate={{
                    x: position * cardSpacing,
                    scale: isActive ? 1.15 : Math.max(0.7, 1 - absPosition * 0.15),
                    opacity: 1,
                    zIndex: isActive ? 50 : 40 - absPosition,
                    rotateY: position * -8, // Subtler 3D rotation for full carousel
                    filter: isActive ? "blur(0px)" : `blur(1.5px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                  }}
                  onClick={() => handleCardClick(index)}
                  style={{
                    width: "340px",
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl p-10 shadow-2xl transition-all duration-500 ${
                      isActive ? "bg-linear-to-br from-orange-500 to-orange-600 text-white" : "bg-white/90 text-gray-900 backdrop-blur-sm"
                    }`}
                    style={{
                      minHeight: "320px",
                      border: isActive ? "none" : "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Avatar */}

                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full text-3xl shadow-lg ${isActive ? "bg-white/20" : "bg-orange-100"}`}
                      >
                        {testimonial.avatar}
                      </div>

                      <div>
                        <h3 className={`text-xl font-bold ${isActive ? "text-white" : "text-gray-900"}`}>{testimonial.name}</h3>

                        <p className={`text-sm ${isActive ? "text-orange-100" : "text-gray-600"}`}>{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Content */}

                    <p className={`text-lg leading-relaxed ${isActive ? "text-white" : "text-gray-700"}`}>"{testimonial.content}"</p>

                    {/* Attribution */}
                    <div>
                      <p className={`text-sm ${isActive ? "text-white/90" : "text-gray-600"}`}>
                        - {testimonial.name}, {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <button
            onClick={handlePrevious}
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl ring-1 ring-gray-200 transition-all hover:scale-110 hover:bg-orange-500 hover:text-white hover:ring-orange-500 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            onClick={handleNext}
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl ring-1 ring-gray-200 transition-all hover:scale-110 hover:bg-orange-500 hover:text-white hover:ring-orange-500 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      </div>
    </section>
  );
}
