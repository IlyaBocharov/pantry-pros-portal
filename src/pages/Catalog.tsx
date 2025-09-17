import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ShoppingCart } from "lucide-react";

import fruitsImage from "@/assets/fruits-vegetables.jpg";
import berriesImage from "@/assets/berries.jpg";
import dairyImage from "@/assets/dairy.jpg";
import meatImage from "@/assets/meat.jpg";
import beveragesImage from "@/assets/beverages.jpg";
import packagedGoodsImage from "@/assets/packaged-goods.jpg";

const Catalog = () => {
  const products = [
    {
      title: "Фрукты и овощи",
      description: "Свежие сезонные фрукты и овощи прямо от производителей. Широкий ассортимент качественной продукции для розничных сетей и ресторанов.",
      image: fruitsImage,
      features: [
        "Прямые поставки от фермеров",
        "Сезонная продукция высшего качества",
        "Сертифицированная органическая продукция",
        "Быстрая доставка с соблюдением температурного режима"
      ]
    },
    {
      title: "Свежие ягоды",
      description: "Отборные ягоды: клубника, черника, малина, ежевика. Замороженные и свежие ягоды круглый год для ваших потребностей.",
      image: berriesImage,
      features: [
        "Свежие и замороженные ягоды",
        "Сбор в оптимальный период созревания",
        "Шоковая заморозка для сохранения витаминов",
        "Упаковка различных форматов"
      ]
    },
    {
      title: "Молочные продукты",
      description: "Полный ассортимент молочной продукции: молоко, сыры, творог, йогурты, сливочное масло от проверенных производителей.",
      image: dairyImage,
      features: [
        "Продукция от ведущих молокозаводов",
        "Строгое соблюдение холодовой цепи",
        "Различные жирности и форматы упаковки",
        "Органическая и фермерская продукция"
      ]
    },
    {
      title: "Мясные изделия",
      description: "Свежее мясо, птица, колбасные изделия. Только от проверенных поставщиков с соблюдением всех стандартов качества и безопасности.",
      image: meatImage,
      features: [
        "Мясо высшей категории качества",
        "Полный ветеринарный контроль",
        "Различные виды разделки",
        "Охлажденная и замороженная продукция"
      ]
    },
    {
      title: "Напитки",
      description: "Широкий выбор напитков: соки, минеральная вода, газированные напитки, энергетики от известных брендов для всех категорий потребителей.",
      image: beveragesImage,
      features: [
        "Натуральные соки и морсы",
        "Минеральная и питьевая вода",
        "Газированные и энергетические напитки",
        "Различные объемы упаковки"
      ]
    },
    {
      title: "Фасованные товары",
      description: "Бакалейная продукция, консервы, снеки, замороженные полуфабрикаты. Все необходимое для полного ассортимента вашего магазина.",
      image: packagedGoodsImage,
      features: [
        "Товары длительного хранения",
        "Известные и региональные бренды",
        "Различные ценовые категории",
        "Сезонные и праздничные товары"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ShoppingCart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Каталог
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {" "}продукции
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Полный ассортимент качественных продуктов питания для вашего бизнеса. 
              От свежих фруктов до готовых полуфабрикатов - все в одном месте.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                features={product.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Не нашли нужную категорию?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы работаем с широкой сетью поставщиков и можем организовать поставки 
              практически любых продуктов питания под ваши потребности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Связаться с менеджером
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Запросить каталог
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;