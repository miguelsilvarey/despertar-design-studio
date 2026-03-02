import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonios = [
  {
    text: "Gracias a la corporación descubrí que nunca es tarde para escribir y compartir mis historias. A mis 70 años publiqué mi primer poema.",
    author: "Participante Tertulia Hilando Recuerdos",
  },
  {
    text: "El arte me salvó. Encontré en la corporación un espacio donde mi música fue valorada y donde pude crecer como artista.",
    author: "Héctor Saúl Arias, Músico",
  },
  {
    text: "La corporación ha sido un faro de esperanza para nuestra comunidad. Sus proyectos culturales nos han unido y fortalecido.",
    author: "Líder comunitario, Villa del Rosario",
  },
];

const TestimoniosSection = () => {
  return (
    <section className="py-16 bg-primary/5" id="testimonios">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
          Testimonios
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonios.map((t, i) => (
            <Card key={i} className="relative">
              <CardContent className="pt-8 pb-6 px-6">
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 left-4" />
                <p className="text-muted-foreground italic leading-relaxed mb-4 mt-4">
                  "{t.text}"
                </p>
                <p className="text-sm font-semibold text-foreground">— {t.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;
