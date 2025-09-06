import CalendaIcon from "@/assets/images/calendar-icon.svg?react";

const Heading = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Professor - müəllim heyəti</h1>
        <p className="font-normal">
          Müəllim heyətinin idarə edilməsi və tədris yükünün təyin edilməsi.
        </p>
      </div>
      <div>
        <button className="border border-[#9BC6F5] text-[#2B58CA] font-semibold rounded-md py-[8px] px-[14px] flex gap-2 items-center">
          <CalendaIcon />
          Növbəti il üçün hazırlıq
        </button>
      </div>
    </div>
  );
};

export default Heading;
