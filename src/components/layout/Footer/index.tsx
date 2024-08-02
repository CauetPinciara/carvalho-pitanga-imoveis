import { FC } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <div className="bg-gray-200 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Sobre nós</h3>
            <ul>
              <li className="mb-2">
                <Link href="#hero" scroll={false}>
                  A Carvalho Pitanga Imóveis
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#services" scroll={false}>
                  Serviços
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#history" scroll={false}>
                  Nossa História
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#contact" scroll={false}>
                  Contato
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#blog" scroll={false}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Nossos serviços</h3>
            <ul>
              <li className="mb-2">
                <Link href="/#rentals" scroll={false}>
                  Imóveis para locação
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#purchases" scroll={false}>
                  Imóveis para compra
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Políticas</h3>
            <ul>
              <li className="mb-2">
                <Link href="/privacy-policy">Política de privacidade</Link>
              </li>
              <li className="mb-2">
                <Link href="/terms">Termo de responsabilidade</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6 text-gray-800 hover:text-gray-600" />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-6 h-6 text-gray-800 hover:text-gray-600" />
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="w-6 h-6 text-gray-800 hover:text-gray-600" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 text-gray-800 hover:text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>© 2024 Carvalho Pitanga Imóveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
