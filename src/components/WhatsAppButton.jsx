// src/components/WhatsAppButton.jsx
import React from "react";
import whatsappIcon from "../assets/images/whatsapp_icon.png";
import "../assets/styles.css"; // Asegurate de tener los estilos del botón ahí

function WhatsAppButton() {
  return (
    <div id="whatsapp-button">
      <a href="https://wa.me/+543816098089" target="_blank" rel="noreferrer">
        <img src={whatsappIcon} alt="WhatsApp" />
        <span>Chatea por WhatsApp</span>
      </a>
    </div>
  );
}

export default WhatsAppButton;
