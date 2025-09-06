import StepProgress from "./StepProgress";
import StepPending from "./StepPending";
import { useSearchParams } from "react-router";
import StepSuccess from "./StepSuccess";

const Step = () => {
  const [searchParams] = useSearchParams("step");
  const step = searchParams.get("step");

  return (
    <ul className="flex flex-col ">
      <li className="flex gap-2">
        {step ? <StepSuccess /> : <StepProgress />}
        Şəxsi məlumatlar
      </li>

      <div
        className="w-[2px] h-[14px] bg-[#D5D7DA] ml-[15px]"
        style={{ backgroundColor: step ? "#4988E8" : "#D5D7DA" }}
      ></div>
      <li className="flex gap-2">
        {step === "academic" && <StepProgress />}
        {step === "subject" && <StepSuccess />}
        {!step && <StepPending />}
        Akademik məlumatlar
      </li>
      <div className="w-[2px] h-[14px] bg-[#D5D7DA] ml-[15px]"></div>

      <li className="flex gap-2">
        {step !== "subject" ? <StepPending /> : <StepProgress />}
        Tədris etdiyi fənlər
      </li>
    </ul>
  );
};

export default Step;
