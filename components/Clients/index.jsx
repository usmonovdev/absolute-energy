import Image from "next/image";
import { Carousel } from "@fancyapps/ui";
import { useEffect } from "react";
import { clients } from "@/data";
import { Fancybox } from "..";
import { ContainerLayout } from "@/layouts";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@fancyapps/ui/dist/carousel/carousel.css";

const index = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("myCarousel");

    const customOptions = {
      Dots: true,
      Navigation: true,
      AdaptiveHeight: true
    };
    const myCarousel = new Carousel(carouselElement, customOptions);

    return () => {
      myCarousel.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-50">
      <ContainerLayout className="py-14">
        <div className="text-center flex items-center flex-col gap-2">
          <h1 className="text-big font-bold leading-none">
            Отзывы наших{" "}
            <span className="text-gradient">довольных клиентов</span>
          </h1>
        </div>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <ul
            className={`f-carousel mt-10`}
            id={"myCarousel"}
          >
            {clients.map((data, i) => {
              return (
                <li
                  key={data.id}
                  className="f-carousel__slide py-5 px-3 flex flex-col items-center gap-4 rounded-2xl"
                >
                  <div className="p-2 w-[146px] h-[45px] bg-white rounded-lg shadow-small flex items-center justify-center">
                    <Image
                      src={data.companyLogo}
                      width={300}
                      height={300}
                      alt={data.name}
                      className="object-contain w-[130px] transition-all duration-300"
                    />
                  </div>
                  <div className="max-w-[800px] mx-auto w-full">
                    <h1 className="text-center text-small font-medium">
                      {data.comment}
                    </h1>
                  </div>
                  <div className="w-[70px] h-[70px] rounded-full">
                    <Image
                      src={data.photo}
                      width={300}
                      height={300}
                      alt={data.name}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <h3 className="text-small">{data.name}</h3>
                </li>
              );
            })}
          </ul>
        </Fancybox>
      </ContainerLayout>
    </div>
  );
};

export default index;
