import { Award, Heart, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "1000+", label: "Events Catered" },
  { icon: Heart, value: "100%", label: "Satisfaction" },
  { icon: TrendingUp, value: "5+", label: "Years Experience" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-['Playfair_Display']">
              About Foodscape
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Welcome to <span className="text-primary font-semibold">Foodscape by Sharon</span>, 
                where culinary artistry meets exceptional service. Based in Abuja, we are your trusted 
                partner for creating unforgettable dining experiences.
              </p>
              <p>
                From intimate family gatherings to grand corporate events, we pride ourselves on 
                delivering mouthwatering dishes, beautiful presentation, and impeccable service. 
                Our specialty includes authentic Nigerian cuisines, custom cakes, local snacks, 
                and refreshing natural fruit juices.
              </p>
              <p>
                At Foodscape, we believe that great food brings people together. Let us make your 
                next event truly memorable with our passion for excellence and attention to detail.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gradient-primary shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
