import Image from "next/image";
import { Statistics } from "..";
import { ContainerLayout } from "@/layouts";
import { motion } from "framer-motion";
import "./styles.module.css";

const index = () => {
  return (
    <>
      <div className="bg-dark text-white w-full top-0 z-[-1] relative">
        <div className="h-[700px] flex flex-col justify-center">
          <div className="bg-cube w-full h-full absolute z-[-1]"></div>
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[80%] flex flex-col items-center justify-center gap-2 text-center"
          >
            <h3 className="text-small uppercase text-gradient font-bold mb-1">
              Services
            </h3>
            <h1 className="text-big leading-none font-trap_black uppercase">
              Absolute Energy
            </h1>
            <h3 className="text-small uppercase">
              СЕРВИС МЕЖДУНАРОДНОГО КЛАССА
            </h3>
          </motion.div>
          <Statistics />
        </div>
        <div className="absolute bottom-0 w-full z-[800] flex flex-row sm:justify-between justify-center">
          <div className="absolute bottom-0 pointer-events-none bg-gradient-to-t from-gray-900 w-full h-[300px] z-[1100]"></div>
          <ContainerLayout
            className={"flex flex-row sm:justify-between justify-center w-full"}
          >
            <Image
              src={"/images/generator.png"}
              alt="generator"
              width={500}
              height={500}
              className="z-[1000] min-[1200px]:w-[350px] min-[992px]:w-[300px] w-[250px] sm:mb-4 mb-20 md:ml-10 ml-5 grayscale hover:scale-125"
            />
            <Image
              src={"/images/alimator.png"}
              alt="alimator"
              width={500}
              height={500}
              className="z-[1000] min-[1200px]:w-[350px] min-[992px]:w-[300px] w-[250px] mb-4 md:mr-10 ml-5 grayscale hover:scale-125 sm:block hidden"
            />
          </ContainerLayout>
        </div>
      </div>
    </>
  );
};

export default index;
