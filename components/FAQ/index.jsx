import { faqs } from "@/data";
import { ContainerLayout } from "@/layouts";
import { FAQComponent } from "..";
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
    <ContainerLayout className={"py-10"}>
      <div className="text-center flex items-center flex-col">
        <h3 className="text-small font-semibold">FAQ's</h3>
        <div className="bg-radial-gradient-blue w-[120px] h-[2px] mt-4"></div>
        <h1 className="text-big font-bold leading-none mt-4">
          Часто задаваемые вопросы
        </h1>
      </div>
      <motion.ul
        className="max-w-[700px] w-full mx-auto mt-8 flex flex-col gap-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {faqs.map((faq) => {
          return (
            <motion.li variants={item} key={faq.id}>
              <FAQComponent question={faq.question} answer={faq.answer} />
            </motion.li>
          );
        })}
      </motion.ul>
    </ContainerLayout>
  );
};

export default index;
