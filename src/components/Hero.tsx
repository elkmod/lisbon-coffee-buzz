import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Coffee shop in Lisbon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6 text-accent mr-2" />
          <span className="text-accent font-medium">Lisbon, Portugal</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Discover the Best
          <span className="block text-accent">Coffee Spots</span>
          in Lisbon
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Find, rate, and share your favorite coffee experiences in Portugal's capital. 
          From traditional pastelarias to modern specialty roasters.
        </p>
        
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search coffee shops..." 
              className="pl-10 bg-white/95 border-white/20 text-foreground placeholder-muted-foreground"
            />
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            Search
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-accent rounded-full mr-2" />
            250+ Coffee Shops
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-accent rounded-full mr-2" />
            1,500+ Reviews
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-accent rounded-full mr-2" />
            Updated Daily
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;