import { CoffeeShop } from "@/components/CoffeeCard";
import cafe1 from "@/assets/cafe-1.jpg";
import cafe2 from "@/assets/cafe-2.jpg";
import cafe3 from "@/assets/cafe-3.jpg";

export const mockCoffeeShops: CoffeeShop[] = [
  {
    id: "1",
    name: "Café Central",
    address: "Rua Augusta 125, Chiado",
    rating: 4.8,
    reviewCount: 324,
    image: cafe1,
    priceRange: "€€",
    openNow: true,
    specialty: ["Espresso", "Pastéis"]
  },
  {
    id: "2", 
    name: "The Coffee House",
    address: "Travessa do Carmo 8, Chiado",
    rating: 4.6,
    reviewCount: 198,
    image: cafe2,
    priceRange: "€€€",
    openNow: true,
    specialty: ["Specialty Coffee", "Artisan Roasts"]
  },
  {
    id: "3",
    name: "Padaria Nacional",
    address: "Rua da Betesga 10, Rossio",
    rating: 4.4,
    reviewCount: 412,
    image: cafe3,
    priceRange: "€",
    openNow: false,
    specialty: ["Traditional", "Galão"]
  },
  {
    id: "4",
    name: "Dear Breakfast",
    address: "Rua Nova do Carvalho 20, Cais do Sodré",
    rating: 4.7,
    reviewCount: 267,
    image: cafe1,
    priceRange: "€€",
    openNow: true,
    specialty: ["Brunch", "Flat White"]
  },
  {
    id: "5",
    name: "Comoba",
    address: "Avenida da Liberdade 244, Avenidas Novas",
    rating: 4.5,
    reviewCount: 156,
    image: cafe2,
    priceRange: "€€€",
    openNow: true,
    specialty: ["Third Wave", "Single Origin"]
  },
  {
    id: "6",
    name: "Mesa de Loja",
    address: "Rua da Escola Politécnica 27, Príncipe Real",
    rating: 4.3,
    reviewCount: 89,
    image: cafe3,
    priceRange: "€€",
    openNow: true,
    specialty: ["Cortado", "Local Roasters"]
  }
];