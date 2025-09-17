import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">П</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">ПроВкус</h3>
                <p className="text-xs text-muted-foreground">Дистрибуция продуктов</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Ведущий поставщик качественных продуктов питания для розничных сетей, 
              ресторанов и оптовых партнеров в России.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Навигация</h4>
            <ul className="space-y-2">
              {[
                { label: "О компании", href: "/about" },
                { label: "Каталог продукции", href: "/catalog" },
                { label: "Партнерам", href: "/partners" },
                { label: "Контакты", href: "/contacts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+7 (950) 098-48-58</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@provkus.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Пн-Пт: 8:00-18:00</span>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Продукция</h4>
            <ul className="space-y-2">
              {[
                "Фрукты и овощи",
                "Ягоды",
                "Молочные продукты", 
                "Мясные изделия",
                "Напитки",
                "Фасованные товары"
              ].map((product) => (
                <li key={product}>
                  <span className="text-sm text-muted-foreground">{product}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-dark mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ПроВкус. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;