import React, { useState, useEffect } from 'react'; // Importar useState y useEffect
import { ChevronLeft, ChevronRight, HardDrive, ArrowLeftRight, RefreshCw, Download, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import ChatBotScript from './ChatBotScript'; // Asegúrate de que la ruta sea correcta

const Navbar = () => (
  <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="text-2xl font-bold flex items-center">
        <HardDrive className="mr-2" />
        OSSolutions Pro
      </a>
      <div className="space-x-6">
        <a href="../pages-instalacionSO/index.html" className="hover:text-gray-200 transition duration-300">Inicio</a>
        <a href="#" className="hover:text-gray-200 transition duration-300">Servicios</a>
        <a href="#" className="hover:text-gray-200 transition duration-300">Sobre Nosotros</a>
        <a href="#" className="hover:text-gray-200 transition duration-300">Contacto</a>
      </div>
    </div>
  </nav>
);

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: "/api/placeholder/1200/500", title: "Expertos en Sistemas Operativos", subtitle: "Soluciones profesionales para empresas y particulares" },
    { image: "/api/placeholder/1200/500", title: "Migración sin complicaciones", subtitle: "De Windows a Linux y viceversa" },
    { image: "/api/placeholder/1200/500", title: "Actualización y Compatibilidad", subtitle: "Optimiza tu rendimiento con las últimas tecnologías" }
  ];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className={`${index === currentSlide ? 'block' : 'hidden'} duration-700 ease-in-out`}>
          <img src={slide.image} alt={slide.title} className="w-full h-[600px] object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white">
            <h2 className="text-5xl font-bold mb-4 text-center">{slide.title}</h2>
            <p className="text-2xl text-center">{slide.subtitle}</p>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300">
        <ChevronLeft className="text-gray-800" size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300">
        <ChevronRight className="text-gray-800" size={24} />
      </button>
    </div>
  );
};

const CategoryCard = ({ title, icon: Icon, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
    <Icon className="w-20 h-20 text-indigo-600 mb-6 mx-auto" />
    <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
    <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 w-full">Más información</button>
  </div>
);

const ServicesSection = () => (
  <div className="bg-gray-100 py-20">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">Nuestros Servicios Especializados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <CategoryCard 
          title="Instalación de SO" 
          icon={Download}
          description="Instalación y configuración profesional de sistemas operativos adaptados a tus necesidades específicas." 
        />
        <CategoryCard 
          title="Migración de SO" 
          icon={ArrowLeftRight}
          description="Transición suave entre Windows y Linux, asegurando la integridad de tus datos y configuraciones." 
        />
        <CategoryCard 
          title="Actualización y Compatibilidad" 
          icon={RefreshCw}
          description="Optimiza tu sistema con las últimas actualizaciones y asegura la compatibilidad con tu hardware." 
        />
      </div>
    </div>
  </div>
);

const FeatureSection = () => (
  <div className="py-20 bg-white">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">¿Por qué elegirnos?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="bg-indigo-100 rounded-full p-6 inline-block mb-4">
            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Seguridad Garantizada</h3>
          <p className="text-gray-600">Protección de datos y configuraciones durante todo el proceso.</p>
        </div>
        <div className="text-center">
          <div className="bg-indigo-100 rounded-full p-6 inline-block mb-4">
            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Rendimiento Optimizado</h3>
          <p className="text-gray-600">Mejora significativa en la velocidad y eficiencia de tu sistema.</p>
        </div>
        <div className="text-center">
          <div className="bg-indigo-100 rounded-full p-6 inline-block mb-4">
            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
          <p className="text-gray-600">Asistencia técnica profesional disponible en todo momento.</p>
        </div>
        <div className="text-center">
          <div className="bg-indigo-100 rounded-full p-6 inline-block mb-4">
            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Soluciones Personalizadas</h3>
          <p className="text-gray-600">Adaptamos nuestros servicios a tus necesidades específicas.</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => (
  <div className="bg-indigo-600 text-white py-20">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Lo que dicen nuestros clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
          <p className="mb-4 text-lg">"La migración de Windows a Linux fue impecable. Nuestro sistema ahora es más rápido y seguro que nunca."</p>
          <p className="font-semibold">- María G., Gerente de IT</p>
        </div>
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
          <p className="mb-4 text-lg">"La actualización de nuestro SO y la optimización de hardware mejoraron significativamente el rendimiento de nuestra oficina."</p>
          <p className="font-semibold">- Carlos R., Emprendedor</p>
        </div>
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
          <p className="mb-4 text-lg">"El soporte técnico 24/7 nos ha salvado en múltiples ocasiones. Su equipo es extremadamente competente y profesional."</p>
          <p className="font-semibold">- Laura M., Diseñadora Gráfica</p>
        </div>
      </div>
    </div>
  </div>
);

const CTASection = () => (
  <div className="bg-gray-100 py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">¿Listo para optimizar tu sistema?</h2>
      <p className="text-xl mb-8 text-gray-600">Contáctanos hoy para una consulta gratuita y descubre cómo podemos mejorar tu experiencia informática.</p>
      <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300">Solicitar Consulta</button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <HardDrive className="mr-2" />
          OSSolutions Pro
        </h3>
        <p className="mb-4">Expertos en sistemas operativos y optimización de hardware.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <Instagram size={20} />
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Servicios</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Instalación de SO</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Migración de SO</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Actualización y Compatibilidad</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Soporte Técnico</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Inicio</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Sobre Nosotros</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Contacto</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Mail size={16} className="mr-2" />
            <a href="mailto:info@ossolutionspro.com" className="text-gray-400 hover:text-white transition duration-300">info@ossolutionspro.com</a>
          </li>
          <li className="flex items-center">
            <Phone size={16} className="mr-2" />
            <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition duration-300">+1 (234) 567-890</a>
          </li>
          <li className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span className="text-gray-400">123 Tech Street, Silicon Valley, CA 94000</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
      <p className="text-gray-400">&copy; 2024 OSSolutions Pro. Todos los derechos reservados.</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Carousel />
        <ServicesSection />
        <FeatureSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
      <ChatBotScript /> {/* Aquí se integra el componente del chatbot */}
    </div>
  );
};
export default App;