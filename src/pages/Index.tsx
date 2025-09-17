import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Truck, 
  Clock, 
  Award,
  Users,
  Star
} from "lucide-react";

import fruitsImage from "@/assets/fruits-vegetables.jpg";
import berriesImage from "@/assets/berries.jpg";
import dairyImage from "@/assets/dairy.jpg";
import meatImage from "@/assets/meat.jpg";
import beveragesImage from "@/assets/beverages.jpg";
import packagedGoodsImage from "@/assets/packaged-goods.jpg";

const Index = () => {
  const featuredProducts = [
    {
      title: "Фрукты и овощи",
      description: "Свежие сезонные фрукты и овощи прямо от производителей",
      image: fruitsImage,
      features: ["Прямые поставки", "Высшее качество", "Быстрая доставка"]
    },
    {
      title: "Молочные продукты",
      description: "Полный ассортимент молочной продукции от ведущих производителей",
      image: dairyImage,
      features: ["Холодовая цепь", "Различные форматы", "Органическая продукция"]
    },
    {
      title: "Мясные изделия", 
      description: "Свежее мясо и птица с полным ветеринарным контролем",
      image: meatImage,
      features: ["Высшая категория", "Ветконтроль", "Охлажденная продукция"]
    }
  ];

  const advantages = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Контроль качества",
      description: "Многоступенчатый контроль качества продукции на всех этапах поставок"
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Надежная логистика",
      description: "Собственный автопарк и оптимизированные маршруты доставки"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Быстрые поставки",
      description: "Доставка по всей России"
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "15 лет опыта",
      description: "Богатый опыт работы и репутация надежного партнера"
    }
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      position: "Директор сети магазинов 'Продукты+'",
      text: "Сотрудничаем уже 5 лет. Качество продукции всегда на высоте, доставка точно в срок.",
      rating: 5
    },
    {
      name: "Марина Сидорова", 
      position: "Шеф-повар ресторана 'Гурман'",
      text: "Отличный поставщик! Свежие продукты, широкий ассортимент, индивидуальный подход.",
      rating: 5
    },
    {
      name: "Игорь Козлов",
      position: "Закупщик ТС 'Вкусмарт'", 
      text: "Надежные партнеры с конкурентными ценами и качественным сервисом.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Advantages Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Наши преимущества
            </h2>
            <p className="text-lg text-muted-foreground">
              Почему более 500 компаний выбирают FreshDistro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-border bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{advantage.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Популярные категории
            </h2>
            <p className="text-lg text-muted-foreground">
              Самые востребованные категории продукции
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                features={product.features}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground shadow-md group"
            >
              Посмотреть весь каталог
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Отзывы партнеров
            </h2>
            <p className="text-lg text-muted-foreground">
              Что говорят о нас наши клиенты
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-background shadow-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl p-12">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Получите индивидуальное коммерческое предложение и начните работу 
              с надежным поставщиком качественных продуктов уже сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Связаться с нами
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Скачать прайс-лист
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
