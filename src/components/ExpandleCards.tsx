import { useState } from "react"
import { ServicesType } from "../types"
//import imagenes //
import iconabrir from "../assets/add-icon+.svg"
import iconcerrar from "../assets/add-iconx.svg"

type ExpandleCardsProps = {
  service: ServicesType; 
}

export default function ExpandleCards({service}: ExpandleCardsProps) {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = ()=> {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="space-y-10 my-10">
      
      <article 
        className= {`bg-white w-full lg:w-2/3 lg:h-4 mx-auto border-2 border-[#555FFF] rounded-md ${isExpanded ? 'max-sm:py-0 md:px-28 md:pt-10 md:pb-4 lg:py-28 overflow-hidden ease-in-out' : 'p-12'}`}     
      >
        <h1 
          className={`max-sm-text-md md:text-2xl lg:text-3xl font-normal font-quicksand text-center ${isExpanded ? 'mt-8 md:-mt-2 lg:-mt-20 mb-4' : '-my-4'}`}>
          {service.title}
        </h1>
        <button 
          onClick={handleClick}
          className={`focus:outline-none float-right w-20 h-20 ${isExpanded ? '-mt-16 -mr-8 md:-mt-20 md:-mr-28' : '-mt-8 md:-mt-11 -mr-20 sm:-mr-11'}`}

          
        >
          <img 
            className=" w-10 sm:w-16 lg:w-full h-auto cursor-pointer" 
            src={isExpanded ?  iconcerrar : iconabrir }
            alt={isExpanded ? "Cerrar" : "Mas Info"}
            />  
        </button>
          {isExpanded && 
        
          <p className="w-4/5 text-center text-gray-600  m-auto pb-10 sm:pb-4 max-sm:text-xs">{service.servicio}</p>
        }
      </article>
      
    </div>
  )
}
