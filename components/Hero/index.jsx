import Image from "next/image";
import { Statistics } from "..";
import { ContainerLayout } from "@/layouts";
import { motion } from "framer-motion";
import "./styles.module.css";
import Link from "next/link";
import { Phone } from "iconoir-react";

const index = () => {
  return (
    <>
      {/* <div className="bg-dark text-white w-full top-0 z-[-1] relative">
        <div className="bg-[url(/images/bg.svg)]">
          <div className="h-[700px] flex flex-col justify-center">
            <div className="w-full h-full absolute z-[-1]"></div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="w-full h-[80%] flex flex-col items-center justify-center gap-2 text-center"
            >
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
            <div className="absolute bottom-0 pointer-events-none bg-gradient-to-t from-dark w-full h-[300px] z-[1100]"></div>
            <ContainerLayout
              className={
                "flex flex-row sm:justify-between justify-center w-full"
              }
            >
              <Image
                src={"/images/generator.png"}
                alt="generator"
                width={500}
                height={500}
                className="z-[1000] min-[1200px]:w-[350px] min-[992px]:w-[300px] w-[250px] sm:mb-4 mb-20 md:ml-10 ml-5 hover:scale-125"
              />
              <Image
                src={"/images/alimator.png"}
                alt="alimator"
                width={500}
                height={500}
                className="z-[1000] min-[1200px]:w-[350px] min-[992px]:w-[300px] w-[250px] mb-4 md:mr-10 ml-5 hover:scale-125 sm:block hidden"
              />
            </ContainerLayout>
          </div>
        </div>
      </div> */}
      <div className="bg-gray-50 h-[700px] w-full border-b">
        <div className="bg-[url(/images/bg.svg)] bg-cover bg-center w-full h-full">
          <ContainerLayout className="relative top-[100px] flex min-[996px]:flex-row flex-col gap-5 h-[calc(100%-200px)]">
            <div className="min-[996px]:w-1/2 w-full h-full flex flex-col justify-center gap-4">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-big leading-tight font-black uppercase"
              >
                Компания состоит из команды техников
              </motion.h1>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                операторов и продаж, которые каждый день делятся своим опытом и
                профессиональными навыками, чтобы помочь клиентам, разрабатывая
                и собирая электрогенераторы высокого качества, эффективные и
                долговечные.
              </motion.h1>
              <Link href={"/contact"}>
                <button className="py-4 px-10 text-white w-fit rounded-full font-medium bg-main hover:bg-orange-700 transition-colors text-small duration-300 flex flex-row gap-3">
                  <Phone className="fill-white"/>
                  Контакт
                </button>
              </Link>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              className="min-[996px]:w-1/2 w-full h-full flex items-center min-[996px]:justify-end justify-center"
            >
              <div className="w-fit h-fit rounded-2xl p-6 flex items-center justify-center">
                <Image
                  src={"/images/alimator.png"}
                  alt="alimator"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </ContainerLayout>
        </div>
      </div>
    </>
  );
};

export default index;
