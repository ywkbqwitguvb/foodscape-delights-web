import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";
import flyerLogo from "@/assets/foodxcape-flyer.jfif";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroFood})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-background p-2 shadow-glow">
              <img 
                src={flyerLogo} 
                alt="Foodxcape by Sharon" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground font-['Playfair_Display']">
            Foodxcape by Sharon
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/95 font-medium">
            Creating Memorable Culinary Experiences
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Premium catering services, exquisite cakes, local delicacies, and professional event planning in Abuja
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant text-lg px-8 py-6 rounded-full font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: 07060992150
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/20 backdrop-blur-sm text-lg px-8 py-6 rounded-full font-semibold"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
