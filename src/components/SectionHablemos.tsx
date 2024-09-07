import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";


export default function SectionHablemos() {
  
  return (
    <>
      <section
        className="bg-[#F2F2F7] w-full h-72 bg-custom-gradient p-10"
        id="Hablemos"
      >

        <h2 className='font-quicksand text-indigo-800 text-center font-semibold text-3xl py-2'>
          Hablemos!
        </h2>
        <hr className=" my-10 opacity-1 border-1.5 border-[#3A0CA3] w-full lg:w-1/2 lg:h-2 mx-auto" />
      </section>
      <section className="w-full h-auto bg-[#F2F2F7]">
        <form action="" className="-mt-20 mx-auto w-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center p-auto">
          <div className="">
            <label className="block text-black text-sm font-quicksand-800 mb-2" htmlFor=""> Nombre y apellido </label>
            <input placeholder="Ej: Nicolas Iglesias" className="h-10 px-3 py-2 border bg-[#F2F2F7] border-[#D5D4DC] rounded-lg" required type="text" />
            </div>
            <div>
            <label className="block text-black text-sm font-quicksand-800 mb-2" htmlFor=""> Empresa </label>
            <input placeholder="Ej: Wallock" className="h-10 px-3 py-2 border border-[#D5D4DC] bg-[#F2F2F7] rounded-lg ]" required type="text" />
            </div>
            <div>
            <label className="block text-black text-sm font-quicksand-800 mb-2" htmlFor=""> Email </label>
            <input placeholder="Ej: niglesias@wallock.com" className="h-10 px-3 py-2  border border-[#D5D4DC] rounded-lg bg-[#F2F2F7]" required type="email" />
            </div>
            </div>

          <div className="grid grid-row-1 gap-4 pl-24 p-10">
          <label className="block text-black text-sm bg-[#F2F2F7] font-quicksand-800 justify-center items-center sm:w-full" htmlFor=""> Mensaje </label>
          <textarea className="h-40 w-5/6 resize-none border border-[#D5D4DC] bg-[#F2F2F7]" name= "mensaje" placeholder="Déjanos conocer más sobre tu proyecto para brindarte la mejor solución posible. Por favor, proporciona detalles sobre tu visión, objetivos y requisitos específicos. Además, sería útil saber cuál es tu presupuesto aproximado y el tiempo estimado para la realización del proyecto. ¡Estamos emocionados de colaborar contigo para hacer realidad tu idea!" required></textarea>
        </div>
        <div className="flex justify-center items-place-center ">
          <button type="submit" className="font-quicksand text-center px-16 py-4 rounded-3xl bg-[#3A0CA3] hover:bg-indigo-600 text-white cursor-pointer"> Enviar </button>
          </div>
        </form>

      </section>
      <section className="bg-[#F2F2F7]">
          <div className="container">
            <div className="grid items-place-left">
              <div className="p-20 space-y-5">
                <img src="../public/img/img footer.png" alt="" />
                <h2 className="font-poppins">Emilio Pettoruti 2636</h2>
                <h2 className="font-poppins">Cordoba, Argentina</h2>
                <h2 className="font-poppins text-justify flex gap-3"> <BsTelephone className="text-[#2B2B2B]"/> +54 9 351 819 8548 </h2>
                <h2 className="font-poppins text-justify flex gap-3"> <MdOutlineEmail className="text-[#2B2B2B]"/> hablemos@wallock.com </h2>
              </div>

            </div>

          </div>

      </section>
      <footer className="w-full h-20 grid grid-rows text-white bg-black ">
        <h2 className="text-slate-800 text-center m-auto text-white">&copy; <span className="font-quicksand">Wallock</span> - Todos los derechos reservados </h2>
      </footer>
    </>
  )
} 

