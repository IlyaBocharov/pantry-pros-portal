import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-border">
      <CardHeader className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <CardTitle className="text-2xl font-bold text-center">
          Связаться с нами
        </CardTitle>
        <p className="text-center text-primary-foreground/90 mt-2">
          Заполните форму и мы свяжемся с вами в течение рабочего дня
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                Имя *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Ваше имя"
                className="border-input focus:border-primary focus:ring-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                Телефон *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+7 (___) ___-__-__"
                className="border-input focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.ru"
              className="border-input focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-foreground">
              Компания
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Название вашей компании"
              className="border-input focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Сообщение *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Расскажите о ваших потребностях в продукции..."
              rows={4}
              className="border-input focus:border-primary focus:ring-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 group"
            size="lg"
          >
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Отправить сообщение
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            * Обязательные поля для заполнения
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;