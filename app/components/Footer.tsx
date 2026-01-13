export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-amber-400">
              CraftSpace Interiors
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              We are passionate about creating beautiful, functional spaces that reflect your personality and lifestyle. With over 10 years of experience, we bring your interior dreams to life.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3">
              <div className="text-amber-400 font-semibold mb-2 text-sm md:text-base">Adimula Anil Chary</div>
              <div className="flex items-center gap-2 md:gap-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="text-sm md:text-base">+91 96031 99219</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>info@craftspaceinteriors.com</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>123 Design Street, Bandra West, Mumbai - 400050</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#why-choose-us" className="text-gray-300 hover:text-white transition-colors duration-300">Why Choose Us</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors duration-300">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Modular Kitchen</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Bedroom Interior</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Wardrobes</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">TV Units</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Office Interior</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Custom Furniture</a></li>
            </ul>
          </div>
        </div>
        
        {/* Google Maps */}
        <div className="mt-8 md:mt-12">
          <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-amber-400">Find Us</h4>
          <div className="bg-gray-800 rounded-lg p-3 md:p-4 h-48 md:h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8267739788894!2d72.8200!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
        
        {/* Social Media & WhatsApp */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-gray-300 text-sm md:text-base">Follow us:</span>
              <a href="#" className="bg-gray-800 hover:bg-amber-500 p-2 rounded-full transition-colors duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.036 6.803c-1.694 0-3.069 1.375-3.069 3.069s1.375 3.069 3.069 3.069 3.069-1.375 3.069-3.069-1.375-3.069-3.069-3.069zm0 5.064c-1.101 0-1.995-.894-1.995-1.995s.894-1.995 1.995-1.995 1.995.894 1.995 1.995-.894 1.995-1.995 1.995z"/>
                  <path d="M17.678 6.516c0 .394-.32.714-.714.714s-.714-.32-.714-.714.32-.714.714-.714.714.32.714.714z"/>
                  <path d="M12.036 3.803c2.014 0 2.252.008 3.046.044.735.033 1.135.156 1.401.259.352.137.603.301.867.565.264.264.428.515.565.867.103.266.226.666.259 1.401.036.794.044 1.032.044 3.046s-.008 2.252-.044 3.046c-.033.735-.156 1.135-.259 1.401-.137.352-.301.603-.565.867-.264.264-.515.428-.867.565-.266.103-.666.226-1.401.259-.794.036-1.032.044-3.046.044s-2.252-.008-3.046-.044c-.735-.033-1.135-.156-1.401-.259-.352-.137-.603-.301-.867-.565-.264-.264-.428-.515-.565-.867-.103-.266-.226-.666-.259-1.401-.036-.794-.044-1.032-.044-3.046s.008-2.252.044-3.046c.033-.735.156-1.135.259-1.401.137-.352.301-.603.565-.867.264-.264.515-.428.867-.565.266-.103.666-.226 1.401-.259.794-.036 1.032-.044 3.046-.044zm0-1.074c-2.048 0-2.305.009-3.109.045-.804.037-1.354.166-1.834.354-.497.193-.919.451-1.338.87-.419.419-.677.841-.87 1.338-.188.48-.317 1.03-.354 1.834-.036.804-.045 1.061-.045 3.109s.009 2.305.045 3.109c.037.804.166 1.354.354 1.834.193.497.451.919.87 1.338.419.419.841.677 1.338.87.48.188 1.03.317 1.834.354.804.036 1.061.045 3.109.045s2.305-.009 3.109-.045c.804-.037 1.354-.166 1.834-.354.497-.193.919-.451 1.338-.87.419-.419.677-.841.87-1.338.188-.48.317-1.03.354-1.834.036-.804.045-1.061.045-3.109s-.009-2.305-.045-3.109c-.037-.804-.166-1.354-.354-1.834-.193-.497-.451-.919-.87-1.338-.419-.419-.841-.677-1.338-.87-.48-.188-1.03-.317-1.834-.354-.804-.036-1.061-.045-3.109-.045z"/>
                </svg>
              </a>
            </div>
            
            {/* WhatsApp Button */}
            <a 
              href={`https://api.whatsapp.com/send?phone=919603199219&text=${encodeURIComponent('Hi, I\'m interested in your interior design services!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          
          {/* Copyright */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="text-xs md:text-sm">&copy; 2024 CraftSpace Interiors by Adimula Anil Chary. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}