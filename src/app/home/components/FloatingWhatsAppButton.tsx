import Link from "next/link";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importando o ícone do WhatsApp do react-icons

const FloatingWhatsAppButton: FC = () => {
  const whatsappLink = "https://wa.me/SEU_NUMERO_DE_WHATSAPP"; // Atualize com seu número de WhatsApp

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer">
        <FaWhatsapp className="w-6 h-6" />
      </div>
    </Link>
  );
};

export default FloatingWhatsAppButton;
