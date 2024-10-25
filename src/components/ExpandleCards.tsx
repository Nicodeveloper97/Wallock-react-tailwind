import { useState } from "react";
import { ServicesType } from "../types";

type ExpandableCardsProps = {
  service: ServicesType;
};

export default function ExpandableCards({ service }: ExpandableCardsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="space-y-4 my-4 sm:my-8 bg-gray-100 p-0 sm:p-4">
      <article
        className={`w-full sm:w-full border-2 border-[#0A2FDA] rounded-md p-4 sm:p-6 ${
          isExpanded ? "py-6" : "py-2"
        } transition-all duration-500 ease-in-out`}
      >
        
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-base sm:text-xl font-quicksand font-semibold text-gray-800">
            {service.title}
          </h1>
          <button
            onClick={handleClick}
            className="focus:outline-none text-[#0A2FDA]"
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              {!isExpanded && (
                <>
                  <span className="absolute w-full h-0.5 bg-[#0A2FDA]" />
                  <span className="absolute h-full w-0.5 bg-[#0A2FDA]" />
                </>
              )}
              {isExpanded && (
                <>
                  <span className="absolute w-full h-0.5 bg-[#0A2FDA] rotate-45" />
                  <span className="absolute w-full h-0.5 bg-[#0A2FDA] -rotate-45" />
                </>
              )}
            </div>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? "max-h-96" : "max-h-0"
          } overflow-hidden transition-all duration-500 ease-in-out`}
        >
          {isExpanded && (
            <p className="text-sm sm:text-base text-gray-600 mt-4 text-center sm:text-left">
              {service.servicio}
            </p>
          )}
        </div>
      </article>
    </div>
  );
}
