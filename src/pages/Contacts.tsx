import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Building,
  Users,
  Headphones
} from "lucide-react";

const Contacts = () => {
  const contacts = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Телефоны",
      items: [
        "+7 (495) 123-45-67 - Общий отдел",
        "+7 (495) 123-45-68 - Отдел продаж", 
        "+7 (495) 123-45-69 - Логистика"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      items: [
        "info@freshdistro.ru - Общие вопросы",
        "sales@freshdistro.ru - Отдел продаж",
        "logistics@freshdistro.ru - Логистика"
      ]
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Адрес офиса",
      items: [
        "109316, г. Москва,", 
        "ул. Складская, д. 15, стр. 2",
        "БЦ 'Фуд Центр', этаж 3"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Время работы", 
      items: [
        "Пн-Пт: 08:00 - 18:00",
        "Сб: 09:00 - 15:00", 
        "Вс: выходной"
      ]
    }
  ];

  const departments = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Отдел продаж",
      description: "Консультации по ассортименту, оформление заказов, коммерческие предложения",
      contacts: ["Иван Петров - менеджер", "Елена Сидорова - руководитель отдела"],
      phone: "+7 (495) 123-45-68"
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Логистический отдел",
      description: "Планирование доставок, отслеживание грузов, решение вопросов по поставкам",
      contacts: ["Алексей Козлов - логист", "Мария Волкова - диспетчер"],
      phone: "+7 (495) 123-45-69"
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Техподдержка",
      description: "Помощь в работе с системой заказов, решение технических вопросов",
      contacts: ["Дмитрий Орлов - системный администратор"],
      phone: "+7 (495) 123-45-70"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Свяжитесь
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {" "}с нами
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Готовы ответить на все ваши вопросы и предложить лучшие условия сотрудничества. 
              Выберите удобный способ связи или оставьте заявку.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <Card key={index} className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{contact.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{contact.title}</h3>
                  <div className="space-y-2">
                    {contact.items.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-sm text-muted-foreground">{item}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Наши отделы
            </h2>
            <p className="text-lg text-muted-foreground">
              Обращайтесь напрямую к специалистам нужного направления
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="border-border bg-background shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    {dept.icon}
                    <h3 className="text-xl font-semibold text-foreground mt-3">{dept.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-center">{dept.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Сотрудники:</h4>
                      {dept.contacts.map((contact, contactIndex) => (
                        <p key={contactIndex} className="text-sm text-muted-foreground">{contact}</p>
                      ))}
                    </div>
                    
                    <div className="pt-3 border-t border-secondary-dark">
                      <p className="text-sm font-medium text-foreground">Телефон: {dept.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Оставьте заявку
            </h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму и мы свяжемся с вами в течение рабочего дня
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Как нас найти
            </h2>
            <p className="text-lg text-muted-foreground">
              Наш офис и склад расположены в удобной транспортной доступности
            </p>
          </div>
          
          <div className="bg-background rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Интерактивная карта</h3>
                <p className="text-muted-foreground">
                  г. Москва, ул. Складская, д. 15, стр. 2
                </p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">На автомобиле</h4>
                <p className="text-sm text-muted-foreground">
                  15 минут от МКАД, бесплатная парковка для клиентов
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">На метро</h4>
                <p className="text-sm text-muted-foreground">
                  Станция "Текстильщики", далее 10 минут на автобусе
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Рядом</h4>
                <p className="text-sm text-muted-foreground">
                  Продуктовый рынок "Садовод", ТЦ "Москворечье"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;