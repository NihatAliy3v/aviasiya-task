import type React from "react";
import { rows } from "./config";
import type { Teacher } from "@/types/teacher";

const SearchTable: React.FC<{ results: Teacher[] }> = ({ results }) => {
  return (
    <div className="overflow-x-auto invisible-scrollbar mt-10 w-[1100px]">
      <table className="border min-w-[1440px] text-sm">
        <thead>
          <tr className="border">
            {rows?.map((item, index) => (
              <th
                key={index}
                className="border py-4 pl-5 text-left text-[#717680] font-medium"
                style={{ width: `${item.size}px` }}
              >
                {item.fieldName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="font-medium">
          {results.map((item, index) => (
            <tr
              key={item.id}
              className="text-[#181D27] font-medium text-[13px]"
            >
              <td className="py-3 pl-5">{index + 1}</td>
              <td className="py-3 pl-5">{item.department}</td>
              <td className="py-3 pl-5">
                {item.firstName} {item.lastName} {item.fatherName}
              </td>
              <td className="py-3 pl-5">{item.finCode}</td>
              <td className="py-3 pl-5">{item.gender}</td>

              <td className="py-3 pl-5">
                {" "}
                <span className="border border-gray-500  p-1 rounded-lg text-xs">
                  {item.stateUnit}
                </span>
              </td>

              <td className="py-3 pl-5">{item.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTable;
