import { IoIosTrendingUp } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsEmojiWink } from "react-icons/bs";
import  AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const skillData = [
  { 
  name: "Escalabilidad",
  icon:  (
      <IoIosTrendingUp className="text-5xl" /> 
  ),
  description: "Nuestra creatividad se traduce en soluciones escalables que destacan en un mercado competitivo.",
  },
  { 
      name: "Compromiso",
      icon:  (
          <IoShieldCheckmarkOutline  className="text-5xl"  />
      ),
      description: "Asociación sólida y un compromiso inquebrantable con tu éxito.",
  },
  { 
      name: "Accesibilidad",
      icon:  (
          <BsEmojiWink  className="text-5xl"  />
      ),
      description: "Soluciones accesibles, asegurando que cada usuario pueda disfrutar de una experiencia óptima.",
  }
]


export default function SectionNosotros () {

  useEffect(() => {
    AOS.init ({
      offset: 100,
      duration:800,
      easing: "ease-in",
      delay: 50,
    });
    AOS.refresh();

  }, [])
  return (
    <>
    <section 
      className="bg-[#F2F2F7] p-10"
      id="Nosotros"
    >

      <h3 className="font-quicksand text-indigo-800 text-center font-semibold text-xl py-2">
        Sobre nosotros
      </h3>
      
      <h2 className="font-quicksand text-center text-xl mb-10" >
        Soluciones innovadoras y un enfoque integral
      </h2>

      <h1 className="w-full font-quicksand text-center text-sm  mb-10 text-slate-500 px-20 max-sm:px-4 sm:text-xl  leading-9 tracking-widest  ">
      Somos un equipo de expertos en tecnología, unidos por el deseo de desarrollar soluciones digitales únicas y efectivas que impulsen el crecimiento de tu negocio. Cada integrante aporta su talento distintivo, esa chispa que nos hace destacar como conjunto.
      Nos comprometemos a buscar la excelencia en cada proyecto, ofreciendo un acompañamiento responsable, transparente y centrado en el cliente para construir relaciones duraderas y significativas.
      Queremos ser tu aliado en el mundo digital, impulsando tu negocio con innovación, creatividad y conocimiento técnico. Te invitamos a descubrir la diferencia de trabajar con un equipo que realmente se preocupa por tu éxito. 
      En Wallock, no solo desarrollamos software, creamos relaciones y experiencias que marcan la diferencia. 
      Fusionamos tradición y vanguardia para brindarte soluciones innovadoras y personalizadas.
      Juntos, podemos convertir tus ideas en realidades y tus desafíos en oportunidades.
      </h1>
    </section>
    <section className="w-full h-auto bg-[#F2F2F7] p-12 space-y-10">
        <h3  className="font-quicksand text-indigo-800 text-center font-semibold text-xl py-2">
        Que podemos ofrecerte?
        </h3>
    <div className="flex flex-wrap justify-center gap-2">
      <h1 className="px-7 rounded-2x1 p-2 mx-2 bg-[#FFFFFF] border border-[#555FFF] hover:bg-indigo-600 hover:text-white"> 
        Sistemas internos 
      </h1>
      <h1 className="px-7 rounded-2x1 p-2 mx-2 bg-[#FFFFFF] border border-[#555FFF] hover:bg-indigo-600 hover:text-white">
        Consultorias 
        </h1>
      <h1 className="px-7 rounded-2x1 p-2 mx-2 bg-[#FFFFFF] border border-[#555FFF] hover:bg-indigo-600 hover:text-white">
        Integraciones 
        </h1>
      <h1 className="px-7 rounded-2x1 p-2 mx-2 bg-[#FFFFFF] border border-[#555FFF] hover:bg-indigo-600 hover:text-white">
        E-commerce 
        </h1>
      <h1 className="px-7 rounded-2x1 p-2 mx-2 bg-[#FFFFFF] border border-[#555FFF] hover:bg-indigo-600 hover:text-white"> 
        Websites 
        </h1>
      <h1 className="px-7 rounded-2x1 p-2 mx-2 bg-[#FFFFFF] border border-[#555FFF] hover:bg-indigo-600 hover:text-white"> 
        Apps Nativas 
        </h1>
      <h1 className="px-7 rounded-2x1 p-2 mx-2 bg-[#FFFFFF] border border-[#555FFF] hover:bg-indigo-600 hover:text-white"> 
        Web Apps 
        </h1>
    </div>
    </section>

    <section className="w-full bg-[#F2F2F7]">
    <div className="">
        <div className='container bg-[#F2F2F7] pt-40'>
            <div className='bg-[#F2F2F7]'>
            <h3 className="font-quicksand text-indigo-800 text-center font-semibold text-xl py-2">
            Nos diferenciamos
            </h3>
        <h2 className="font-quicksand text-center text-xl mb-10">
            Por nuestros valores
        </h2>
            </div>
            <div className="min-h-screen flex items-center justify-center">    
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center p-10 pb-40 pl-16'>
            {
                skillData.map((service) => (
                    <div
                    key={service.name}
                    className="card bg-[#FFFFFF] font-quicksand text-center group space-y-3 sm:space-y-6 p-4 sm:py-4 w-3/5  h-full border border-[#555FFF]">
                        <div className="grid place-items-center text-indigo-800">{service.icon}</div>
                        <h1 className="text-black-800 ">{service.name}</h1>
                        <p className="text-slate-500">{service.description}</p>
                    </div>
                ))
            }
        </div> 
        </div> 
        </div>
    
    </div>
    </section>
</>)}

