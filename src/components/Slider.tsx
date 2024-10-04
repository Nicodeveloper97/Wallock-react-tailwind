import { useEffect, useRef } from "react";

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    
    slider.style.animation = "scroll 30s linear infinite";

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const items = [
    "Sistemas Internos",
    "Consultorías",
    "Integraciones",
    "E-commerce",
    "Websites",
    "Apps Nativas",
    "Web Apps",
  ];

  return (
    <section className="relative w-full h-[80px] md:h-[111px] bg-[#FFFFFF] border-t-2 border-b-2 border-[#3A0CA3] flex items-center justify-center overflow-hidden z-10">
      
      <div
        ref={sliderRef}
        className="flex items-center gap-[12px] md:gap-[22px] whitespace-nowrap"
        style={{ width: "200%" }} 
      >
        
        {[...items, ...items].map((item, index) => (
          <div className="flex items-center" key={index}>
            <div className="flex-none px-2 md:px-4 py-1 md:py-2 text-[#000000] shadow-[0px_0.92px_0.92px_0px_rgb] text-left font-quicksand text-[20px] md:text-[32px] font-medium leading-[28px] md:leading-[40px] whitespace-nowrap">
              {item}
            </div>
            
            {index < [...items, ...items].length - 1 && (
              <div className="flex-none w-[8px] md:w-[12px] h-[8px] md:h-[12px] bg-[#4361EE] rounded-full mx-1 md:mx-2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
