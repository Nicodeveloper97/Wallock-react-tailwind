import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function SectionHablemos() {
  
  return (
    <>
      <section
        className="bg-[#F2F2F7] w-full"
        id="Hablemos"
      >
      <section className="w-full h-auto bg-[#F2F2F7] py-8">
  <div className=" rounded-lg bg-[#F2F2F7] px-8 pt-6 pb-8 mx-auto rounded-lg" 
    style={{ width: '100%', maxWidth: '1195px', height: 'auto', maxHeight: '722px' }}>
    
    <h2 className="font-quicksand text-indigo-800 text-center font-semibold text-3xl py-2">
      Hablemos!
    </h2>
    <hr className="my-6 opacity-1 border-1.5 border-[#3A0CA3] w-full lg:w-1/2 lg:h-2 mx-auto" />

    <form action="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-quicksand mb-2" htmlFor="name">
            Nombre y Apellido
          </label>
          <input
            id="name"
            type="text"
            placeholder="Ej: Alejandra Galarza"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-quicksand mb-2" htmlFor="company">
            Empresa
          </label>
          <input
            id="company"
            type="text"
            placeholder="Ej: Wallock"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-quicksand mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ej: agalarza@wallock.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-gray-700 text-sm font-quicksand mb-2" htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          placeholder="Déjanos conocer más sobre tu proyecto..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none"
          required
        ></textarea>
      </div>

      <div className="mt-8 flex justify-center">
  <button
    type="submit"
    className="bg-[#3A0CA3] hover:bg-[#3A0CA3] text-white font-bold focus:outline-none focus:shadow-outline w-[340px] h-[75.15px] rounded-full"
  >
    Enviar
  </button>
</div>


    </form>
    
  </div>
</section>


<section className="bg-[#F2F2F7] w-full pt-12  pb-8 ">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-10 py-5 space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
      <div className="flex items-center space-x-2">
        <p className="font-poppins text-sm text-[#2B2B2B]">Emilio Pettoruti 263, Córdoba, Argentina</p>
      </div>
      <div className="flex items-center space-x-2">
        <BsTelephone className="text-[#2B2B2B] text-lg" />
        <p className="font-poppins text-sm text-[#2B2B2B]">+54 9 351 819 8548</p>
      </div>
      <div className="flex items-center space-x-2">
        <MdOutlineEmail className="text-[#2B2B2B] text-lg" />
        <p className="font-poppins text-sm text-[#2B2B2B]">hablemos@wallock.com</p>
      </div>
    </div>
  </div>
</section>

<footer className="w-full h-20 grid grid-rows text-white bg-black ">
        <h2 className="text-slate-800 text-left m-auto text-white">&copy; <span className="font-quicksand">Wallock</span> - Todos los derechos reservados </h2>
      </footer>
      </section>
    </>
  )
} 

