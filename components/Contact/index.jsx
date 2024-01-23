import { ContainerLayout } from "@/layouts";

const index = () => {
  const inputStyles =
    "px-[20px] py-[12px] w-full bg-white/20 outline-none rounded-[12px] focus:ring-2 ring-main";
  return (
    <>
      <div className="bg-dark w-full h-full z-[20] text-white">
        <ContainerLayout className={"py-14 flex min-[996px]:flex-row flex-col md:gap-4 gap-8"}>
          <div className="min-[996px]:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-gradient font-bold text-[36px] leading-none">
              Хотите посмотреть?
            </h1>
            <p className="text-[16px]">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов.
            </p>
          </div>
          <div className="min-[996px]:w-1/2 w-full flex sm:flex-row flex-col justify-between gap-6">
            <div className="w-full flex flex-col gap-6">
              <input
                type="text"
                className={`${inputStyles}`}
                placeholder="Ваше имя"
              />
              <h3 className="text-[12px] text-[#E7E7E7] text-center leading-6 sm:block hidden">
                *Мы никому не передаем ваши данные. <br /> И не сохраняем ваш
                номер в базу.
              </h3>
            </div>
            <div className="w-full flex flex-col gap-6">
              <input
                type="text"
                className={`${inputStyles}`}
                placeholder="Ваш телефон"
              />
              <button className="py-[12px] px-[20px] bg-linear-gradient rounded-[12px] w-full">
                Посмотреть район
              </button>
              <h3 className="text-[12px] text-[#E7E7E7] text-center leading-6 sm:hidden block">
                *Мы никому не передаем ваши данные. <br /> И не сохраняем ваш
                номер в базу.
              </h3>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </>
  );
};

export default index;
