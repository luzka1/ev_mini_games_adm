import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";
import { MessageCircleQuestion } from "lucide-react";

export function CarouselSpacing() {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="bg-blue-500 flex flex-col items-center justify-center p-6 h-80 rounded-xl text-white font-bold text-xl gap-4 hover:brightness-90 shadow-lg">
              <MessageCircleQuestion className="h-20 w-20" />
              Quiz
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
}
