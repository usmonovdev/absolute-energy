import { ContainerLayout } from "@/layouts";
import "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const index = () => {
  return (
    <ContainerLayout className={"py-10 sm:mt-0 mt-[150px]"}>
      <div className="flex min-[996px]:flex-row flex-col gap-4 w-full">
        <div className="relative p-6 lg:w-[35%] min-[996px]:w-[40%] w-fit mx-auto">
          {/* circle linear blue gradient */}
          <svg
            width="172"
            height="172"
            viewBox="0 0 172 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-[20px] -z-[1]"
          >
            <circle
              cx="85.7952"
              cy="85.7952"
              r="80.5"
              transform="rotate(60 85.7952 85.7952)"
              stroke="url(#paint0_linear_1_436)"
              stroke-width="10"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_436"
                x1="0.295149"
                y1="85.2952"
                x2="85.2951"
                y2="85.2952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B0DEFF" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* square dots */}
          <svg
            width="168"
            height="136"
            viewBox="0 0 168 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 -z-[1]"
          >
            <g opacity="0.2">
              <circle cx="4" cy="4" r="4" fill="#0094FF" />
              <circle cx="4" cy="36" r="4" fill="#0094FF" />
              <circle cx="4" cy="68" r="4" fill="#0094FF" />
              <circle cx="4" cy="100" r="4" fill="#0094FF" />
              <circle cx="4" cy="132" r="4" fill="#0094FF" />
              <circle cx="36" cy="4" r="4" fill="#0094FF" />
              <circle cx="36" cy="36" r="4" fill="#0094FF" />
              <circle cx="36" cy="68" r="4" fill="#0094FF" />
              <circle cx="36" cy="100" r="4" fill="#0094FF" />
              <circle cx="36" cy="132" r="4" fill="#0094FF" />
              <circle cx="68" cy="4" r="4" fill="#0094FF" />
              <circle cx="68" cy="36" r="4" fill="#0094FF" />
              <circle cx="68" cy="68" r="4" fill="#0094FF" />
              <circle cx="68" cy="100" r="4" fill="#0094FF" />
              <circle cx="68" cy="132" r="4" fill="#0094FF" />
              <circle cx="100" cy="4" r="4" fill="#0094FF" />
              <circle cx="164" cy="4" r="4" fill="#0094FF" />
              <circle cx="100" cy="36" r="4" fill="#0094FF" />
              <circle cx="164" cy="36" r="4" fill="#0094FF" />
              <circle cx="100" cy="68" r="4" fill="#0094FF" />
              <circle cx="164" cy="68" r="4" fill="#0094FF" />
              <circle cx="100" cy="100" r="4" fill="#0094FF" />
              <circle cx="164" cy="100" r="4" fill="#0094FF" />
              <circle cx="100" cy="132" r="4" fill="#0094FF" />
              <circle cx="164" cy="132" r="4" fill="#0094FF" />
              <circle cx="132" cy="4" r="4" fill="#0094FF" />
              <circle cx="132" cy="36" r="4" fill="#0094FF" />
              <circle cx="132" cy="68" r="4" fill="#0094FF" />
              <circle cx="132" cy="100" r="4" fill="#0094FF" />
              <circle cx="132" cy="132" r="4" fill="#0094FF" />
            </g>
          </svg>

          <motion.div
            initial={{ scale: 0 }}
            viewport={{ once: true }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring" }}
          >
            <Image
              src={"/images/workers-team.jpg"}
              width={500}
              height={500}
              alt="workers team"
              className="object-cover w-[300px] aspect-square rounded-full z-[10]"
            />
          </motion.div>

          {/* clircle gradient */}
          <svg
            width="311"
            height="311"
            viewBox="0 0 311 311"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[60px] -left-[30px] -z-[1]"
          >
            <circle
              cx="155.5"
              cy="155.5"
              r="155.5"
              fill="url(#paint0_linear_1_431)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_431"
                x1="18"
                y1="228.5"
                x2="292.5"
                y2="179"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FAE6FD" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="lg:w-[65%] min-[996px]:w-[60%] w-full">
          <h3 className="text-small font-semibold">About us</h3>
          <div className="bg-linear-gradient-blue w-[120px] h-[2px] mt-4"></div>
          <h1 className="text-big font-bold">О компании</h1>
          <p className="text-small text-[#9B9FA7] mb-2">
            Компания <span className="font-medium">«ABSOLUTE ENERGY»</span>{" "}
            основана в <span className="font-medium">2016</span> г. и является
            официальным <br />
          </p>
          <p className="text-small text-[#9B9FA7]">
            дилером торговых марок{" "}
            <span className="font-medium">AKSA, Cummins, RID, GENPOWER</span> и
            <span className="font-medium"> Mitsubishi</span> на территории
            Республики Узбекистан. На сегодняшний день продукция компании широко
            востребована в нефтегазовой отрасли, а также в сегментах
            телекоммуникации, гостиничной и банковской системы. В компании
            имеется достаточное количество обученных и сертифицированных
            сервисных инженеров для оказания гарантийной после гарантийной
            поддержки оборудования в режиме{" "}
            <span className="font-medium">24/7</span>
          </p>
          <Link href={"/about"} className="flex flex-row gap-2 mt-3 w-fit">
            <h3 className="text-[16px] text-main">Подробнее</h3>{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
                stroke="#0094FF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.01 12H20.33"
                stroke="#0094FF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 12H6.97"
                stroke="#0094FF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default index;
