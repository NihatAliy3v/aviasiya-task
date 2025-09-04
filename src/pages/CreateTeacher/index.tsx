import React from "react";
import avatar from "@/assets/images/avatar.svg";
import SearchSuccessIcon from "@/assets/images/step-success-icon.svg?react";
const CreateTeacher = () => {
  return (
    <section>
      <div className="container">
        <div className="px-[16px] py-[24px] border rounded-lg w-[1160px] h-full  min-h-screen">
          <div className="flex items-center border-b pb-2">
            <div className="w-[40px] h-[40px] rounded-full">
              <img src={avatar} alt="user image" className="w-full h-full" />
            </div>
            <span className="ml-4 font-medium">Əli Məmmədov Həsən</span>
            <span className="text-red-600 bg-red-50 border border-red-400 rounded-lg text-sm font-medium px-[10px] py-[4px] ml-6">
              Əmr yoxdur
            </span>
          </div>

          <div className="flex w-full min-h-screen">
            <div className="border-r w-1/4 ">
              <ul>
                <li className="flex gap-2">
                  <div className="border-2 border-blue-600 rounded-full w-[32px] h-[32px] flex items-center justify-center">
                    <div className="w-[24px] h-[24px] rounded-full bg-blue-600 flex justify-center items-center">
                      <div className="w-[8px] h-[8px] bg-white rounded-full "></div>
                    </div>
                  </div>
                  Şəxsi məlumatlar
                </li>
                <li className="flex gap-2">
                  <SearchSuccessIcon />
                  Akademik məlumatlar
                </li>
                <li className="flex gap-2">
                  Tədris etdiyi fənlər
                </li>
              </ul>
            </div>

            <div className="w-3/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTeacher;
