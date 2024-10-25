import { useForm } from 'react-hook-form';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchType } from '../types';


export default function SectionHablemos() {

  const { register, handleSubmit, formState: { errors } } = useForm<SearchType>();

  const onSubmit = (data: SearchType) => {
    toast.info('Formulario enviado con éxito!',{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
      style: { backgroundColor: '#022FDA' }
    });
    console.log(data);
  };
  
  
  return (
    <>
      <h3 
        className="w-full font-quicksand text-[#031FA2] font-semibold text-xl tracking-widest pl-8 sm:pl-14 px-4 pt-6 pb-4 bg-[#F2F2F7]" id='Hablemos'
      >
        Contacto
      </h3>

      <div className='bg-white w-[380px] lg:w-[1094px] md:w-[680px] m-auto flex lg:gap-10'>

        <div className="lg:w-[656px] mb-16 lg:mt-10">{/*1*/}
          
          <div className='lg:w-[624px] lg:h-[89px] lg:mb-16'>{/*1.1*/}
            <h2 className="lg:w-3/4 font-quicksand text-left text-2xl lg:text-4xl pt-12 pb-6">Conectar con Expertos en Soluciones Digitales</h2>
          </div>{/*1.1*/}

          <div className="w-full">{/*1.2*/}
              <p 
                className="w-full lg:h-[54px] text-[#414F62] text-base font-quicksand mx-auto mb-8 lg:mb-14"
              >
                Cuéntanos como podemos ayudarte a impulsar tu negocio con soluciones digitales personalizadas. Nuestro equipo esta aquí para acompañarte en cada paso
              </p>
              
              <form
              onSubmit={handleSubmit(onSubmit)}
              className='lg:w-[624px]'
              >
                <div className='lg:flex lg:flex-row lg:gap-8'> {/*1.2.1*/}
                  <div className="flex flex-col">{/*1.2.1.1*/}
                    <label htmlFor="nombre" className="font-quicksand text-black text-lg text-start my-1">
                      Nombre: 
                    </label>
                    <input 
                      id="nombre"
                      type="text"
                      placeholder="Tu Nombre"
                      className={`lg:w-[295px] lg:h-[48px] border border-[#022FDA] px-3 py-3 rounded-lg font-quicksand ${errors.nombre ? 'mb-1' : 'mb-4'}`}
                      {...register('nombre', { required: 'El Nombre es obligatorio' })}
                    />
                    {errors.nombre && <span className='text-red-500 font-quicksand font-semibold '>{errors.nombre.message}</span>}
                  </div>{/*1.2.1.1*/}
                  <div className="flex flex-col">{/*1.2.1.2*/}
                    <label htmlFor="apellido" className="font-quicksand text-lg text-black text-start my-1">
                      Apellido: 
                    </label>
                    <input 
                      id="apellido"
                      type="text" 
                      placeholder="Tu Apellido"
                      className={`lg:w-[295px] lg:h-[48px] border border-[#022FDA] px-3 py-3 rounded-lg font-quicksand ${errors.nombre ? 'mb-1' : 'mb-4'}`}
                      {...register('apellido', { required: 'El Apellido es obligatorio' })}
                      />
                      {errors.apellido && <span className='text-red-500 font-quicksand font-semibold'>{errors.apellido.message}</span>}
                  </div>{/*1.2.1.2*/}
                </div> {/*1.2.1*/}
                <div className='lg:w-[624px] '>{/*1.2.2*/}
                  <div className="w-full flex flex-col">{/*1.2.2.1*/}
                    <label htmlFor="email" className="font-quicksand text-lg text-black text-start my-1 lg:mt-6">
                      E-mail: 
                    </label>
                    <input 
                      id="email"
                      type="text"    
                      placeholder="Tu E-mail"
                      className={`w-full lg:h-[48px] mx-auto border border-[#022FDA] px-4 py-3 rounded-lg font-quicksand ${errors.nombre ? 'mb-1' : 'mb-4'}`}
                      {...register('email', { 
                        required: 'El E-mail es obligatorio', 
                        pattern: { 
                          value: /^\S+@\S+$/i, 
                          message: 'Formato de email inválido' 
                        } 
                      })}
                      />
                    {errors.email && <span className='text-red-500 font-quicksand font-semibold'>{errors.email.message}</span>}

                  </div>{/*1.2.2.1*/}
                  <div className="md:w-full mx-auto flex flex-col">{/*1.2.2.2*/}
                    <label htmlFor="mensaje" className="font-quicksand text-lg text-black text-start my-1 lg:mx- lg:mt-6">
                      Tu mensaje: 
                    </label>
                    <textarea 
                      id="mensaje"
                      placeholder="Déjanos conocer más sobre tu proyecto para brindarte la mejor solución posible. Por favor, proporciona detalles sobre tu visión, objetivos y requisitos específicos. Además, sería útil saber cual es tu presupuesto aproximado y el tiempo estimado para la realización del proyecto. ¡ Estamos emocionados de colaborar contigo para hacer realidad tu idea"
                      className={`lg:w-[624px] w-full h-[230px] md:h-[162px] mx-auto bg-white border border-[#022FDA] p-4 rounded-md text-base font-quicksand ${errors.nombre ? 'mb-1' : 'mb-4'}`}
                      {...register('mensaje', { 
                        required: 'El Mensaje es obligatorio', 
                        maxLength: { value: 500, message: 'El mensaje no puede exceder los 500 caracteres' } 
                      })}
                      />
                      {errors.mensaje && <span className='text-red-500 font-quicksand font-semibold'>{errors.mensaje.message}</span>}
                    <p className="text-[#828282] mb-8 text-start">0/500</p>

                  </div>{/*1.2.2.2*/}
                  <input type="submit" className="lg:w-[624px] w-full md:h-[68px] bg-[#0A2FDA] rounded-full font-quicksand text-2xl text-center font-semibold text-white py-2 px-6 mx-auto cursor-pointer hover:bg-[#1A1FCA]"
                  />
                </div>{/*1.2.2*/}
              </form>

          </div>{/*1.2*/}
        </div>{/*1*/}

        <div className='xl:w-[390px] m-auto float-end'>
          <img 
            src="/src/assets/hablemos.jpeg" 
            alt="Imagen Contacto" 
            className='w-full xl:px-1 lg:my-auto hidden lg:block rounded-xl'
          />
        </div>

      </div>
      <ToastContainer
        position="top-center"
        theme="colored"
        limit={1}
      />
    </>
  )
}







