import { Heart, BookOpen, Music, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const purposes = [
  {
    icon: Heart,
    title: "Bienestar Comunitario",
    description: "Impulsamos programas que mejoran la calidad de vida de las comunidades vulnerables.",
  },
  {
    icon: BookOpen,
    title: "Educación y Cultura",
    description: "Fomentamos la lectura, la escritura creativa y las expresiones artísticas como vehículo de transformación.",
  },
  {
    icon: Music,
    title: "Talentos Artísticos",
    description: "Apoyamos a artistas y músicos locales para que sus historias sean escuchadas.",
  },
  {
    icon: Users,
    title: "Inclusión Social",
    description: "Creamos espacios de participación para personas de todas las edades y condiciones.",
  },
];

const DonaSection = () => {
  return (
    <section className="py-16 bg-secondary/5" id="dona">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
          Dona y Transforma Vidas
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tu aporte hace posible que sigamos llevando arte, cultura y esperanza a quienes más lo necesitan.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {purposes.map((item) => (
            <div key={item.title} className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <Button size="lg">
          <Heart className="h-5 w-5 mr-2" /> Quiero Donar
        </Button>
      </div>
    </section>
  );
};

export default DonaSection;
