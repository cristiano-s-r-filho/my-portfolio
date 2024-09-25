import Image from "next/image"
import { Button } from "./../components/ui/button"

interface MainBannerProps {
  imageUrl?: string
  heading?: string
  description?: string
  buttonText?: string
  buttonUrl?: string
  buttonColor?: string
}

export default function MainBanner({
  imageUrl = "/placeholder.svg?height=500&width=1920",
  heading = "Welcome to Our Website",
  description = "Discover amazing features and services tailored just for you.",
  buttonText = "Learn More",
  buttonUrl = "#",
  buttonColor = "bg-primary"
}: MainBannerProps) {
  return (
    <div className="relative w-full h-[500px]">
      <Image
        src={imageUrl}
        alt="Banner background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex items-center">
        <div className="text-white p-6 max-w-xl ml-[5%] md:ml-[10%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">{heading}</h1>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-5">{description}</p>
          <Button
            className={`${buttonColor} text-white hover:${buttonColor}/90`}
            size="default"
            asChild
          >
            <a href={buttonUrl}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </div>
  )
}