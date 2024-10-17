
import { Services } from "../dataServices/Services";
import ExpandleCards from "./ExpandleCards";

export default function SectionServices() {
  

  return (
    <>
    <section 
      className="bg-[#F2F2F7] p-6 sm:p-10"
      id="Servicios"
    >

<h3 className="font-quicksand font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[24px] leading-[30px] tracking-[0.15em] text-left text-[#0A2FDA] 
  py-2 pl-0 sm:mt-4 sm:px-4">
  Nuestros servicios
</h3>

<h2 className="font-quicksand font-semibold text-lg sm:text-xl py-2 md:text-[24px] lg:text-[24px] sm:mt-4 sm:px-4">
  Nos especializamos en:
</h2>

      {Services.map(service => (
        <ExpandleCards  
          key={service.id}      
          service={service}
        />
      ))}
          
    </section>
    </>
  )
}
