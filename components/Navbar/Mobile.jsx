import { navbar } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { Xmark } from "iconoir-react";
import Link from "next/link";

const Mobile = ({ open, handleClick }) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <div
              className="md:hidden block fixed top-0 left-0 bg-dark/40 w-screen h-screen"
              onClick={handleClick}
            ></div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{
                stiffness: 500,
                duration: 0.2,
              }}
              className={`md:hidden flex flex-col items-center fixed top-0 right-0 sm:w-full w-[90%] max-w-[400px] h-screen bg-white shadow-xl`}
            >
              <div className="w-full px-3 py-5 flex flex-row gap-2">
                <Xmark onClick={handleClick} className="cursor-pointer" />
                <Link href={"/"} className="text-gradient font-bold">
                  ABSOLUTE ENERGY
                </Link>
              </div>
              <ul className="w-full flex flex-col mt-4">
                {navbar.map((link) => {
                  return (
                    <li key={link.id} className="py-2 px-3 hover:bg-dark/10">
                      <Link href={link.url}>{link.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Mobile;
