import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Casa",
    imageUrl: "/images/casa.jpg", // Atualize o caminho conforme necessário
    link: "/category/casa",
  },
  {
    title: "Apartamento",
    imageUrl: "/images/apartamento.jpg", // Atualize o caminho conforme necessário
    link: "/category/apartamento",
  },
  {
    title: "Cobertura",
    imageUrl: "/images/cobertura.jpg", // Atualize o caminho conforme necessário
    link: "/category/cobertura",
  },
  {
    title: "Comercial",
    imageUrl: "/images/comercial.jpg", // Atualize o caminho conforme necessário
    link: "/category/comercial",
  },
];

export const CategoriesSection = () => {
  return (
    <div
      id="categories"
      className="p-14 flex flex-col items-center bg-background h-[700px] justify-center bg-white"
    >
      <h2 className="text-2xl font-semibold text-center mb-8">Categorias</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {categories.map((category, index) => (
          <Link href={category.link} key={index}>
            <div className="relative block w-72 h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <Image
                src={category.imageUrl}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {category.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
