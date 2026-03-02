import { Target, Eye } from "lucide-react";

const QuienesSomosSection = () => {
  return (
    <section className="py-16 bg-background" id="quienes-somos">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
          Quiénes Somos
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          La Corporación Despertar por el Arte y la Cultura es una ONG sin ánimo de lucro,
          fundada en Villa del Rosario, Norte de Santander, Colombia. Trabajamos por la promoción
          del arte, la cultura y el emprendimiento como herramientas de transformación social,
          empoderamiento comunitario y desarrollo humano integral.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-muted rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">Misión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Promover el desarrollo integral de las comunidades a través del arte, la cultura,
              el emprendimiento y la educación, generando espacios de participación, inclusión
              y transformación social que contribuyan al bienestar y la calidad de vida de las personas.
            </p>
          </div>

          <div className="bg-muted rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">Visión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconocidos como una organización líder en la promoción del arte y la cultura
              como motores de cambio social, contribuyendo a la construcción de comunidades más
              equitativas, empoderadas y con identidad cultural fortalecida en la región y el país.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomosSection;
