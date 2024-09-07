
import { Services } from "../dataServices/Services";
import ExpandleCards from "./ExpandleCards";





export default function SectionServices() {
  

  return (
    <>
    <section 
      className="bg-[#F2F2F7] p-10"
      id="Servicios"
    >

      <h3 className="font-quicksand text-indigo-800 text-center font-semibold text-xl py-2">
        Nuestros servicios 
      </h3>
      
      <h2 className="font-quicksand text-center text-xl mb-10">
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
