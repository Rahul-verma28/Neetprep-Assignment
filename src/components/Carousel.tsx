import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductsCarouselProps {
  product: string[]; // Array of image URLs
  setCurrentImageIndex: (index: number) => void; // Function to set the current image index
}

export function ProductsCarousel({
  product,
  setCurrentImageIndex,
}: ProductsCarouselProps) {
  return (
    <Carousel className="w-[60%] mt-4 ml-10 relative">
      <CarouselContent className="-ml-1 gap-2">
        {product.map((image: string, index: number) => (
          <CarouselItem key={image} className="pl-1 basis-1/2 sm:basis-1/3">
            <img
              onClick={() => setCurrentImageIndex(index)}
              src={image}
              alt="Product image"
              className="w-full h-20 object-cover rounded-md cursor-pointer"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
