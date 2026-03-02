import Layout from "@/components/Layout";
import { ShoppingBag } from "lucide-react";

const Tienda = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container text-center">
          <ShoppingBag className="h-16 w-16 text-primary/30 mx-auto mb-6" />
          <h1 className="text-4xl font-heading font-bold mb-4 text-foreground">Tienda</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Próximamente podrás adquirir nuestras publicaciones, artesanías y productos culturales.
            ¡Mantente atento!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Tienda;
