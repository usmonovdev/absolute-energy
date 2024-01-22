import { ContainerLayout } from "@/layouts";
import { CheckCircle } from "iconoir-react";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <ContainerLayout className="py-10">
      <div className="flex min-[996px]:flex-row flex-col gap-8">
        <div className="min-[996px]:w-1/2 w-full">
          <h1 className="text-medium font-semibold">Наши задачи</h1>
          <div className="flex flex-col gap-2 text-[#808080] mt-6 text-[14px]">
            <h3 className="font-bold">Поставка:</h3>
            <ul className="ml-8">
              <li className="list-disc">подготовка генератора,</li>
              <li className="list-disc">
                проверка генератора на заводе у производителя,
              </li>
              <li className="list-disc">
                подготовка необходимого транспорта и товаросопроводительного
                документа,
              </li>
              <li className="list-disc">таможенная очистка,</li>
              <li className="list-disc">сертификация поставленных товаров</li>
            </ul>
            <h3>
              <span className="font-bold">Установка</span> – установка, монтаж и
              настройка. Подготовка персонала по работе с генератором.{" "}
            </h3>
            <h3 className="mt-5">
              <span className="font-bold">Сервисное обслуживание</span> -
              предоставляем вам поддержку в различных областях, таких как
              техническое обслуживание, ремонт, поставка запасных частей, монтаж
              и пуско-наладка системы. Благодаря быстрому реагированию мы
              предлагаем решения для вашего бизнеса с минимальными простоями.
              Механические и электрические изменения в работе по приведению
              объекта в соответствие со стандартами, Монтаж, пуско-наладочные
              работы, ремонтные работы, Работы по техническому обслуживанию,
              Модификации включения питания
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex flex-row gap-2">
                <CheckCircle className="text-green-500" /> <h3>Поставка</h3>{" "}
              </li>
              <li className="flex flex-row gap-2">
                <CheckCircle className="text-green-500" /> <h3>Установка</h3>{" "}
              </li>
              <li className="flex flex-row gap-2">
                <CheckCircle className="text-green-500" />{" "}
                <h3>Сервисное обслуживание</h3>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="min-[996px]:w-1/2 w-full grid grid-cols-2 sm:gap-10 gap-4">
          <Image
            src={"/images/task-1.png"}
            width={400}
            height={400}
            alt="task photo 1"
            className="w-full object-contain"
          />
          <Image
            src={"/images/task-2.png"}
            width={400}
            height={400}
            alt="task photo 1"
            className="w-full object-contain"
          />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default index;
