import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Cpu, HardDrive, Gpu } from 'lucide-react';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="text-xl font-bold">TechHardware</a>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-300">Inicio</a>
        <a href="#" className="hover:text-gray-300">Productos</a>
        <a href="#" className="hover:text-gray-300">Sobre Nosotros</a>
        <a href="#" className="hover:text-gray-300">Contacto</a>
      </div>
    </div>
  </nav>
);

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: "/api/placeholder/1200/400", title: "Descubre lo último en hardware" },
    { image: "/api/placeholder/1200/400", title: "Ofertas especiales en componentes" },
    { image: "/api/placeholder/1200/400", title: "Arma tu PC ideal" }
  ];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <div key={index} className={`${index === currentSlide ? 'block' : 'hidden'}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">{slide.title}</h2>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full">
        <ChevronLeft className="text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full">
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
};

const CategoryCard = ({ title, icon: Icon, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturedProducts = () => (
  <div className="bg-gray-100 py-12">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="/api/placeholder/300/200" alt="Producto 1" className="w-full h-48 object-cover mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">Tarjeta Gráfica XYZ</h3>
          <p className="text-gray-600 mb-4">Potencia tu experiencia de juego con esta tarjeta gráfica de última generación.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ver detalles</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="/api/placeholder/300/200" alt="Producto 2" className="w-full h-48 object-cover mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">Procesador ABC</h3>
          <p className="text-gray-600 mb-4">Mejora el rendimiento de tu PC con este potente procesador multinúcleo.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ver detalles</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="/api/placeholder/300/200" alt="Producto 3" className="w-full h-48 object-cover mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">SSD Ultra Rápido</h3>
          <p className="text-gray-600 mb-4">Acelera tus tiempos de carga con este SSD de alta velocidad y gran capacidad.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ver detalles</button>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h3 className="text-xl font-bold mb-4">TechHardware</h3>
        <p>Tu destino para todo lo relacionado con hardware de computadoras.</p>
      </div>
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
        <ul>
          <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
          <li><a href="#" className="hover:text-gray-300">Productos</a></li>
          <li><a href="#" className="hover:text-gray-300">Sobre Nosotros</a></li>
          <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-4">Contacto</h4>
        <p>Email: info@techhardware.com</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Dirección: 123 Calle Tech, Ciudad</p>
      </div>
      <div className="w-full md:w-1/4">
        <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center">
      <p>&copy; 2024 TechHardware. Todos los derechos reservados.</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Carousel />
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard 
              title="Procesadores" 
              icon={Cpu}
              description="Descubre nuestra amplia gama de procesadores de última generación para potenciar tu equipo." 
            />
            <CategoryCard 
              title="Almacenamiento" 
              icon={HardDrive}
              description="Explora nuestras opciones de almacenamiento, desde SSDs ultrarrápidos hasta HDDs de gran capacidad." 
            />
            <CategoryCard 
              title="Tarjetas Gráficas" 
              icon={Gpu}
              description="Encuentra la tarjeta gráfica perfecta para tus necesidades de gaming o diseño profesional." 
            />
          </div>
        </div>
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default App;