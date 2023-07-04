import React from "react";
import userData from "@constants/data";

export default function Footer() {
  return (
    <div className="bg-[#e2e8f0] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="h-[1.5px] w-full bg-white dark:bg-gray-700"></div>
        <div className="text-xl font-semibold flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center items-center mt-8">
          <div>
            <div class="dark:text-gray-200">
              Developed by
              <div className="inline-block transform hover:scale-110 transition duration-300">
                <a
                  className="text-gray-800 dark:text-white bg-sky-500 rounded-md mx-1 px-2 py-1"
                  href="https://github.com/akshay1027"
                >
                  {userData.name}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
