import { useState, useEffect } from "react";
import TypingTitle from "./TypingTitle";
import SectionServices from "./SectionServices";
// import SectionNosotros from "./SectionNosotros";
// import SectionHablemos from "./SectionHablemos";
import SectionHablemos from "./SectionHablemos";
import SectionNosotros from "./SectionNosotros";
//import imagenes //
import celu from "../assets/celus.png"
import hamburicon from "../assets/hamburguer-icon.svg"
import { Link} from 'react-scroll';


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
      <header className="fixed w-full h-40 lg:h-28 grid grid-rows bg-[#F2F2F7] border-b-2 border-b-[#777FFF]">

        <nav className="fixed w-full sm:h-28 md:h-24 lg:h-20 top-4 flex md:flex-col lg:flex-row lg:justify-between bg-[#F2F2F7]">
            
            <a 
              href="/index.html" 
              className="font-quicksand text-4xl font-semibold leading-loose justify-center sm:ml-72 ml-5 mx-auto mb-4 lg:ml-24 text-indigo-500 no-underline cursor-pointer"
            > 
              Wallock 
            </a>

            <button 
              className="sm:hidden text-3xl -mt-5 mr-4" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <img 
              src= {hamburicon}
              alt="Menú" />
          </button>
            

            <ul 
              className={`sm:flex md:justify-center lg:flex lg:flex-row lg:mr-20 gap-6 items-center font-poppins text-md font-normal no-underline text-gray-900 ${menuOpen ? 'hidden' : 'hidden'} lg:block`}>

                <li className="">
                  <Link
                    to="Inicio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`w-5 h-3 p-3 sm:mr-1 rounded-3xl hover:bg-indigo-400 hover:text-white sm:-m-1 m-4 cursor-pointer ${ activeLink === '#Inicio'  ? 'bg-indigo-400 sm:-m-1 text-white' : 'text-black'}`}
                    onClick={() => handleClick('#Inicio')}
                  >
                    Inicio
                  </Link>
                </li>                
                <li>                  
                  <Link 
                    to="Nosotros"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                    className={`w-5 h-3 p-3 sm:mr-1 rounded-3xl hover:bg-indigo-400 hover:text-white sm:-m-1 m-4 cursor-pointer ${activeLink === '#Nosotros' ? 'bg-indigo-400 sm:-m-1 text-white ' : 'text-black'}`}
                    onClick={() => handleClick('#Nosotros')}
                  >
                    Nosotros
                  </Link>
                </li>                
                <li>
                  <Link 
                    to="Servicios"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`w-5 h-3 p-3 sm:mr-1 rounded-3xl hover:bg-indigo-400 hover:text-white sm:-m-1 m-4 cursor-pointer ${activeLink === '#Servicios' ? 'bg-indigo-400 sm:-m-1 text-white' : 'text-black'}`}
                    onClick={() => handleClick('#Servicios')}
                  >
                    Servicios
                  </Link>
                </li>                
                <li>
                  <Link 
                    to="Hablemos"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-3 py-3 rounded-3xl opacity-1 bg-indigo-800 hover:bg-indigo-600 text-white font-poppins text-md text-center cursor-pointer"
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

      <div className={`fixed top-0 right-0 w-56 h-full bg-white shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden z-50`}>
        <button 
          className="text-3xl p-4" 
          onClick={() => setMenuOpen(false)}
        >
          &times; {/* Icono de cerrar */}
        </button>
        <ul className="flex flex-col gap-6 items-center font-poppins text-md font-normal no-underline text-gray-900 mt-10">
          <li>
            <Link
              to="Inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`w-full text-center p-3 rounded-3xl hover:bg-indigo-400 hover:text-white cursor-pointer ${activeLink === '#Inicio' ? 'bg-indigo-400 text-white' : 'text-black'}`}
              onClick={() => handleClick('#Inicio')}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="Nosotros"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`w-full text-center p-3 rounded-3xl hover:bg-indigo-400 hover:text-white cursor-pointer ${activeLink === '#Nosotros' ? 'bg-indigo-400 text-white' : 'text-black'}`}
              onClick={() => handleClick('#Nosotros')}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link 
              to="Servicios"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`w-full text-center p-3 rounded-3xl hover:bg-indigo-400 hover:text-white cursor-pointer ${activeLink === '#Servicios' ? 'bg-indigo-400 text-white' : 'text-black'}`}
              onClick={() => handleClick('#Servicios')}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link 
              to="Hablemos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-center px-3 py-3 rounded-3xl bg-indigo-800 hover:bg-indigo-600 text-white cursor-pointer"
              onClick={() => handleClick('#Hablemos')}
            >
              <i className='bx bx-message-rounded-dots mr-2'></i>
              Hablemos
            </Link>
          </li>
        </ul>
      </div>
        
      <section 
        className="w-full h-auto overflow-hidden bg-gradient-to-t from-[#FFFFFF] to-[#555FFF] lg:flex lg:justify-around bg-cover -z-10 pb-36" id="Inicio"
      >
        <div className="lg:w-1/2 lg:h-auto max-md:mt-64 md:mt-56 text-center lg:ml-12 lg:mr-2 lg:px-10 lg:text-left ">
          <h3 className=" text-indigo-800 md:mt-36 mb-4 font-extrabold text-lg md:text-2xl font-quicksand tracking-widest"> Somos una </h3>
          <TypingTitle />
          <p className="font-quicksand text-white  py-2 font-normal  text-xs max-sm:px-4 md:text-2xl leading-9 tracking-widest">
            Potenciamos el crecimiento digital con <br/> 
            soluciones que aceleran e impulsan el <br/> 
            <span className="font-semibold">impacto empresarial</span>
          </p>
        </div>
        <div className="max-sm:-mt-16 lg:mt-32 px-4 py-20 ml-2 sm:mx-auto lg:mr-14 w-1/2 h-auto max-md:mx-auto">
          <img src={celu} alt="img-hero"/>
        </div>
      </section>
      <SectionNosotros/>
      <SectionServices/>
      <SectionHablemos/>
    
    </>
  )
}



  
  