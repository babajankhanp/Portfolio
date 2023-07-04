import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#2dd4bf", "#f43f5e", "#a855f7", "#06b6d4"];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start overflow-hidden">
      {/* Text container */}
      <div className="md:w-1/2 mt-0 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-slate-100 px-1 my-2">
              Software Development Engineer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-slate-100 px-1 my-2">
              Tinkerer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-slate-100 px-1 my-2">
              Lifelong Learner
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-slate-100 px-1 my-2">
              I Get Things Done
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="md:w-1/2 md:-mr-40 mb-20 md:mb-0 mt-20">
        <div className="w-full px-10 sm:px-20 md:px-8 md:w-3/4">
          <img src={userData.avatarUrl} alt="avatar" className="rounded-[20px] shadow" />
        </div>
      </div>
    </div>
  );
}
