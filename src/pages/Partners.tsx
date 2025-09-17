import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Clock, 
  Shield, 
  Handshake, 
  TrendingUp, 
  Award,
  MapPin,
  Calendar,
  DollarSign
} from "lucide-react";

const Partners = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Гарантия качества",
      description: "Строгий контроль качества на всех этапах поставок. Сертификация и соответствие ГОСТ стандартам."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Надежная логистика",
      description: "Собственный автопарк и партнерские логистические центры для быстрой доставки по всей России."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Оперативность",
      description: "Быстрая обработка заказов, гибкий график поставок, оперативное решение любых вопросов."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Выгодные условия",
      description: "Конкурентные цены, гибкая система скидок, индивидуальные условия для крупных партнеров."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Рост бизнеса",
      description: "Маркетинговая поддержка, аналитика продаж, консультации по ассортиментной политике."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "15 лет опыта",
      description: "Богатый опыт работы на рынке, надежная репутация, проверенные бизнес-процессы."
    }
  ];

  const conditions = [
    {
      title: "Минимальная партия",
      description: "От 50 000 рублей для оптовых поставок",
      icon: <Handshake className="w-6 h-6 text-primary" />
    },
    {
      title: "География доставки", 
      description: "Москва, МО и регионы РФ",
      icon: <MapPin className="w-6 h-6 text-primary" />
    },
    {
      title: "Условия оплаты",
      description: "Наличный и безналичный расчет, отсрочка до 30 дней",
      icon: <DollarSign className="w-6 h-6 text-primary" />
    },
    {
      title: "Время доставки",
      description: "1-3 дня по Москве, 3-7 дней по регионам",
      icon: <Calendar className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Условия для
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {" "}партнеров
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы создаем долгосрочные партнерские отношения, основанные на взаимной выгоде, 
              надежности и профессионализме. Станьте частью нашей успешной команды!
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-muted-foreground">
              Преимущества работы с FreshDistro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Conditions */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Условия сотрудничества
            </h2>
            <p className="text-lg text-muted-foreground">
              Прозрачные и выгодные условия для всех партнеров
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="border-border bg-background shadow-sm">
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto mb-2">{condition.icon}</div>
                  <CardTitle className="text-lg text-foreground">{condition.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-sm text-muted-foreground">{condition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Логистика и доставка
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Truck className="w-6 h-6 text-primary mr-3" />
                      Собственный автопарк
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Рефрижераторы для молочных продуктов и мяса</li>
                      <li>• Специализированный транспорт для овощей и фруктов</li>
                      <li>• GPS-мониторинг всех поставок</li>
                      <li>• Страхование грузов</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Clock className="w-6 h-6 text-primary mr-3" />
                      Гибкий график
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Доставка 7 дней в неделю</li>
                      <li>• Утренние и вечерние окна доставки</li>
                      <li>• Экстренные поставки в течение 4 часов</li>
                      <li>• Планирование поставок на месяц вперед</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Начните сотрудничество уже сегодня!
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Свяжитесь с нашими менеджерами для обсуждения условий сотрудничества 
                  и получения индивидуального коммерческого предложения.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground shadow-md"
                  >
                    Стать партнером
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Скачать презентацию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;