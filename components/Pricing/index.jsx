import { pricing } from "@/data";
import { ContainerLayout } from "@/layouts";
import { motion } from "framer-motion";
import { CheckCircleSolid } from "iconoir-react";

const index = () => {
  return (
    <div id="pricing">
      <ContainerLayout className={"py-14"}>
        <div className="text-center flex items-center flex-col">
          <h1 className="text-big font-bold leading-none mt-4">
            Тарифные планы
          </h1>
        </div>
        <ul className="flex min-[1100px]:flex-row flex-col justify-between gap-5 mt-8">
          {pricing.map((price) => {
            return (
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={price.isSupport ? { delay: 0 } : { delay: 0.3 }}
                key={price.id}
                className={`text-center mt-10 px-5 py-9 w-full max-w-[700px] mx-auto text-dark border bg-gray-50 ${price.isSupport ? "rounded-b-[16px] relative before:content-['Самый_популярный_план'] before:absolute before:top-[-30px] before:left-0 before:bg-main before:w-full before:py-2 before:text-white before:rounded-t-[16px]" : "rounded-[16px]"}`}
              >
                <div className="flex flex-col gap-2">
                  <h1 className="text-small font-semibold text-main">{price.name}</h1>
                  <h1 className="text-big font-bold leading-none">
                    {price.price}<span className="text-medium">/mth</span>
                  </h1>
                  <h3 className="text-small">{price.desc}</h3>
                </div>
                <ul className="flex flex-col items-start gap-[10px] py-12">
                  {price.features.map((feature) => {
                    return (
                      <li key={feature.id} className="flex flex-row gap-4">
                        <CheckCircleSolid />
                        <h3 className="text-small text-start">{feature.title}</h3>
                      </li>
                    );
                  })}
                </ul>
                <button
                  className={`w-full px-6 py-4 border rounded-[8px] transition-colors duration-300 border-main text-white bg-main hover:bg-orange-700`}
                >
                  {price.buttonText}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </ContainerLayout>
    </div>
  );
};

export default index;
