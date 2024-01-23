import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MinusCircle, PlusCircle } from "iconoir-react";

const FAQComponent = ({ question, answer }) => {
  const [isOpen, setISOpen] = useState(false);
  return (
    <div className={`bg-gray-50 p-4 rounded-lg`}>
      <div
        className={`${
          isOpen && "mb-3 font-semibold"
        } flex flex-row gap-3 cursor-pointer`}
        onClick={() => setISOpen(!isOpen)}
      >
        <div className="w-[5%]">
          {isOpen ? (
            <MinusCircle className="opacity-30" />
          ) : (
            <PlusCircle className="opacity-30" />
          )}
        </div>
        <div className="w-[95%]">
          <h1 className="text-small">{question}</h1>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <h3 className="text-small">{answer}</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQComponent;
