import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "./Sections/HeroSection";
import { PropertiesCarousel } from "./Sections/PropertiesCarousel";
import { CategoriesSection } from "./Sections/CategoriesSection";
import { AboutSection } from "./Sections/AboutSection";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton"; // Importando o botão flutuante
import Footer from "@/components/layout/Footer";

// Metadados da página
export const metadata = {
  title: "Detalhes do Imóvel",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PropertiesCarousel />
      <CategoriesSection />
      <AboutSection />
      <FloatingWhatsAppButton />
      <Footer />
    </>
  );
}
