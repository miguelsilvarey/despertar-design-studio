import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensaje enviado", description: "Gracias por contactarnos." });
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">Contacto</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" rows={5} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} required />
              </div>
              <Button type="submit" size="lg" className="w-full">Enviar Mensaje</Button>
            </form>
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-xl text-foreground">Información de Contacto</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" /><p>Cra. 3b #4-110, Villa Del Rosario, Norte de Santander, Colombia</p></div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary shrink-0" /><p>+57 313 815 9878</p></div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary shrink-0" /><p>despertararteycultura@gmail.com</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
