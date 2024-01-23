import { ContainerLayout } from "@/layouts";

const index = () => {
  return (
    <ContainerLayout className={"py-14 relative top-10"}>
      <div className="bg-dark rounded-3xl overflow-hidden">
        <div className="bg-[url(/images/bg.svg)] bg-cover bg-center">
          <div className="w-full h-auto py-12 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-big font-extrabold">О НАС</h1>
            <h3 className="text-small">
              Информация о нашей компании, нашей <br /> деятельности и услуг
            </h3>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default index;
