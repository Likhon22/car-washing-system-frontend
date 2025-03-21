import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import banner1 from "@/assets/photo-1607860108855-64acf2078ed9.jpg";
import banner2 from "@/assets/istockphoto-174942860-612x612.jpg";

type TBannerInfo = {
  image: string;
  title: string;
  description: string;
};
const bannerInfo: TBannerInfo[] = [
  {
    image: banner1,
    title: "Welcome to our car washing shop",
    description:
      "We are here to provide you with the best car washing experience.",
  },
  {
    image: banner2,
    title: "Quality Service at Affordable Prices",
    description:
      "We offer high-quality car washing services at affordable prices.",
  },
];
const Banner = () => {
  return (
    <div className="relative">
      <Carousel className="w-full p-0 relative">
        <CarouselContent>
          {bannerInfo.map((banner, index) => (
            <CarouselItem className="w-full h-screen p-0" key={index}>
              <div className=" w-full">
                <Card className="p-0 border-none">
                  <CardContent className=" relative w-full items-center justify-center h-screen p-0 ">
                    <img
                      className="w-full h-screen object-cover "
                      src={banner.image}
                      alt=""
                    />
                    <div className="absolute top-1/2 left-1/2   transform -translate-y-1/2 -translate-x-1/2  text-center    ">
                      <h1 className="text-4xl font-bold text-white">
                        {banner.title}
                      </h1>
                      <p className="text-white">{banner.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute z-20 top-1/2 left-4 " />
        <CarouselNext className="absolute z-20 top-1/2 right-4" />
      </Carousel>
    </div>
  );
};

export default Banner;
