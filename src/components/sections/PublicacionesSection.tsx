import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const publicaciones = [
  {
    title: "Despertar Poético sin Fronteras",
    description:
      "Antología poética que reúne las voces de poetas de diferentes países, conectados por el amor al arte y la palabra. Una obra que trasciende fronteras y celebra la diversidad cultural.",
    year: "2020",
  },
  {
    title: "Cuando a todos nos cambió la Vida",
    description:
      "Compilación de relatos y crónicas que narran las experiencias vividas durante la pandemia, contadas desde la perspectiva de la comunidad artística y cultural de la región.",
    year: "2021",
  },
];

const PublicacionesSection = () => {
  return (
    <section className="py-16 bg-muted" id="publicaciones">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
          Últimas Publicaciones
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {publicaciones.map((pub) => (
            <Card key={pub.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-primary/30" />
              </div>
              <CardHeader>
                <CardDescription>{pub.year}</CardDescription>
                <CardTitle className="text-xl">{pub.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                <Button variant="link" className="px-0 mt-3">Leer más →</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicacionesSection;
