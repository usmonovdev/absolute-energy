import { ContainerLayout } from "@/layouts";
import "./styles.module.css";
import { services } from "@/data";
import { motion } from "framer-motion";

const index = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <ContainerLayout className={"py-14"}>
      <div className="text-center flex items-center flex-col">
        <h1 className="text-big font-bold leading-none mt-4">
          Основные направления
        </h1>
      </div>
      <motion.ul
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service) => {
          return (
            <motion.li
              key={service.id}
              variants={item}
              className="border p-3 rounded-[15px] bg-gray-100 transition-colors duration-300"
            >
              <service.icon className={"mb-4 w-[64px] h-[64px]"} />
              <div className="flex flex-col gap-2">
                <h1
                  className="text-small font-semibold text-dark"
                  title={service.title}
                >
                  {service.title}
                </h1>
                <h3 className="text-small text-[#9B9FA7] text-slicing" title={service.desc}>
                  {service.desc}
                </h3>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </ContainerLayout>
  );
};

export default index;
