import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showRating?: boolean;
  className?: string;
}

const StarRating = ({ 
  rating, 
  maxRating = 5, 
  size = "md", 
  showRating = true,
  className 
}: StarRatingProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5", 
    lg: "h-6 w-6"
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {Array.from({ length: maxRating }).map((_, index) => {
          const starRating = index + 1;
          const isFilled = starRating <= rating;
          const isPartial = starRating > rating && starRating - 1 < rating;
          
          return (
            <Star
              key={index}
              className={cn(
                sizeClasses[size],
                "transition-colors duration-200",
                isFilled 
                  ? "fill-warm-gold text-warm-gold" 
                  : isPartial 
                  ? "fill-warm-gold/50 text-warm-gold" 
                  : "fill-muted text-muted-foreground"
              )}
            />
          );
        })}
      </div>
      {showRating && (
        <span className="text-sm font-medium text-muted-foreground ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;