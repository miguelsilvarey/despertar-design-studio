import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConocenosSection = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container text-center text-primary-foreground">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          ¡Conócenos y forma parte del cambio!
        </h2>
        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
          Descubre cómo el arte y la cultura transforman vidas en nuestra comunidad.
        </p>
        <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
          <Link to="/contacto">Contáctanos</Link>
        </Button>
      </div>
    </section>
  );
};

export default ConocenosSection;
