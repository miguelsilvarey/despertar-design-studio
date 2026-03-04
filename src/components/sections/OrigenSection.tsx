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
          <div className="rounded-lg overflow-hidden aspect-[4/3]">
            <img
              src="/images/origen.jpg"
              alt="Corporación Despertar por el Arte y la Cultura"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrigenSection;
