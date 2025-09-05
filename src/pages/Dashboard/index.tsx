import { Link } from "react-router";
import CalendaIcon from "../../assets/images/calendar-icon.svg?react";
import { useTeachers } from "@/hooks/api/teacher";
import DropdownIcon from "@/assets/images/dropdown-icon.svg?react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import BlackDocIcon from "@/assets/images/black-doc-icon.svg?react";
import EditIcon from "@/assets/images/edit-icon.svg?react";
import TrashIcon from "@/assets/images/trash-icon.svg?react";
const rows = [
  {
    fieldName: "No",
    size: 100,
  },
  {
    fieldName: "Ad Soyad Ata adi",
    size: 300,
  },
  {
    fieldName: "Cinsi",
    size: 150,
  },
  {
    fieldName: "Finkod",
    size: 200,
  },
  {
    fieldName: "Dogum tarixi",
    size: 200,
  },
  {
    fieldName: "Stat vahidi",
    size: 200,
  },
  {
    fieldName: "Cem saat",
    size: 80,
  },
  {
    fieldName: "Tedris apardiqi diller",
    size: 200,
  },
  {
    fieldName: "Esas kafedra",
    size: 200,
  },
  {
    fieldName: "Status",
    size: 200,
  },
];

const Dashboard = () => {
  const { data: teacherData } = useTeachers();

  console.log(teacherData);
  return (
    <main>
      <section className="py-4">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-2xl">
                Professor - muellim heyeti
              </h1>
              <p className="font-normal">
                Müəllim heyətinin idarə edilməsi və tədris yükünün təyin
                edilməsi.
              </p>
            </div>
            <div>
              <button className="border border-[#9BC6F5] text-[#2B58CA] font-semibold rounded-md py-[8px] px-[14px] flex gap-2 items-center">
                {/* <img src={calendarİcon} alt="calendar" /> */}
                <CalendaIcon />
                Novbeti il ucun hazirliq
              </button>
            </div>
          </div>
          <div className="py-4 flex justify-between items-center">
            <p>
              Tedris yuku statusu
              <span className="text-[#B54708] border border-[#FEDF89] rounded-md px-[8px] py-[2px] ml-4">
                Tesdiq gozleyir
              </span>
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Ad, soyad ve ya fin ile axtar..."
                className="border rounded-md p-2 "
              />
              <Link
                to="/search-teacher"
                className="bg-[#346cdc] text-white rounded-lg px-[14px] py-[8px]"
              >
                Muellim elave et
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto invisible-scrollbar w-[1100px]">
            <table className="border min-w-[1440px] text-sm">
              <thead>
                <tr className="border">
                  {rows?.map((item, index) => (
                    <th
                      className={`border py-4 pl-5 text-left text-[#717680] `}
                      key={index}
                      style={{ width: `${item.size}px` }}
                    >
                      {item.fieldName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-medium">
                {teacherData?.map((item, index) => {
                  return (
                    <tr>
                      <td className=" py-4 pl-5">{item.id}</td>
                      <td className=" py-4 pl-5">
                        {item.firstName} {item.lastName} {item.fatherName}
                      </td>
                      <td className=" py-4 pl-5">{item.gender}</td>
                      <td className=" py-4 pl-5">{item.finCode}</td>
                      <td className=" py-4 pl-5">{item.birthdate}</td>
                      <td className=" py-4 pl-5">{item.stateUnit}</td>
                      <td className=" py-4 pl-5">{item.totalHour}</td>
                      <td className=" py-4 pl-5">
                        {/* {item?.language.map((item) => {
                          return <span>{item}</span>;
                        })} */}
                      </td>
                      <td className=" py-4 pl-5">{item.department}</td>
                      <td className=" py-4 pl-5">
                        {item.status ? "Emr var" : "emr yoxdur"}
                      </td>
                      <td>
                        <Popover>
                          <PopoverTrigger className="px-5">
                            <DropdownIcon />
                          </PopoverTrigger>

                          <PopoverContent className="absolute right-0 flex flex-col gap-3">
                            <button className="flex items-center gap-2">
                              <BlackDocIcon />
                              Detallar
                            </button>
                            <button className="flex items-center gap-2">
                              <EditIcon />
                              Düzəliş et
                            </button>
                            <button className="flex items-center gap-2 text-red-600">
                              <TrashIcon />
                              Sil
                            </button>
                          </PopoverContent>
                        </Popover>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
