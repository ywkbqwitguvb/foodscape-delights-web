import { Facebook, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">
              Foodxcape by Sharon
            </h3>
            <p className="text-primary-foreground/90 mb-4">
              Creating memorable culinary experiences in Abuja. Your trusted partner for catering, 
              events, and delicious treats.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Book Event
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:07060992150" 
                className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                07060992150
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/90">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>Awa Plaza, News Engineering<br />Abuja, Nigeria</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://facebook.com/shalomcakes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com/foodxcape_sharon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} Foodxcape by Sharon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
