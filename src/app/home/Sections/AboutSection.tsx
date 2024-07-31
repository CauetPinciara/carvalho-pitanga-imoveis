import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button"; // Importando o botão do shadcn UI

export const AboutSection = () => {
  return (
    <div
      id="about"
      className="p-14 flex md:flex-row items-center bg-background h-[700px] justify-center"
    >
      <div className="w-[80%] flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 px-4 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-primary mb-4">SOBRE A</h2>
          <h3 className="text-3xl font-bold text-secondary mb-4">
            CARVALHO PITANGA IMÓVEIS
          </h3>
          <p className="text-gray-700 mb-4">
            Carvalho Pitanga Imóveis é reconhecida como uma das mais inovadoras
            e respeitadas imobiliárias full service do Brasil. Atuamos nos
            segmentos do mercado primário, com imóveis em lançamentos e em
            construção; no mercado secundário, com imóveis prontos, novos e
            usados, além de oferecer serviços de locação, administração de
            patrimônios, planejamento e marketing de empreendimentos
            imobiliários.
          </p>
          <p className="text-gray-700 font-semibold mb-6">
            Nossa trajetória é marcada pela inovação e criatividade, sempre
            antecipando as tendências do mercado para oferecer as melhores
            soluções aos nossos clientes.
          </p>
          <Button className="bg-primary text-white hover:bg-primary-dark transition-colors duration-300">
            VER HISTÓRIA
          </Button>
        </div>
        <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
          <AspectRatio
            ratio={16 / 9}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/images/empresa.jpg" // Atualize o caminho conforme necessário
              alt="Sobre a Empresa"
              className="object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};
