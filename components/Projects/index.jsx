import Fancybox from "../Fancybox";
import { ContainerLayout } from "@/layouts";
import { useEffect } from "react";
import { Carousel } from "@fancyapps/ui";
import { projects } from "@/data";
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
            const scale = mapRange(0, 1, 0.8, 1, progress);

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
    <ContainerLayout classNameName="py-10">
      <Fancybox>
        <div
          id="projectsCarousel"
          className="mb-9 f-carousel grid md:grid-cols-[360px_1fr] grid-cols-[0px_1fr] text-slate-700"
        >
          <div className="py-14 pr-10 z-10">
            <h2 className="mb-6 font-bold text-big leading-none">
              Наши успешные проекты
            </h2>
            <p className="mb-6 text-small">
              Через эти фотографии вы можете ознакомиться с нашими успешными
              проектами.
            </p>
            <p className="font-serif text-3xl flex flex-row gap-4">
              <button
                data-carousel-prev
                className="px-3 h-10 bg-gray-100 hover:bg-gray-200 rounded-md leading-none"
              >
                ←
              </button>
              <button
                data-carousel-next
                className="px-3 h-10 bg-gray-100 hover:bg-gray-200 rounded-md leading-none"
              >
                →
              </button>
            </p>
          </div>
          <div className="min-w-0 ml-[-360px]">
            <div className="f-carousel__viewport pl-[360px]">
              <ul className="f-carousel__track items-baseline">
                {projects.map((project) => {
                  return (
                    <li
                      key={project.id}
                      className="f-carousel__slide !h-full bg-cover bg-center rounded-[15px]"
                      style={{ backgroundImage: `url(${project.photo})` }}
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Fancybox>
    </ContainerLayout>
  );
};

export default index;
