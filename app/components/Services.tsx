'use client'

import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Services() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2)
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: "Modular Kitchen",
      description: "Custom-designed modular kitchens with premium finishes and smart storage solutions.",
      images: ["/services/kitchen-1.jpeg", "/services/kitchen-2.jpeg", "/services/kitchen-3.jpeg"]
    },
    {
      title: "Bedroom Interior",
      description: "Complete bedroom makeovers with custom furniture and elegant design aesthetics.",
      images: ["/services/bedroom-1.jpeg", "/services/bedroom-2.jpeg", "/services/bedroom-3.jpeg"]
    },
    {
      title: "Pooja Interior",
      description: "Sacred spaces designed with traditional aesthetics and modern functionality for your spiritual needs.",
      images: ["/services/pooja-1.jpg", "/services/pooja-2.jpg", "/services/pooja-3.jpeg"]
    },
    {
      title: "TV Units",
      description: "Stylish entertainment units that blend functionality with contemporary design.",
      images: ["/services/tv-unit-1.jpeg", "/services/tv-unit-2.jpeg", "/services/tv-unit-3.jpeg"]
    },
    {
      title: "Office & Shop Interiors",
      description: "Professional workspace designs that enhance productivity and brand image.",
      images: ["/services/office-1.webp", "/services/office-2.jpeg", "/services/office-3.webp"]
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we deliver exceptional interior solutions tailored to your lifestyle.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 transition-all duration-1000 delay-300 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {services.map((service, index) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.1)
            return (
              <div 
                key={index}
                ref={cardRef}
                className={`group bg-white transition-all duration-700 ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
              {/* Large Hero Image */}
              <div className="relative h-64 md:h-72 overflow-hidden rounded-lg mb-6">
                {service.images.map((image, imgIndex) => (
                  <img 
                    key={imgIndex}
                    src={image} 
                    alt={`${service.title} ${imgIndex + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${
                      currentImageIndex === imgIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Content Section */}
              <div className="px-1">
                {/* Small Uppercase Label */}
                <div className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-3">
                  INTERIOR DESIGN
                </div>
                
                {/* Large Bold Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                
                {/* Description Paragraph */}
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
              </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
