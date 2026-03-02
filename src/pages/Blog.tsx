import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const posts = [
  {
    title: "Despertar Poético sin Fronteras",
    excerpt: "Antología poética que reúne las voces de poetas de diferentes países, conectados por el amor al arte y la palabra.",
    date: "2020",
  },
  {
    title: "Cuando a todos nos cambió la Vida",
    excerpt: "Compilación de relatos y crónicas que narran las experiencias vividas durante la pandemia.",
    date: "2021",
  },
  {
    title: "Tertulia Hilando Recuerdos",
    excerpt: "Crónicas y memorias rescatadas a través de encuentros con adultos mayores de la comunidad.",
    date: "2022",
  },
  {
    title: "Villa del Rosario Viva en el Bicentenario",
    excerpt: "Celebración del patrimonio histórico y cultural de Villa del Rosario.",
    date: "2019",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container">
          <h1 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">Blog</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {posts.map((post) => (
              <Card key={post.title} className="hover:shadow-lg transition-shadow">
                <div className="h-40 bg-secondary/5 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary/20" />
                </div>
                <CardHeader>
                  <CardDescription>{post.date}</CardDescription>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <Button variant="link" className="px-0 mt-2">Leer más →</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
