import React from "react";
import avatar from "@/assets/images/avatar.svg";
import SearchSuccessIcon from "@/assets/images/step-success-icon.svg?react";
import StepProgress from "./Step/StepProgress";
import StepPending from "./Step/StepPending";
import Step from "./Step";
import PersonalInfoForm from "./PersonalInfo";
import AcademicInfoForm from "./AcademicInfo";
import { useSearchParams } from "react-router";
import SubjectInfoForm from "./SubjectInfo";

const CreateTeacher = () => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");
  console.log(step);
  return (
    <section>
      <div className="container">
        <div className="px-[16px] py-[24px] border rounded-lg w-[1160px] h-full">
          <div className="flex items-center border-b pb-2">
            <div className="w-[40px] h-[40px] rounded-full">
              <img src={avatar} alt="user image" className="w-full h-full" />
            </div>
            <span className="ml-4 font-medium">Əli Məmmədov Həsən</span>
            <span className="text-red-600 bg-red-50 border border-red-400 rounded-lg text-sm font-medium px-[10px] py-[4px] ml-6">
              Əmr yoxdur
            </span>
          </div>

          <div className="flex w-full min-h-[500px] py-[24px]">
            <div className="border-r w-1/4 ">
              <Step />
            </div>

            <div className="w-3/4">
              {step === "academic" && <AcademicInfoForm />}
              {step === "subject" && <SubjectInfoForm />}
              {!step && <PersonalInfoForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTeacher;
