import { statistics } from "@/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./styles.module.css";

const index = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="h-[20%] z-[999]">
      <motion.ul
        ref={ref}
        initial={{ scale: 0 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring" }}
        className={`text-dark flex sm:flex-row flex-col items-center justify-center gap-8 w-fit sm:min-w-[450px] min-w-[300px] max-w-[700px] border border-solid mx-auto p-4 rounded-xl bg-white  cursor-pointer shadow-sm`}
      >
        {statistics.map((stat) => {
          return (
            <li
              key={stat.id}
              className="relative flex flex-col items-center px-4 before:absolute  before:right-[-10px] sm:before:block before:w-[0.02rem] before:h-full before:bg-main before:hidden last:before:hidden"
            >
              <h1 className="text-big leading-none font-trap_bold text-gradient">
                {stat.number}+
              </h1>
              <h3 className="text-small font-medium">{stat.title}</h3>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default index;
