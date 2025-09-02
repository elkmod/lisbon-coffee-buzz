import Hero from "@/components/Hero";
import CoffeeCard from "@/components/CoffeeCard";
import { mockCoffeeShops } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Coffee Shops Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Top Rated Coffee Shops
              </h2>
              <p className="text-muted-foreground">
                Discover the most loved coffee spots in Lisbon
              </p>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="border-border">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="border-border">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>
          
          {/* Coffee Shop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCoffeeShops.map((shop) => (
              <CoffeeCard 
                key={shop.id} 
                shop={shop}
              />
            ))}
          </div>
          
          {/* Load More */}
          <div className="flex justify-center mt-12">
            <Button size="lg" variant="outline" className="border-border">
              Load More Coffee Shops
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-coffee-dark text-white py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Coffee Lisboa</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Your guide to the best coffee experiences in Lisbon. 
            Find, rate, and share your favorite spots.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-white/60">
            <span>© 2024 Coffee Lisboa</span>
            <span>•</span>
            <span>Made with ☕ in Lisbon</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;