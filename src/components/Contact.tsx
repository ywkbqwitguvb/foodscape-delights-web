import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-['Playfair_Display']">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to make your event unforgettable? Contact us today!
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-primary shadow-elegant animate-scale-in">
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">Call Us</h3>
                  <a 
                    href="tel:07060992150" 
                    className="text-2xl font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                  >
                    07060992150
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">Location</h3>
                  <p className="text-lg text-primary-foreground/90">
                    Awa Plaza, News Engineering<br />
                    Abuja, Nigeria
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-primary-foreground mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm"
                    asChild
                  >
                    <a href="https://facebook.com/shalomcakes" target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-5 w-5" />
                      SHALOM CAKES
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm"
                    asChild
                  >
                    <a href="https://instagram.com/foodscape_sharon" target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-5 w-5" />
                      @FOODSCAPE_SHARON
                    </a>
                  </Button>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-primary-foreground/20">
                <p className="text-lg text-primary-foreground/90 mb-4">
                  Whether it's a wedding, birthday, corporate event, or intimate gathering, 
                  we're here to serve you with excellence.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow text-lg px-8 py-6 rounded-full font-semibold w-full sm:w-auto"
                  asChild
                >
                  <a href="tel:07060992150">
                    <Phone className="mr-2 h-5 w-5" />
                    Book Your Event Now
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
