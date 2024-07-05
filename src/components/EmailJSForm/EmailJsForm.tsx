"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EmailJsForm = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (formRef: React.RefObject<HTMLFormElement>) => {
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_sbp0fsh",
          "template_zna8w2m",
          formRef.current,
          "9WDePDRC2s6hN1xRx"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Mensaje enviado con éxito");
          },
          (error) => {
            console.log(error.text);
            toast.error("Ocurrió un error al enviar el mensaje");
          }
        );
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formName) {
      toast.error("El campo nombre no puede estar vacío.");
      return;
    }

    if (!formEmail) {
      toast.error("El campo email no puede estar vacío.");
      return;
    }

    if (!validateEmail(formEmail)) {
      toast.error("Por favor, ingrese un email válido (ejemplo@gmail.com).");
      return;
    }

    if (!formMessage) {
      toast.error("El campo mensaje no puede estar vacío.");
      return;
    }

    sendEmail(formRef);

    setFormName("");
    setFormEmail("");
    setFormMessage("");
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <section className="flex flex-col w-full mt-16 px-4">
      <div className="flex w-full max-w-4xl mx-auto flex-col items-center justify-center bg-[#18181B] rounded-lg border border-zinc-800 p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg">
        <div className="w-full text-center mb-6">
          <p className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            ¡Contáctanos!
          </p>
          <span className="text-gray-400">
            ¿Tiene alguna pregunta o necesita ayuda? Rellene el siguiente
            formulario y nos pondremos en contacto con usted lo antes posible.
          </span>
        </div>
        <form
          className="w-full space-y-6"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div>
            <label
              className="block text-sm font-medium text-white mb-2"
              htmlFor="expName"
            >
              Nombre
            </label>
            <input
              className="text-white h-10 w-full rounded-md border border-[#303036] px-4 py-2 text-sm bg-[#0F0F10] focus:outline-white"
              id="expName"
              placeholder="Ingresa tu nombre"
              name="user_name"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-white mb-2"
              htmlFor="expEmail"
            >
              Email
            </label>
            <input
              className="text-white h-10 w-full rounded-md border border-[#303036] px-4 py-2 text-sm bg-[#0F0F10] focus:outline-white"
              id="expEmail"
              placeholder="Ingresa tu email"
              name="user_email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-white mb-2"
              htmlFor="expMessage"
            >
              Mensaje
            </label>
            <textarea
              className="text-white w-full resize-none rounded-md border border-[#303036] px-4 py-2 text-sm bg-[#0F0F10] focus:outline-white"
              id="expMessage"
              placeholder="Cuéntanos sobre tu experiencia"
              name="message"
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="h-10 w-full rounded-md bg-white text-black text-sm font-medium transition-all duration-300 hover:bg-opacity-80 shadow-md hover:shadow-lg"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};
