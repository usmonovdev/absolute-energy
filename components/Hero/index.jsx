import Image from "next/image";
import Link from "next/link";
import { ContainerLayout } from "@/layouts";
import { motion } from "framer-motion";
import { Phone } from "iconoir-react";

const index = () => {
  return (
    <>
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
