import Link from "next/link";
import { footer } from "@/data";

const index = () => {
  return (
    <div className="w-full py-14 bg-dark">
      <div className="custom-container text-white flex flex-col gap-5">
        <Link
          href={"/"}
          className="font-trap_bold flex flex-row items-center gap-2"
        >
          <h1 className="text-medium text-gradient">ABSOLUTE ENERGY</h1>
        </Link>
        <ul className="flex sm:flex-row flex-col sm:gap-4 gap-2">
          {footer.map((link) => {
            return (
              <li key={link.id} className="text-small">
                <Link href={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="border-t opacity-15 my-4"></div>
        <div className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-2">
          <h3 className="text-small opacity-30">
            &copy; 2024 Absolute Energy. Все права защищены.
          </h3>
          <ul className="flex flex-row gap-4">
            <li>
              <Link href={"/"} className="text-small opacity-30">
                Условия
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-small opacity-30">
                Конфиденциальность
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-small opacity-30">
                Cоокиес
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
