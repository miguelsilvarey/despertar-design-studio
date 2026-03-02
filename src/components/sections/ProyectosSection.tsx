import { Card, CardContent } from "@/components/ui/card";

const proyectos = [
  {
    title: "Tertulia Hilando Recuerdos",
    description:
      "Espacio de encuentro con adultos mayores donde a través de la narrativa oral se rescatan memorias, tradiciones y saberes ancestrales de la comunidad.",
    emoji: "🧶",
  },
  {
    title: "Almendrales y Hojarasca",
    description:
      "Proyecto literario y cultural que explora la identidad regional a través de la poesía, el cuento y las tradiciones populares de Villa del Rosario.",
    emoji: "🍃",
  },
  {
    title: "Villa del Rosario Viva en el Bicentenario",
    description:
      "Iniciativa que celebra y difunde el patrimonio histórico y cultural de Villa del Rosario en el marco del Bicentenario de Colombia.",
    emoji: "🏛️",
  },
  {
    title: "Producciones Audiovisuales",
    description:
      "Creación de contenido audiovisual que documenta y visibiliza los talentos artísticos, las historias y la riqueza cultural de la región.",
    emoji: "🎬",
  },
];

const ProyectosSection = () => {
  return (
    <section className="py-16 bg-background" id="proyectos">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
          Nuestros Proyectos
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proyectos.map((proyecto) => (
            <Card key={proyecto.title} className="group hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-40 bg-secondary/5 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                {proyecto.emoji}
              </div>
              <CardContent className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-2">{proyecto.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{proyecto.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectosSection;
