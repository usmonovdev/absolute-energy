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
      <form className="py-10 max-w-[700px] mx-auto w-full">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="full_name" className="font-bold">
              ФИО *
            </label>
            <input
              type="text"
              id="full_name"
              placeholder="Введите ФИО"
              className="py-4 px-6 outline-none border-gray-200 border rounded-[20px] focus:border-main"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="gmail" className="font-bold">
              Ваша почта *
            </label>
            <input
              type="text"
              id="gmail"
              placeholder="example@yourmail.com"
              className="py-4 px-6 outline-none border-gray-200 border rounded-[20px] focus:border-main"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="company" className="font-bold">
              Компания *
            </label>
            <input
              type="text"
              id="company"
              placeholder="Название вашей компании"
              className="py-4 px-6 outline-none border-gray-200 border rounded-[20px] focus:border-main"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="theme" className="font-bold">
              Тема *
            </label>
            <input
              type="text"
              id="theme"
              placeholder="Опишите вкратце"
              className="py-4 px-6 outline-none border-gray-200 border rounded-[20px] focus:border-main"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <label htmlFor="message" className="font-bold">
            Сообщение *
          </label>
          <textarea
            id="message"
            placeholder="Введите текст сообщении..."
            rows={4}
            className="max-h-[200px] min-h-[100px] w-full py-4 px-6 outline-none border-gray-200 border rounded-[20px] focus:border-main"
          />
        </div>
      </form>
    </ContainerLayout>
  );
};

export default index;
