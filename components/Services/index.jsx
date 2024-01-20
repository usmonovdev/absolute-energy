import { ContainerLayout } from "@/layouts";
import "./styles.module.css";
import { services } from "@/data";

const index = () => {
  return (
    <ContainerLayout className={"py-10"}>
      <div className="text-center flex items-center flex-col">
        <h3 className="text-small font-semibold">Main Services</h3>
        <div className="bg-radial-gradient-red w-[120px] h-[2px] mt-4"></div>
        <h1 className="text-big font-bold leading-none mt-4">
          Основные направления
        </h1>
      </div>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-5">
        {services.map((service) => {
          return (
            <li key={service.id} className="border p-3 rounded-[15px] hover:bg-[#f1f1f130] hover:border-main">
              <service.icon className={"mb-4 w-[64px] h-[64px]"} />
              <div className="flex flex-col gap-2">
                <h1
                  className="text-small font-semibold text-dark"
                  title={service.title}
                >
                  {service.title}
                </h1>
                <h3 className="text-small text-[#9B9FA7]" title={service.desc}>
                  {service.desc}
                </h3>
              </div>
            </li>
          );
        })}
      </ul>
    </ContainerLayout>
  );
};

export default index;
