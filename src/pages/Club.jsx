import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../assets/styles.css";
import whatsappIcon from "../assets/images/whatsapp_icon.png";

function Club() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_meuvykm",        // ✅ ID del servicio
      "template_aq6plub",       // ✅ ID del template
      form.current,
      "kgeUI2dp3HO6bHij6"       // ✅ Public key
    )
    .then(() => {
      alert("✅ Formulario enviado con éxito");
      form.current.reset();
    })
    .catch((error) => {
      console.error("❌ Error al enviar:", error.text);
      alert("❌ Ocurrió un error. Intentá más tarde.");
    });
  };

  return (
    <>
      <main className="club-main">
        <h2>Únete al Club Cu4troancos</h2>
        <p>Rellena el siguiente formulario para asociarte:</p>

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" name="nombre" required />

          <label htmlFor="apellido">Apellido:</label>
          <input type="text" name="apellido" required />

          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" name="email" required />

          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" name="telefono" />

          <label htmlFor="ciudad">Ciudad:</label>
          <input type="text" name="ciudad" />

          <label htmlFor="comentarios">Comentarios adicionales:</label>
          <textarea name="comentarios" />

          <button type="submit">Enviar</button>
        </form>
      </main>
    </>
  );
}

export default Club;


