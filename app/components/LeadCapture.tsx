'use client'

import { useState } from 'react'

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: ''
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters and spaces'
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number'
    }
    
    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    } else if (formData.location.trim().length < 3) {
      newErrors.location = 'Location must be at least 3 characters'
    }
    
    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: formData.name.trim().replace(/[<>"'&]/g, ''),
      phone: formData.phone.replace(/\D/g, ''),
      location: formData.location.trim().replace(/[<>"'&]/g, ''),
      service: formData.service
    }
    
    const message = `Hi, I want a free site visit!

Name: ${sanitizedData.name}
Phone: ${sanitizedData.phone}
Location: ${sanitizedData.location}
Service Required: ${sanitizedData.service}

Please schedule a site visit at your earliest convenience.`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919603199219&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({ name: '', phone: '', location: '', service: '' })
    setErrors({})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lead-capture-bg.jpg')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200 leading-relaxed">
              Get a free consultation and site visit. Our experts will help you design the perfect interior solution for your home or office.
            </p>
            
            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg">Free Design Consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg">Detailed Project Estimate</span>
              </div>
              
            </div>
          </div>
          
          {/* Right Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl order-1 lg:order-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
              Get Free Site Visit
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={50}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={15}
                  pattern="[6-9][0-9]{9}"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location *"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
              </div>
              
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-white ${
                    errors.service ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Service Required *</option>
                  <option value="Modular Kitchen">Modular Kitchen</option>
                  <option value="Bedroom Interior">Bedroom Interior</option>
                  <option value="Wardrobes">Wardrobes</option>
                  <option value="TV Units">TV Units</option>
                  <option value="Office Interior">Office Interior</option>
                  <option value="Custom Furniture">Custom Furniture</option>
                  <option value="Complete Interior">Complete Interior</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Site Visit
              </button>
            </form>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              * We'll contact you within 24 hours to schedule your visit
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}