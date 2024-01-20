"./styles.module.css";
import { pricing } from "@/data";
import { Verify } from "@/icons";
import { ContainerLayout } from "@/layouts";
import { motion } from "framer-motion";

const index = () => {
  return (
    <ContainerLayout className={"py-10"}>
      <div className="text-center flex items-center flex-col">
        <h3 className="text-small font-semibold">Pricing plans</h3>
        <div className="bg-radial-gradient-red w-[120px] h-[2px] mt-4"></div>
        <h1 className="text-big font-bold leading-none mt-4">Тарифные планы</h1>
      </div>
      <ul className="flex min-[1100px]:flex-row flex-col justify-between gap-4 mt-8">
        {pricing.map((price) => {
          return (
            <motion.li
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={price.isSupport ? { delay: 0 } : { delay: 0.3 }}
              key={price.id}
              className={`text-center px-5 py-9 rounded-[16px] max-w-[700px] mx-auto ${
                price.isSupport
                  ? "text-white bg-linear-gradient"
                  : "text-dark min-[1100px]:bg-transparent bg-gray-50"
              }`}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-medium font-semibold">{price.name}</h1>
                <h3 className="text-small">{price.desc}</h3>
              </div>
              <ul className="flex flex-col items-center gap-[10px] py-10">
                {price.features.map((feature) => {
                  return (
                    <li key={feature.id} className="flex flex-row gap-4">
                      <Verify
                        className={`${
                          price.isSupport ? "stroke-white" : "stroke-main"
                        }`}
                      />
                      <h3>{feature.title}</h3>
                    </li>
                  );
                })}
              </ul>
              <button
                className={`w-full px-6 py-4 border rounded-[8px] ${
                  price.isSupport
                    ? "border-dark bg-dark text-white"
                    : "border-main text-main hover:bg-main/10 transition-colors duration-300"
                }`}
              >
                {price.buttonText}
              </button>
            </motion.li>
          );
        })}
      </ul>
    </ContainerLayout>
  );
};

export default index;
