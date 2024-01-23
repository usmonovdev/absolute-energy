import { ContainerLayout } from "@/layouts";
import { Mail, Phone } from "iconoir-react";

const index = () => {
  return (
    <ContainerLayout className={"py-14 relative top-10"}>
      <div className="bg-gray-50 rounded-3xl overflow-hidden">
      <div
        className="w-full h-auto bg-[url(/images/bg.svg)] bg-cover bg-center rounded-xl py-12 flex flex-col items-center justify-center text-dark text-center"
      >
        <h1 className="text-big font-extrabold leading-tight">Обратная связь</h1>
        <div className="flex sm:flex-row flex-col sm:gap-4 gap-2">
          <h3 className="text-small flex flex-row items-center gap-2">
            <Mail /> contact@technologycal
          </h3>
          <h3 className="text-small flex flex-row items-center gap-2">
            <Phone /> +998 (99) 999-99-99
          </h3>
        </div>
      </div>
      </div>
    </ContainerLayout>
  );
};

export default index;
