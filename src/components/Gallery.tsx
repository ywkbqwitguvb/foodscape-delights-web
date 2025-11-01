import chinchinDisplay from "@/assets/sharon-chinchin-display.jpg";
import chinchinPackages from "@/assets/sharon-chinchin-packages.jpg";
import chinchinBag from "@/assets/sharon-chinchin-bag.jpg";
import cakeImg from "@/assets/sharon-cake.jpg";
import foodDish from "@/assets/sharon-food-dish.jpg";
import juicesImg from "@/assets/sharon-juices.jpg";
import wrappedFood from "@/assets/sharon-wrapped-food.jpg";

const images = [
  { src: chinchinDisplay, alt: "Sharon Treats Chinchin display" },
  { src: cakeImg, alt: "Elegant decorated cake" },
  { src: chinchinPackages, alt: "Packaged chinchin treats" },
  { src: foodDish, alt: "Delicious prepared dish" },
  { src: juicesImg, alt: "Sharon's fresh fruit juices" },
  { src: wrappedFood, alt: "Traditional wrapped delicacies" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-['Playfair_Display']">
            Our Creations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our delicious offerings and beautifully executed events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl aspect-square shadow-card hover:shadow-elegant transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
                width="418"
                height="418"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-primary-foreground text-lg font-semibold text-center">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
