const AudiovisualSection = () => {
  return (
    <section className="py-16 bg-secondary text-secondary-foreground" id="audiovisual">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Experiencia Audiovisual
            </h2>
            <p className="opacity-80 leading-relaxed mb-4">
              A través de nuestras producciones audiovisuales, damos voz a los talentos
              musicales y artísticos de la región. Cada historia, cada melodía, cada
              interpretación es un testimonio del poder transformador del arte.
            </p>
            <p className="opacity-80 leading-relaxed">
              Conoce a <strong>Héctor Saúl Arias</strong>, uno de los talentos que hemos
              acompañado en su camino artístico, y descubre cómo la música transforma vidas.
            </p>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Héctor Saúl Arias - Despertar por el Arte y la Cultura"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudiovisualSection;
