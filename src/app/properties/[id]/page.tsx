import { Navbar } from "@/components/layout/Navbar";
import PropertyDetails from "./PropertyDetailClient";
import Footer from "@/components/layout/Footer";

type PropertyDetailsProps = {
  params: { id: string };
};

const PropertyPage = ({ params }: PropertyDetailsProps) => {
  return (
    <>
      <Navbar />
      <PropertyDetails id={params.id} />

      <Footer />
    </>
  );
};

export default PropertyPage;
