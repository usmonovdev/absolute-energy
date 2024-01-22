import { ContainerLayout } from "@/layouts";
import React from "react";
import { motion } from "framer-motion";

const index = () => {
  return (
    <ContainerLayout className={"py-10 relative top-10"}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
        className="w-full h-auto bg-[url(/images/about-bg.png)] bg-cover bg-center rounded-xl py-12 mb-5 flex flex-col items-center justify-center text-white text-center"
      >
        <h1 className="text-big font-extrabold">О НАС</h1>
        <h3 className="text-small">
          Информация о нашей компании, нашей <br /> деятельности и услуг
        </h3>
      </motion.div>
    </ContainerLayout>
  );
};

export default index;
