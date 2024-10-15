import '../index.css'
import React from 'react';

const items = [
  "Sistemas Internos",
  "Consultorías",
  "Integraciones",
  "E-commerce",
  "Websites",
  "Apps Nativas",
  "Web Apps",
];

const icons = [
  <img src="/src/assets/sistemas-internos.svg" alt="Sistemas Inetrnos" />, // Icono para Sistemas Internos
  <img src="/src/assets/consultorias.svg" alt="Consultorías" />,      // Icono para Consultorías
  <img src="/src/assets/integraciones.svg" alt="Integraciones" />,     // Icono para Integraciones
  <img src="/src/assets/ecommerce.svg" alt="E-commerce" />,         // Icono para E-commerce
  <img src="/src/assets/websites.svg" alt="Websites" />,          // Icono para Websites
  <img src="/src/assets/apps-nativas.svg" alt="Apps Nativas" />,      // Icono para Apps Nativas
  <img src="/src/assets/web-apps.svg" alt="Web apps" />,          // Icono para Web Apps
];


const Carousel: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-12 bg-[#F2F2F7]">
      <div className="animate-marquee inline-flex scroll">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="inline-block mx-8">
            <p className="inline-flex">{icons[index % icons.length]}<span className='inline-flex mt-5 mr-3 font-quicksand font-bold'>{item}</span></p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
