export const Navbar = () => {
  return (
    <div className="h-16 w-full flex justify-between px-4 md:px-28 2xl:px-80 2xl:h-28 items-center py-4 fixed z-20 bg-[#0F0F10] shadow shadow-neutral-800">
      <a href="/">
        <img src="/logo_completo.png" className="h-16 w-auto md:h-16 md:py-2 2xl:h-16 hidden lg:block" alt="Logo Completo"/>
        <img src="/logo.png" className="h-10 w-auto md:h-16 md:py-2 2xl:h-24 lg:hidden" alt="Logo"/>
      </a>
      <div className="flex gap-2 md:gap-4 items-center">
        <a href={`https://wa.me/5493412757294`} target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.svg" className="h-10 w-10" alt="WhatsApp"/>
        </a>
        <a href="https://www.instagram.com/johnpellegriniseguros/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.svg" className="h-10 w-10" alt="Instagram"/>
        </a>
      </div>
    </div>
  );
};
