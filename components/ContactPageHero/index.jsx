import { ContainerLayout } from "@/layouts";
import { motion } from "framer-motion";
import { Mail, Phone } from "iconoir-react";

const index = () => {
  return (
    <ContainerLayout className={"py-10 relative top-10"}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
        className="w-full h-auto bg-[url(/images/contact-bg.png)] bg-cover bg-center rounded-xl py-12 mb-5 flex flex-col items-center justify-center text-white text-center"
      >
        <h1 className="text-big font-extrabold">Обратная связь</h1>
        <div className="flex flex-row gap-4">
          <h3 className="text-small flex flex-row items-center gap-2">
            <Mail /> contact@technologycal
          </h3>
          <h3 className="text-small flex flex-row items-center gap-2">
            <Phone /> +998 (99) 999-99-99
          </h3>
        </div>
      </motion.div>
    </ContainerLayout>
  );
};

export default index;
