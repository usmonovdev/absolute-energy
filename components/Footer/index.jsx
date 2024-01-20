import React from "react";
import "./styles.module.css";
import { footer } from "@/data";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className="w-full py-10 bg-dark">
      <div className="custom-container text-white flex flex-row">
        <div className="flex flex-row items-center gap-2">
          <Image
            src={"/images/logo.png"}
            width={40}
            height={40}
            alt="logo"
            className="object-contain"
          />
          <Link href={"/"} className="text-gradient font-bold whitespace-nowrap w-fit">
            ABSOLUTE ENERGY
          </Link>
        </div>
        <div className="w-full flex flex-row justify-between">
          {footer.map((links) => {
            return (
              <ul key={links.id}>
                <h3 className="font-bold">{links.name}</h3>
                <li className="flex flex-col gap-2 mt-4">
                  {links.links.map((link) => {
                    return (
                      <h4 key={link.id}>
                        <Link href={link.url}>{link.name}</Link>
                      </h4>
                    );
                  })}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
