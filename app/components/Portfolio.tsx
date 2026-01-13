'use client'

import { useState } from 'react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const projects = [
    // Kitchen Projects
    {
      id: 1,
      title: "Modern Modular Kitchen",
      location: "Hyderabad",
      category: "Kitchen",
      image: "/services/kitchen-1.jpeg"
    },
    {
      id: 2,
      title: "Contemporary Kitchen Design",
      location: "Hyderabad",
      category: "Kitchen",
      image: "/services/kitchen-2.jpeg"
    },
    {
      id: 3,
      title: "Luxury Kitchen Interior",
      location: "Hyderabad",
      category: "Kitchen",
      image: "/services/kitchen-3.jpeg"
    },
    // Bedroom Projects
    {
      id: 4,
      title: "Master Bedroom Suite",
      location: "Hyderabad",
      category: "Bedroom",
      image: "/services/bedroom-1.jpeg"
    },
    {
      id: 5,
      title: "Contemporary Bedroom",
      location: "Hyderabad",
      category: "Bedroom",
      image: "/services/bedroom-2.jpeg"
    },
    {
      id: 6,
      title: "Elegant Bedroom Design",
      location: "Hyderabad",
      category: "Bedroom",
      image: "/services/bedroom-3.jpeg"
    },
    // Office Projects
    {
      id: 7,
      title: "Corporate Office Space",
      location: "Hyderabad",
      category: "Office",
      image: "/services/office-1.webp"
    },
    {
      id: 8,
      title: "Modern Workspace",
      location: "Hyderabad",
      category: "Office",
      image: "/services/office-2.jpeg"
    },
    {
      id: 9,
      title: "Executive Office Interior",
      location: "Hyderabad",
      category: "Office",
      image: "/services/office-3.webp"
    },
    // Pooja Room Projects
    {
      id: 10,
      title: "Traditional Pooja Room",
      location: "Hyderabad",
      category: "Pooja",
      image: "/services/pooja-1.jpg"
    },
    {
      id: 11,
      title: "Modern Pooja Interior",
      location: "Hyderabad",
      category: "Pooja",
      image: "/services/pooja-2.jpg"
    },
    {
      id: 12,
      title: "Sacred Space Design",
      location: "Hyderabad",
      category: "Pooja",
      image: "/services/pooja-3.jpeg"
    },
    // TV Unit Projects
    {
      id: 13,
      title: "Entertainment Unit Design",
      location: "Hyderabad",
      category: "TV Unit",
      image: "/services/tv-unit-1.jpeg"
    },
    {
      id: 14,
      title: "Modern TV Wall Unit",
      location: "Hyderabad",
      category: "TV Unit",
      image: "/services/tv-unit-2.jpeg"
    },
    {
      id: 15,
      title: "Contemporary Media Center",
      location: "Hyderabad",
      category: "TV Unit",
      image: "/services/tv-unit-3.jpeg"
    }
  ]

  const categories = ['All', 'Kitchen', 'Bedroom', 'Office', 'Pooja', 'TV Unit']
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Recent Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12">
            Discover our latest interior design projects showcasing innovative solutions and exceptional craftsmanship across various spaces.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gray-900 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-1 leading-tight">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{project.location}</p>
                  <span className="inline-block px-2 py-1 bg-white/20 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}