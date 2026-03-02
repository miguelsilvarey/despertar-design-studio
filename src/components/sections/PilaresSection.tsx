import { Handshake, Sparkles, HeartPulse, Lightbulb } from "lucide-react";

const pilares = [
  {
    icon: Handshake,
    title: "Asociatividad",
    description: "Fortalecemos los lazos comunitarios y promovemos el trabajo colaborativo como base del desarrollo social.",
  },
  {
    icon: Sparkles,
    title: "Empoderamiento",
    description: "Brindamos herramientas y espacios para que las personas descubran y potencien sus capacidades y talentos.",
  },
  {
    icon: HeartPulse,
    title: "Equilibrio Emocional",
    description: "Fomentamos el bienestar integral a través del arte como medio de expresión y sanación emocional.",
  },
  {
    icon: Lightbulb,
    title: "Emprendimiento",
    description: "Impulsamos iniciativas productivas y creativas que generan oportunidades y desarrollo sostenible.",
  },
];

const PilaresSection = () => {
  return (
    <section className="py-16 bg-background" id="pilares">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
          Nuestros Pilares
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((pilar) => (
            <div
              key={pilar.title}
              className="text-center p-8 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                <pilar.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{pilar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pilar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilaresSection;
