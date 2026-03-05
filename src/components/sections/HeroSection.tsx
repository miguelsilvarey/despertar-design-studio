import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-secondary overflow-hidden">
      {/* Placeholder background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/50" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container relative z-10 text-center text-secondary-foreground py-20">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-light leading-tight italic">
            "Toda persona con talento tiene una historia que merece ser contada y escuchada"
          </p>
          <footer className="mt-6 text-lg md:text-xl opacity-80">
            ∼ Rosario San Miguel
          </footer>
        </blockquote>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => navigate("/nosotros")}>
            Conócenos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/60 text-white hover:bg-white/10"
            onClick={() => navigate("/contacto")}
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
