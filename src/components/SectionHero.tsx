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
      <header className="fixed w-full h-12 bg-[#F2F2F7] border-b-2 border-b-[#777FFF]">

        <nav className="fixed w-full flex justify-between items-center my-1 px-4">
            
            <a 
              href="/index.html" 
              className="font-quicksand text-xl font-semibold leading-loose text-indigo-500 no-underline cursor-pointer"
            > 
              Wallock 
            </a>
            
            {}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden"
            >              
              <img
                className="font-black" 
                src={hamburicon}
                alt="Menú"
              />              
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
                    className={`w-5 h-3 cursor-pointer text-black hover:underline hover:underline-offset-4 hover:text-decoration-color-indigo-600 hover:text-gray-500 ${ activeLink === '#Inicio'  ? 'text-gray-500 underline underline-offset-4' : 'text-black'}`}
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
                    className={`w-5 h-3 cursor-pointer text-black hover:underline hover:underline-offset-4 hover:text-gray-500 ${ activeLink === '#Nosotros' ? 'text-gray-500 underline underline-offset-4' : 'text-black'}`}
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
                    className={`w-5 h-3 cursor-pointer text-black hover:underline hover:underline-offset-4 hover:text-gray-500 ${ activeLink === '#Servicios' ? 'text-gray-500 underline underline-offset-4' : 'text-black'}`}
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
                    className={`px-2 py-2 rounded-3xl opacity-1 text-white font-poppins text-sm text-center cursor-pointer hover:bg-indigo-600 hover:underline hover:underline-offset-4 ${activeLink === '#Hablemos' ? 'bg-indigo-600 underline underline-offset-4' : 'bg-indigo-800'}`}
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
          &times; {/* Icono de cerrar */}
        </button>
        <ul className="flex flex-col gap-6 items-start font-poppins text-md font-normal no-underline text-gray-900 mt-16 ml-4">
          <li>
            <Link
              to="Inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`w-full text-center p-3 hover:text-gray-500 hover:underline hover:underline-offset-4 cursor-pointer`}
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
              className={`w-full text-center p-3 hover:text-gray-500 hover:underline hover:underline-offset-4 cursor-pointer`}
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
              className={`w-full text-center p-3 hover:text-gray-500 hover:underline hover:underline-offset-4 cursor-pointer`}
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
              className={`px-2 py-2 rounded-3xl opacity-1 text-white font-poppins text-sm text-center cursor-pointer bg-indigo-800 hover:bg-indigo-600`}
              onClick={() => handleClick('#Hablemos')}
            >
              <i className='bx bx-message-rounded-dots mr-2'></i>
              Hablemos
            </Link>
          </li>
        </ul>
      </div>
        
      <section 
        className="w-full bg-gradient-to-t from-[#F2F2F7] to-[#555FFF] lg:flex lg:justify-around bg-cover -z-10 py-48 lg:py-72"
        id="Inicio"
      >
        <div className="lg:w-1/2 lg:h-auto text-center lg:ml-12 lg:mr-2 lg:px-10 lg:text-left ">
          <h3 className=" text-indigo-800 mb-4 font-extrabold text-lg md:text-2xl font-quicksand tracking-widest"> Somos una </h3>
          <TypingTitle />
          <p className="font-quicksand text-white  py-2 font-normal  text-xs max-sm:px-4 md:text-2xl leading-9 tracking-widest">
            Potenciamos el crecimiento digital con <br/> 
            soluciones que aceleran e impulsan el <br/> 
            <span className="font-semibold">impacto empresarial</span>
          </p>
        </div>
        <div className=" lg:-mt-48 px-4 py-20 mx-auto lg:mr-14 w-1/2 h-auto max-md:mx-auto">
          <img src={celu} alt="img-hero"/>
        </div>
      </section>
      <SectionNosotros/>
      <SectionServices/>
      <SectionHablemos/>
    
    </>
  )
}



  
  