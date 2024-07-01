import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 justify-center items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white">
              Información
            </span>
          </div>
          <p className="text-xs">
            La entidad aseguradora dispone de un{" "}
            <b className="text-yellow-300">Servicio de Atención al Asegurado</b>{" "}
            que atenderá las consultas y reclamos que presenten los tomadores de
            seguros, asegurados, beneficiarios y/o derechohabientes. En caso de
            que existiera un reclamo ante la entidad aseguradora y que el mismo
            no haya sido resuelto o haya sido desestimado, total o parcialmente,
            o que haya sido denegada su admisión, podrá comunicarse con la
            Superintendencia de Seguros de la Nación por teléfono al
            0800-666-8400, correo electrónico a{" "}
            <b className="text-yellow-300">consultas@ssn.gob.ar</b> o formulario
            disponible en la página
            <b className="text-yellow-300">consultas@ssn.gob.ar</b>
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center md:items-start">
          <h4 className="text-lg font-semibold text-white">Contacto</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">+54 (123) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">
                ejemploJohn@johnpellegrini.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">
                Blvd. 27 de Febrero 275, S2000 Rosario, Santa Fe
              </span>
            </div>
          </div>
        </div>
        <a href="https://www.argentina.gob.ar/superintendencia-de-seguros">
          {" "}
          <Image
            src="/ssn-logo.png"
            width={280}
            height={280}
            alt="Imagen del logo de la Superintendencia de Seguros de la Nación"
          />
        </a>
      </div>
    </footer>
  );
};
