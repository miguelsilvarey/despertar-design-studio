import { useNavigate } from "react-router-dom";

const ConocenosSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-primary py-12">
      <div className="container text-center text-primary-foreground">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          ¡Conócenos y forma parte del cambio!
        </h2>
        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
          Descubre cómo el arte y la cultura transforman vidas en nuestra comunidad.
        </p>
        <button
          onClick={() => navigate("/contacto")}
          className="h-10 rounded-md px-8 text-sm font-medium border border-white text-white hover:bg-white/10 transition-colors"
        >
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default ConocenosSection;
