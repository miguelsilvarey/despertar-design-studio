const OrigenSection = () => {
  return (
    <section className="py-16 bg-background" id="origen">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Nuestro Origen
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La Corporación Despertar por el Arte y la Cultura nació el <strong className="text-foreground">22 de abril de 2016</strong> en
              Villa del Rosario, Norte de Santander, Colombia, como una iniciativa ciudadana
              para promover el arte y la cultura como herramientas de cambio social.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desde sus inicios, la organización ha trabajado por visibilizar los talentos
              artísticos de la región, crear espacios de encuentro y diálogo, y fortalecer
              el tejido social a través de proyectos culturales, literarios y audiovisuales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fundada por Rosario San Miguel y un grupo de gestores culturales comprometidos,
              la corporación ha logrado impactar positivamente la vida de cientos de personas,
              especialmente adultos mayores, jóvenes y comunidades en situación de vulnerabilidad.
            </p>
          </div>

          <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎨</span>
              </div>
              <p className="text-sm">Imagen placeholder</p>
              <p className="text-xs opacity-60">Se reemplazará con foto real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrigenSection;
