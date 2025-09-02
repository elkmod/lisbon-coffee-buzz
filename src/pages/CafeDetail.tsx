import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Phone, Globe, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "@/components/StarRating";
import { mockCoffeeShops } from "@/data/mockData";

const CafeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const cafe = mockCoffeeShops.find(shop => shop.id === id);
  
  if (!cafe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Cafe not found</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to cafes
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={cafe.image} 
          alt={cafe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl font-bold text-white mb-2">{cafe.name}</h1>
          <div className="flex items-center text-white/90">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{cafe.address}</span>
          </div>
        </div>
        <Button 
          size="icon" 
          variant="secondary" 
          className="absolute top-6 right-6"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Rating and Status */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <StarRating rating={cafe.rating} size="lg" />
                    <span className="text-sm text-muted-foreground">
                      ({cafe.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className={cafe.openNow ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
                      {cafe.openNow ? "Open now" : "Closed"}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-sm">
                    {cafe.priceRange}
                  </Badge>
                  {cafe.specialty.map((item) => (
                    <Badge 
                      key={item} 
                      variant="outline"
                      className="border-accent text-accent-foreground bg-accent/10"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">About {cafe.name}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {cafe.name} is a beloved coffee destination in Lisbon, known for its {cafe.specialty.join(' and ').toLowerCase()}. 
                  Whether you're looking for a quick espresso or a relaxing spot to work, this cafe offers a perfect blend of 
                  Portuguese coffee culture and modern cafe experience.
                </p>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
                <div className="space-y-4">
                  {[
                    { name: "Maria S.", rating: 5, comment: "Amazing coffee and pastries! The atmosphere is perfect for working." },
                    { name: "João P.", rating: 4, comment: "Great espresso, friendly staff. A bit crowded during lunch time." },
                    { name: "Ana L.", rating: 5, comment: "Best galão in the neighborhood. Highly recommend!" }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'fill-warm-gold text-warm-gold' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Contact & Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{cafe.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">+351 21 xxx xxxx</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">website.com</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Opening Hours</h4>
                  <div className="text-sm space-y-1 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>7:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>9:00 - 18:00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Button className="w-full">
                    Get Directions
                  </Button>
                  <Button variant="outline" className="w-full">
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeDetail;