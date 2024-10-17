import { IoIosTrendingUp } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsEmojiWink } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skillData = [
  {
    name: "Escalabilidad",
    icon: <IoIosTrendingUp className="text-5xl" />,
    description:
      "Nuestra creatividad se traduce en soluciones escalables que destacan en un mercado competitivo.",
  },
  {
    name: "Compromiso",
    icon: <IoShieldCheckmarkOutline className="text-5xl" />,
    description: "Asociación sólida y un compromiso inquebrantable con tu éxito.",
  },
  {
    name: "Accesibilidad",
    icon: <BsEmojiWink className="text-5xl" />,
    description:
      "Soluciones accesibles, asegurando que cada usuario pueda disfrutar de una experiencia óptima.",
  },
];

export default function SectionNosotros() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="bg-[#F2F2F7] pt-12 pb-8 mb-0 flex flex-col items-center" id="Nosotros">
  <div className="w-full px-6 sm:px-16">
    
    <h3 className="font-quicksand-600 text-[#0A2FDA] text-left font-semibold text-lg sm:text-xl py-4 md:text-[24px] md:text-left">
      Sobre nosotros
    </h3>

    
    <h2 className="font-quicksand-600 text-left text-base sm:text-lg py-4 mb-4 md:text-[24px] md:text-left">
      En Wallock, somos un equipo de expertos en tecnología dedicado a crear soluciones digitales únicas que impulsan tu negocio.
    </h2>

    
    <h1 className="w-full font-quicksand-500 text-left text-sm sm:text-base mb-8 text-[#5F5A5A] leading-6 sm:leading-9 tracking-widest md:text-[16px] md:leading-[24px] md:text-left">
      Nos comprometemos a la excelencia, ofreciendo un acompañamiento transparente y centrado en el cliente para construir relaciones duraderas. Con innovación, creatividad y conocimiento técnico, convertimos tus ideas en realidades y tus desafíos en oportunidades. Soluciones innovadoras y un enfoque integral. Descubre la diferencia de trabajar con un equipo que realmente se preocupa por tu éxito.
    </h1>
  </div>
</section>



<section className="bg-[#F2F2F7] pt-12 pb-8 mb-0 flex flex-col items-center">
  <div className="container mx-auto max-w-[1440px] px-6 sm:px-12">
    <div className="w-full sm:pl-0">
      <h2 className="font-quicksand-600 text-[#0A2FDA] sm:px-4 text-left font-semibold text-lg sm:text-xl py-2 md:text-[24px] lg:text-[24px]">Nuestros valores</h2>
    </div>

    <div className="flex justify-center items-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 w-full">
        {skillData.map((service) => (
          <div
            key={service.name}
            className="bg-white font-quicksand text-center w-full h-auto p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg border border-solid border-[#D5D4DC] opacity-100 hover:shadow-xl"
          >
            <div className="flex items-center justify-center mb-4 text-[#4361EE]">
              <div className="text-2xl mr-2">{service.icon}</div>
              <h1 className="text-lg font-semibold text-black">{service.name}</h1>
            </div>
            <p className="text-slate-500 text-base xl:text-lg">{service.description}</p>
          </div>
        ))}
      </div>
     </div>
    </div>
   </section>
  </>
);}

