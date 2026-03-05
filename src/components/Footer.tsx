import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">
            Corporación Despertar por el Arte y la Cultura
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Somos una ONG sin ánimo de lucro que promueve el arte y la cultura como herramientas
            de transformación social en Villa del Rosario, Norte de Santander, Colombia.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/tienda" className="hover:text-primary transition-colors">Tienda</Link></li>
            <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              Cra. 3b #4-110, Villa Del Rosario, Norte de Santander, Colombia
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              +57 313 815 9878
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              despertararteycultura@gmail.com
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/Corporaciondespertarporelarteylacultura" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/Corporaciondespertarporelarteylacultura" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@corporaciondespertarporela3227?si=fR5U-OLao277L8yw" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/20 py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Corporación Despertar por el Arte y la Cultura. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
