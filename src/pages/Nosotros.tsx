import Layout from "@/components/Layout";
import { Target, Eye, Heart, Users, BookOpen, Lightbulb } from "lucide-react";

const valores = [
  { icon: Heart, title: "Compromiso Social", desc: "Trabajamos con pasión por las comunidades más vulnerables." },
  { icon: Users, title: "Inclusión", desc: "Creemos en la participación de todas las personas sin distinción." },
  { icon: BookOpen, title: "Cultura", desc: "El arte y la cultura son nuestras herramientas de transformación." },
  { icon: Lightbulb, title: "Innovación", desc: "Buscamos formas creativas de generar impacto social positivo." },
];

const Nosotros = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-heading font-bold text-center mb-6 text-foreground">Nosotros</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            La Corporación Despertar por el Arte y la Cultura es una ONG sin ánimo de lucro fundada el 22 de abril de 2016 en Villa del Rosario, Norte de Santander, Colombia.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-muted rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Target className="h-6 w-6 text-primary" /></div>
                <h2 className="text-xl font-heading font-bold text-foreground">Misión</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Promover el desarrollo integral de las comunidades a través del arte, la cultura, el emprendimiento y la educación, generando espacios de participación, inclusión y transformación social.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Eye className="h-6 w-6 text-primary" /></div>
                <h2 className="text-xl font-heading font-bold text-foreground">Visión</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como una organización líder en la promoción del arte y la cultura como motores de cambio social en la región y el país.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-bold text-center mb-8 text-foreground">Nuestros Valores</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {valores.map((v) => (
              <div key={v.title} className="flex gap-4 p-4 rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
