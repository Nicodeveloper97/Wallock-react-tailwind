

export default function Footer() {
  return (
    <footer className="w-full lg:h-[117px] bg-[#F2F2F7] pt-20">
      <div className="bg-white grid grid-rows lg:pl-[60px] md:pl-[30px] pl-[12px] mt-[12px]">
        <div className="flex justify-between">
        <a 
          href="/index.html" 
          className="lg:h-[39px] h-[24px] lg:w-[143px] font-quicksand text-xl lg:text-2xl font-semibold leading-loose text-indigo-500 no-underline cursor-pointer mt-[12px]"
        > 
          Wallock 
        </a>
        <a href="https://www.linkedin.com" target="_blank " rel="noopener">
          <img src="/src/assets/IconLinkedin.svg" alt="Icono Linkedin" className="float lg:mr-[60px] md:mr-[30px] mr-[16px] mt-[24px]"/>
        </a>
        </div>
          <h2 
            className="font-quicksand lg:h-[42px] md:mt-[12px] mb-[48px] lg:py-[10px] text-slate-900 text-left">
              All rights reserved
              &copy;  {' '}
            <span className="font-quicksand">Wallock</span>
          </h2>
      </div>
   </footer>
  )
}
