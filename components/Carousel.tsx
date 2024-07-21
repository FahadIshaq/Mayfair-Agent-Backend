"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Trustedlogo1 from '../public/Trustedlogo1.webp'
import Trustedlogo2 from '../public/Trustedlogo2.webp'
import Trustedlogo3 from '../public/Trustedlogo3.webp'
import Autoplay from "embla-carousel-autoplay"
export function CarouselSize() {
    const carouselImgs=[
        Trustedlogo1,Trustedlogo2,Trustedlogo3,Trustedlogo2,Trustedlogo1
    ]
  return (
    <Carousel
      opts={{
        align: "start",
        loop:true
      }}
      plugins={[
        
        Autoplay({
          delay: 2000,
        }),
      ]}
     
      className="w-full  max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className=" w-full bg-gray-300 aspect-auto ">
                    <Image src={carouselImgs[index]} alt="carousel img" className="w-full"></Image>
               
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-gray-800 text-white" />
      <CarouselNext />
    </Carousel>
  )
}
