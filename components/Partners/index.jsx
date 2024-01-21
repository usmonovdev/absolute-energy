import { partners } from "@/data";
import { ContainerLayout } from "@/layouts";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="bg-gray-50 py-12 px-25">
      <h1 className="text-small text-dark font-semibold text-center">
        НАШИ ПАРТНЁРЫ
      </h1>
      <ContainerLayout>
        <ul className="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 py-7 gap-3">
          {partners.map((partner) => {
            return (
              <li
                key={partner.id}
                className="p-2 bg-white rounded-lg flex items-center justify-center shadow-small"
              >
                <Image
                  src={partner.logo}
                  width={200}
                  height={200}
                  alt="logo"
                  className="object-cover w-fit h-auto"
                />
              </li>
            );
          })}
        </ul>
      </ContainerLayout>
    </div>
  );
};

export default index;
