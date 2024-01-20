import Image from "next/image";
import "./styles.module.css";
import { Statistics } from "..";

const index = () => {
  return (
    <div className="bg-[#212542] text-white w-full top-0 z-[-1]">
      <div className="h-screen max-h-[700px] flex flex-col justify-center">
        <div className="w-full h-[80%] flex flex-col items-center justify-center gap-2 text-center">
          <h3 className="text-small uppercase text-gradient font-bold mb-1">Services</h3>
          <h1 className="text-big leading-none font-trap_black uppercase">
            Absolute Energy
          </h1>
          <h3 className="text-small uppercase">СЕРВИС МЕЖДУНАРОДНОГО КЛАССА</h3>
        </div>

        {/* <div className="absolute top-0 w-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            overflow="auto"
            shape-rendering="auto"
            // fill="#ffffff"
          >
            <defs>
              <path
                id="wavepath"
                d="M 0 2000 0 500 Q 145 335 290 500 t 290 0 290 0 290 0 290 0 290 0  v1000 z"
              />
              <path id="motionpath" d="M -580 0 0 0" />
            </defs>
            <g>
              <use xlinkHref="#wavepath" y="125" fill="#000">
                <animateMotion dur="5s" repeatCount="indefinite">
                  <mpath xlinkHref="#motionpath" />
                </animateMotion>
              </use>
            </g>
          </svg>
        </div> */}
        <Statistics />
      </div>
    </div>
  );
};

export default index;
