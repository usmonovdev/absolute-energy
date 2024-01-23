import { ContainerLayout } from "@/layouts";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <ContainerLayout className={"py-14"}>
      <div className="flex min-[996px]:flex-row flex-col-reverse gap-8">
        <div className="min-[996px]:w-1/2 w-full about-photos">
          <div className="about-photo-1">
            <Image
              src={"/images/admin.png"}
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-3xl"
              alt="admin"
            />
          </div>
          <div className="about-photo-2">
            <div className="w-full h-full bg-[#5956E9] text-white text-center rounded-3xl flex flex-col items-center justify-center gap-[10px] px-3 py-12">
              <h1 className="sm:text-[40px] text-[20px] font-bold leading-none">500 K</h1>
              <h3 className="sm:text-[16px] text-[14px] capitalize">Daily active users</h3>
            </div>
          </div>
          <div className="about-photo-3">
            <Image
              src={"/images/team.png"}
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-3xl"
              alt="team"
            />
          </div>
        </div>
        <div className="min-[996px]:w-1/2 w-full">
          <h1 className="text-medium font-semibold">О компании</h1>
          <div className="flex flex-col gap-4 text-[#808080] mt-6 text-[14px]">
            <h3>
              Наша компания успешно реализовала в Узбекистане более 50 проектов
              под ключ с ориентированным на клиента подходом, инженерными
              решениями и оптимальными проектными возможностями с
              проектированием, поставкой, установкой и после продажным
              обслуживанием оборудования;Absolute Energy будет продолжать
              удовлетворять потребности своих клиентов с такой же серьезностью и
              решимостью в будущем, как и в прошлом.
            </h3>
            <h3>
              * Проектирование -  проектирование малой и средней мощности, план
              расположения оборудований и кабелей, подготовка документации по
              дизельной электро-станции,  расчет мощности электроустановок,
              расчеты и планы питающих сетей,  расчет электрических щитов, 
              расчет нагрузки,  планы заземления контура,  система снабжение
              топливом,  система автоматизации и пожарной безопасности.{" "}
            </h3>
            <h3>
              * Поставка – подготовка генератора, проверка генератора на заводе
              у производителя, подготовка необходимого транспорта и
              товаросопроводительного документа, таможенная очистка,
              сертификация поставленных товаров{" "}
            </h3>
            <h3>
              * Установка – установка, монтаж и настройка. Подготовка персонала
              по работе с генератором.{" "}
            </h3>
            <h3>
              * Сервисное обслуживание - предоставляем вам поддержку в различных
              областях, таких как техническое обслуживание, ремонт, поставка
              запасных частей, монтаж и пуско-наладка системы. Благодаря
              быстрому реагированию мы предлагаем решения для вашего бизнеса с
              минимальными простоями. Механические и электрические изменения в
              работе по приведению объекта в соответствие со стандартами,
              Монтаж, пуско-наладочные работы, ремонтные работы, Работы по
              техническому обслуживанию, Модификации включения питания.
            </h3>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default index;
