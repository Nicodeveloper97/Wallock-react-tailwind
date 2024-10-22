import { useState, useEffect } from "react";
import TypingTitle from "./TypingTitle";
import SectionServices from "./SectionServices";
import { Link } from 'react-scroll';
// import SectionNosotros from "./SectionNosotros";
// import SectionHablemos from "./SectionHablemos";
import SectionHablemos from "./SectionHablemos";
import SectionNosotros from "./SectionNosotros";
//import imagenes //
import celu from "../assets/celus.png"
import hamburicon from "../assets/hamburguer-icon.svg"
import Slider from "./Slider"

export default function SectionHero() {

  const [activeLink, setActiveLink] = useState<string>('#Inicio');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleClick = (link: string) => {
      setActiveLink(link);
      setMenuOpen(false);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 70) {
        currentSection = section.getAttribute('id')!;
        
      }
    });
  
    setActiveLink(`#${currentSection}`);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };    
  }, []);
  
  return (
    <>

<header className="fixed w-full h-12 sm:h-20 bg-[#F2F2F7]  z-50">
  <nav className="w-full flex sm:h-full justify-between items-center my-1 px-4">
    <a 
      href="/index.html" 
      className="font-poppins text-xl lg:text-3xl sm:pl-10 font-semibold leading-loose text-[#0A2FDA] no-underline cursor-pointer"
    > 
      Wallock 
    </a>
    
    <button 
      onClick={() => setMenuOpen(!menuOpen)}
      className="sm:hidden"
    >              
      <img className="font-black" src={hamburicon} alt="Menú" />              
    </button>
    
    <ul 
      className={`sm:flex md:justify-center lg:flex lg:flex-row lg:mr-20 gap-6 items-center font-poppins text-md lg:text-base font-normal no-underline text-gray-900 ${menuOpen ? 'hidden' : 'hidden'} lg:block`}
    >
      <li>
        <Link
          to="Inicio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`w-5 h-3 cursor-pointer text-black hover:underline hover:underline-offset-4 hover:decoration-[#0A2FDA] hover:text-gray-500 ${activeLink === '#Inicio' ? 'text-gray-500 underline decoration-[#0A2FDA] underline-offset-4'  : 'text-black'}`}
          onClick={() => handleClick('#Inicio')}
        >
          Inicio
        </Link>
      </li>                
                    
      <li>
        <Link 
          to="Servicios"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`w-5 h-3 cursor-pointer text-black hover:underline hover:underline-offset-4 hover:decoration-[#0A2FDA] hover:text-gray-500 ${activeLink === '#Servicios' ? 'text-gray-500 underline decoration-[#0A2FDA] underline-offset-4' : 'text-black'}`}
          onClick={() => handleClick('#Servicios')}
        >
          Servicios
        </Link>
      </li>       
      <li>                  
        <Link 
          to="Nosotros"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} 
          className={`w-5 h-3 cursor-pointer text-black hover:underline hover:underline-offset-4 hover:decoration-[#0A2FDA] hover:text-gray-500 ${activeLink === '#Nosotros' ? 'text-gray-500 underline decoration-[#0A2FDA] underline-offset-4' : 'text-black'}`}
          onClick={() => handleClick('#Nosotros')}
        >
          Nosotros
        </Link>
      </li>           
      <li>
        <Link 
          to="Hablemos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`px-2 py-2 rounded-3xl opacity-1 text-white font-poppins text-sm text-center cursor-pointer bg-[#0A2FDA]  ${activeLink === '#Hablemos' ? 'bg-[#0A2FDA]' : 'bg-[#0A2FDA]'}`}
          onClick={() => handleClick('#Hablemos')} 
        >
          <i className=' bx bx-message-rounded-dots mr-2'></i>
          Hablemos
        </Link>
      </li>
    </ul>
  </nav>
</header>



      {menuOpen && (
        <div 
          className=" sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden z-50`}>
        <button 
          className="text-4xl py-1 px-4 float-right" 
          onClick={() => setMenuOpen(false)}
        >
          &times; 
        </button>
        <ul className="flex flex-col gap-6 items-start font-poppins text-md font-normal no-underline text-gray-900 mt-16 ml-4">
          <li>
            <Link
              to="Inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`w-full text-center p-3 hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-[#0A2FDA] cursor-pointer`}
              onClick={() => handleClick('#Inicio')}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="Servicios"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`w-full text-center p-3 hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-[#0A2FDA] cursor-pointer`}
              onClick={() => handleClick('#Servicios')}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link 
              to="Nosotros"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`w-full text-center p-3 hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-[#0A2FDA] cursor-pointer`}
              onClick={() => handleClick('#Nosotros')}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link 
              to="Hablemos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`px-2 py-2 rounded-3xl opacity-1 text-white font-poppins text-sm text-center cursor-pointer bg-[#0A2FDA]`}
              onClick={() => handleClick('#Hablemos')}
            >
              <i className='bx bx-message-rounded-dots mr-2'></i>
              Hablemos
            </Link>
          </li>
        </ul>
      </div>

      <section id="Inicio"
  className="w-full xl:flex h-auto pt-24 xl:pt-56 bg-gradient-to-b from-[rgba(67,97,238,0.4)] to-[#F2F2F7] backdrop-blur-[200px]"
>
  <div 
    className="w-full xl:w-1/2 xl:h-auto xl:text-left xl:ml-12 xl:mr-2 xl:px-10 text-center xl:text-left relative xl:relative xl:opacity-100 px-4"
  >
    <h3 className="text-indigo-800 mb-4 font-extrabold text-lg md:text-2xl font-quicksand tracking-widest text-left">
      Somos una 
    </h3>

    <TypingTitle />

    <p className="font-quicksand text-[#414F62] py-2 font-normal text-sm md:text-2xl leading-6 md:leading-9 tracking-widest text-left">
      Potenciamos el crecimiento digital con <br/> 
      soluciones que aceleran e impulsan el <br/> 
      <span className="font-semibold">impacto empresarial</span>
    </p>

    <div className="w-full lg:w-auto lg:max-w-fit">
    <button 
        className="bg-[#0A2FDA] text-white font-quicksand text-[14px] sm:text-[18px] font-semibold leading-[20px] sm:leading-[22.5px] text-center w-[250px] sm:w-[320px] lg:w-[507px] h-[45px] sm:h-[61px] lg:h-[61px] mt-4 sm:mt-10 px-6 py-2 sm:py-4 lg:px-[34px] lg:py-[20px] lg:rounded-full lg:gap-[10px]  rounded-full mb-6 sm:mb-0"
      >
        ¿Cómo podemos ayudarte?
      </button>
    </div>
  </div>

  <div className="hidden xl:block xl:-mt-48 px-4 py-20 mx-auto xl:mr-14 w-1/2 h-auto">
    <img src={celu} alt="img-hero"/>
  </div>
</section>





      <Slider/>
      <SectionServices/>
      <SectionNosotros/>
      <SectionHablemos/>
    
    </>
  )
}



  
  