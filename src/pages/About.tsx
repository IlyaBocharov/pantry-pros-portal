import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Users, Target, Heart, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Качество",
      description: "Строгий контроль качества на всех этапах поставок"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Надежность",
      description: "15+ лет успешной работы на рынке дистрибуции"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Партнерство",
      description: "Долгосрочные отношения с поставщиками и клиентами"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Эффективность",
      description: "Оптимизированные логистические процессы доставки"
    }
  ];

  const stats = [
    { number: "500+", label: "Постоянных партнеров" },
    { number: "15+", label: "Лет на рынке" },
    { number: "50+", label: "Городов доставки" },
    { number: "24/7", label: "Техподдержка" }
  ];

  const partners = [
    "Партнер 1", "Партнер 2", "Партнер 3", "Партнер 4", 
    "Партнер 5", "Партнер 6", "Партнер 7", "Партнер 8"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              О компании
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {" "}FreshDistro
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы являемся ведущим дистрибьютором качественных продуктов питания, 
              обеспечивая надежные поставки для розничных сетей, ресторанов и оптовых партнеров по всей России.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-foreground">Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Обеспечивать наших партнеров высококачественными продуктами питания, 
                  способствуя развитию здорового питания и созданию устойчивых 
                  бизнес-отношений в пищевой индустрии.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-foreground">Наше видение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Стать ведущей дистрибьюторской компанией в сфере продуктов питания, 
                  известной инновационным подходом, надежностью поставок и 
                  превосходным качеством обслуживания.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наши ценности</h2>
            <p className="text-lg text-muted-foreground">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наши достижения</h2>
            <p className="text-lg text-muted-foreground">
              Цифры, которые говорят о нашем успехе
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наши партнеры</h2>
            <p className="text-lg text-muted-foreground">
              Мы гордимся сотрудничеством с ведущими компаниями отрасли
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="aspect-square bg-background border border-border rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <span className="text-sm text-muted-foreground font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Наш опыт</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center leading-relaxed mb-6">
                За 15 лет работы на рынке дистрибуции продуктов питания мы накопили 
                богатый опыт и создали надежную сеть поставщиков и партнеров. 
                Наша команда профессионалов обеспечивает бесперебойные поставки 
                качественной продукции.
              </p>
              <p className="text-center leading-relaxed">
                Мы постоянно развиваемся, внедряя современные технологии логистики 
                и контроля качества, чтобы предоставлять нашим клиентам только 
                лучшие продукты и сервис высочайшего уровня.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;