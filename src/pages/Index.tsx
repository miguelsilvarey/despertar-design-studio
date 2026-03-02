import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ConocenosSection from "@/components/sections/ConocenosSection";
import QuienesSomosSection from "@/components/sections/QuienesSomosSection";
import DonaSection from "@/components/sections/DonaSection";
import OrigenSection from "@/components/sections/OrigenSection";
import AudiovisualSection from "@/components/sections/AudiovisualSection";
import PilaresSection from "@/components/sections/PilaresSection";
import PublicacionesSection from "@/components/sections/PublicacionesSection";
import ProyectosSection from "@/components/sections/ProyectosSection";
import TestimoniosSection from "@/components/sections/TestimoniosSection";
import ContactoSection from "@/components/sections/ContactoSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ConocenosSection />
      <QuienesSomosSection />
      <DonaSection />
      <OrigenSection />
      <AudiovisualSection />
      <PilaresSection />
      <PublicacionesSection />
      <ProyectosSection />
      <TestimoniosSection />
      <ContactoSection />
    </Layout>
  );
};

export default Index;
