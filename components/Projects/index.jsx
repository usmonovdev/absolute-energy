import Fancybox from "../Fancybox";
import Image from "next/image";
import { ContainerLayout } from "@/layouts";
import { useEffect } from "react";
import { Carousel } from "@fancyapps/ui";
import { projects } from "@/data";
import { motion } from "framer-motion";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const index = () => {
  const mapRange = (
    inputLower,
    inputUpper,
    outputLower,
    outputUpper,
    value
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;
    return (
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
    );
  };

  useEffect(() => {
    const carouselElement = document.getElementById("projectsCarousel");

    const customOptions = {
      Dots: false,
      Navigation: false,
      center: false,
      infinite: false,
      slidesPerPage: 1,
      on: {
        "Panzoom.beforeTransform": (carousel) => {
          carousel.slides.map((slide) => {
            let progress =
              (carousel.panzoom.current.e * -1 - slide.pos) / slide.dim;
            progress = progress > 0 ? 1 - Math.min(1, progress) : 1;
            const scale = mapRange(0, 1, 0.5, 1, progress);

            slide.el.style.setProperty("--f-scale", `${scale}`);
            slide.el.style.setProperty("--f-progress", `${progress}`);
          });
        },
      },
    };
    const myCarousel = new Carousel(carouselElement, customOptions);

    return () => {
      myCarousel.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
    >
      <ContainerLayout className={"py-14"}>
        <Fancybox>
          <div
            id="projectsCarousel"
            className="f-carousel flex md:flex-row-reverse flex-col-reverse gap-5 h-fit"
          >
            <div
              className="flex flex-col items-start justify-center"
              aria-label="title"
            >
              <h1 className="text-big font-bold leading-none">
                Наши успешные проекты
              </h1>
              <h3 className="text-small mt-3">
                Через эти фотографии вы можете ознакомиться с нашими успешными
                проектами.
              </h3>
              <div className="flex flex-row gap-5 mt-3">
                <button
                  data-carousel-prev
                  className="px-3 h-10 bg-gray-50 border hover:bg-gray-100 rounded-md leading-none"
                >
                  ←
                </button>
                <button
                  data-carousel-next
                  className="px-3 h-10 bg-gray-50 border hover:bg-gray-100 rounded-md leading-none"
                >
                  →
                </button>
              </div>
            </div>

            <ul className="f-carousel__track" aria-label="projects">
              {projects.map((project) => {
                return (
                  <li
                    key={project.id}
                    className="f-carousel__slide rounded-[15px] overflow-hidden relative"
                  >
                    <Image
                      src={project.photo}
                      width={300}
                      height={300}
                      alt={project.name}
                      className="w-full h-[300px] object-cover rounded-[15px] hover:scale-[1.05] transition-transform duration-300"
                    />
                    <div className="pointer-events-none absolute bottom-0 p-3 bg-gradient-to-t from-dark">
                      <h3 className="text-small text-white project-info">
                        {project.name}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Fancybox>
      </ContainerLayout>
    </motion.div>
  );
};

export default index;
