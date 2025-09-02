import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

interface CoffeeShop {
  id: string;
  name: string;
  address: string;
  rating: number;
  reviewCount: number;
  image: string;
  priceRange: string;
  openNow: boolean;
  specialty: string[];
}

interface CoffeeCardProps {
  shop: CoffeeShop;
  onClick?: () => void;
  className?: string;
}

const CoffeeCard = ({ shop, onClick, className }: CoffeeCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/cafe/${shop.id}`);
    }
  };

  return (
    <Card 
      className={cn(
        "group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-warm hover:-translate-y-1 bg-card border-border",
        className
      )}
      onClick={handleClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={shop.image} 
          alt={shop.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {shop.name}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{shop.address}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <StarRating rating={shop.rating} size="sm" />
          <span className="text-sm text-muted-foreground">
            ({shop.reviewCount})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className="text-xs bg-secondary text-secondary-foreground"
            >
              {shop.priceRange}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              <span className={shop.openNow ? "text-green-600" : "text-red-500"}>
                {shop.openNow ? "Open" : "Closed"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {shop.specialty.slice(0, 2).map((item) => (
            <Badge 
              key={item} 
              variant="outline" 
              className="text-xs border-accent text-accent-foreground bg-accent/10"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CoffeeCard;
export type { CoffeeShop };