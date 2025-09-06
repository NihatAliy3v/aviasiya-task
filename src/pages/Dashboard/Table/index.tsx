import { useState } from "react";
import { rows } from "./config";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDeleteTeacher } from "@/hooks/api/teacher";
import DropdownIcon from "@/assets/images/dropdown-icon.svg?react";
import BlackDocIcon from "@/assets/images/black-doc-icon.svg?react";
import EditIcon from "@/assets/images/edit-icon.svg?react";
import TrashIcon from "@/assets/images/trash-icon.svg?react";
import type { Teacher } from "@/types/teacher";



interface DashboardTableProps {
  filteredTeachers: Teacher[] | undefined;
  setSelectedTeacher: React.Dispatch<
    React.SetStateAction<Teacher|null>
  >;
}
const DashboardTable: React.FC<DashboardTableProps> = ({
  filteredTeachers,
  setSelectedTeacher,
}) => {
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const { mutate: deleteTeacher } = useDeleteTeacher();

  const handleDelete = (id: string) => {
    if (window.confirm("Bu müəllimi silmək istədiyinizə əminsinizmi?")) {
      deleteTeacher(id);
    }
  };

  return (
    <div className="overflow-x-auto invisible-scrollbar w-[1100px]">
      <table className="border min-w-[1440px] text-sm ">
        <thead>
          <tr className="border">
            {rows?.map((item, index) => (
              <th
                className="border py-2 pl-5 text-left text-[#717680] font-medium"
                key={index}
                style={{ width: `${item.size}px` }}
              >
                {item.fieldName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="font-medium">
          {filteredTeachers?.map((item, index) => (
            <tr
              key={item.id}
              className="text-[#181D27] font-medium text-[13px]"
            >
              <td className="py-3 pl-5">{index + 1}</td>
              <td className="py-3 pl-5">
                {item.firstName} {item.lastName} {item.fatherName}
              </td>
              <td className="py-3 pl-5">{item.gender}</td>
              <td className="py-3 pl-5">{item.finCode}</td>
              <td className="py-3 pl-5">{item.birthdate}</td>
              <td className="py-3 pl-5">
                <span className="border border-gray-500 p-1 rounded-lg text-xs">
                  {item.stateUnit}
                </span>
              </td>
              <td className="py-3 pl-5">{item.totalHour}</td>
              <td className="py-3 pl-5">{item.department}</td>
              <td className="py-3 pl-5">
                {item.status ? (
                  <span className="border border-green-600 bg-green-50 rounded-md text-xs p-1">
                    Əmr var
                  </span>
                ) : (
                  <span className="border border-red-600 bg-red-50 rounded-md text-xs p-1">
                    Əmr yoxdur
                  </span>
                )}
              </td>
              <td>
                <Popover
                  open={openPopoverId === item.id}
                  onOpenChange={(isOpen) =>
                    setOpenPopoverId(isOpen ? item.id : null)
                  }
                >
                  <PopoverTrigger className="px-5">
                    <DropdownIcon />
                  </PopoverTrigger>
                  <PopoverContent className="absolute right-0 flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setSelectedTeacher(item);
                        setOpenPopoverId(null);
                      }}
                      className="flex items-center gap-2"
                    >
                      <BlackDocIcon />
                      Detallar
                    </button>
                    <button className="flex items-center gap-2">
                      <EditIcon />
                      Düzəliş et
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                        setOpenPopoverId(null);
                      }}
                      className="flex items-center gap-2 text-red-600"
                    >
                      <TrashIcon />
                      Sil
                    </button>
                  </PopoverContent>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredTeachers?.length === 0 && (
        <p className="text-center py-4 text-gray-500">
          Heç bir müəllim tapılmadı
        </p>
      )}
    </div>
  );
};

export default DashboardTable;
