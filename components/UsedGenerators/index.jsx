import Image from "next/image";
import { generators } from "@/data";
import { ContainerLayout } from "@/layouts";
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
        <h1 className="text-big font-bold leading-none mt-4">Генераторы</h1>
        <h3 className="text-small mt-5">
          В ходе наших проектов мы используем генераторы <br /> <span className="text-main">высокого качества.</span>
        </h3>
      </div>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-8"
      >
        {generators.map((generator) => {
          return (
            <motion.li
              key={generator.id}
              variants={item}
              className="p-4 bg-gray-50 border overflow-hidden flex items-center justify-center rounded-[15px]"
            >
              <Image
                src={generator.photo}
                alt="generator"
                width={400}
                height={400}
                className="object-contain hover:scale-[1.05] transition-transform duration-300"
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </ContainerLayout>
  );
};

export default index;
