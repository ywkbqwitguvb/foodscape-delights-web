import { Card } from "@/components/ui/card";
import { Utensils, CalendarCheck, Cookie, Cake, Coffee, Sparkles } from "lucide-react";
import snacksImg from "@/assets/snacks.jpg";
import cakesImg from "@/assets/cakes.jpg";
import juicesImg from "@/assets/juices.jpg";
import eventImg from "@/assets/event-planning.jpg";
import chinchinImg from "@/assets/chinchin.jpg";
import heroFood from "@/assets/hero-food.jpg";

const services = [
  {
    title: "Catering Services",
    description: "Exquisite catering for all occasions with authentic Nigerian and international cuisines",
    icon: Utensils,
    image: heroFood,
  },
  {
    title: "Event Planning",
    description: "Professional event planning and coordination for weddings, parties, and corporate events",
    icon: CalendarCheck,
    image: eventImg,
  },
  {
    title: "Local Snacks & Small Chops",
    description: "Delicious small chops, spring rolls, samosas, puff puff, and more for your events",
    icon: Cookie,
    image: snacksImg,
  },
  {
    title: "Shalom Treats & Cakes",
    description: "Custom celebration cakes and pastries designed to make your special moments sweeter",
    icon: Cake,
    image: cakesImg,
  },
  {
    title: "Natural Fruit Juices",
    description: "Fresh, natural fruit juices made from the finest fruits with no artificial additives",
    icon: Coffee,
    image: juicesImg,
  },
  {
    title: "Abuja Chinchin",
    description: "Traditional crispy Chinchin snacks, perfect for parties and personal enjoyment",
    icon: Sparkles,
    image: chinchinImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-['Playfair_Display']">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring culinary excellence to every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-glow">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
