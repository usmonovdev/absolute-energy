import Image from "next/image";
import { Carousel } from "@fancyapps/ui";
import { useEffect } from "react";
import { clients } from "@/data";
import { Fancybox } from "..";
import { ContainerLayout } from "@/layouts";
import { motion } from "framer-motion";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@fancyapps/ui/dist/carousel/carousel.css";

const index = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("myCarousel");

    const customOptions = {
      Dots: true,
      Navigation: true
    };
    const myCarousel = new Carousel(carouselElement, customOptions);

    return () => {
      myCarousel.destroy();
    };
  }, []);

  return (
    <ContainerLayout className="py-10">
      <div className="text-left flex items-start flex-col gap-2">
        <h1 className="text-big font-bold leading-none">
          Отзывы наших <span className="text-gradient">довольных клиентов</span>
        </h1>
        <h3 className="text-small">
          Several selected clients, who already believe in our service.
        </h3>
      </div>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <motion.ul
          className={`f-carousel mt-6`} id={"myCarousel"}
          initial={{ y: 50, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}  
        >
          {clients.map((data, i) => {
            return (
              <li
                key={data.id}
                className="f-carousel__slide py-5 px-3 flex flex-row rounded-2xl overflow-hidden relative"
              >
                <div className="w-fit h-fit absolute bottom-0 left-0 p-3">
                  <div className="p-4 bg-white/20 backdrop-blur rounded-lg text-white">
                    <h3 className="text-small font-medium text-slicing" title={data.comment}>{data.comment}</h3>
                    <p className="text-small mt-2">- {data.name}</p>
                  </div>
                </div>
                <div className="w-full h-full">
                  <Image
                    src={data.photo}
                    width={300}
                    height={300}
                    alt={data.name}
                    className="w-full h-full"
                  />
                </div>
              </li>
            );
          })}
        </motion.ul>
      </Fancybox>
    </ContainerLayout>
  );
};

export default index;
