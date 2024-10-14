// import { useEffect, useRef } from "react";

// const Slider: React.FC = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

    
//     slider.style.animation = "scroll 30s linear infinite";

//     const style = document.createElement("style");
//     style.innerHTML = `
//       @keyframes scroll { 
//       0% { transform: translateX(0); }
//       100% { transform: translateX(-50%); } }`;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   const items = [
//     "Sistemas Internos",
//     "Consultorías",
//     "Integraciones",
//     "E-commerce",
//     "Websites",
//     "Apps Nativas",
//     "Web Apps",
//   ];

//   return (
//     <section className="relative w-full h-[80px] md:h-[111px] bg-[#F2F2F7]  flex items-center justify-center overflow-hidden z-10">
      
//       <div
//         ref={sliderRef}
//         className="w-[200%] flex items-center gap-[12px] md:gap-[22px] whitespace-nowrap"
//       >
        
//         {[...items, ...items].map((item, index) => (
//           <div className="flex items-center" key={index}>
//             <div className="flex-none px-2 md:px-4 py-1 md:py-2 text-[#000000] shadow-[0px_0.92px_0.92px_0px_rgb] text-left font-quicksand text-[20px] md:text-[32px] font-medium leading-[28px] md:leading-[40px] whitespace-nowrap">
//               {item}
//             </div>
            
//             {index < [...items, ...items].length - 1 && (
//               <div className="flex-none w-[8px] md:w-[12px] h-[8px] md:h-[12px] bg-[#4361EE] rounded-full mx-1 md:mx-2" />
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Slider;


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
      <div className="animate-marquee inline-flex">
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
