import { rows } from "./config";
import type { Teacher } from "@/types/teacher";

interface ManagementTableProps {
  filteredTeachers: Teacher[] | undefined;
  selectedTeachers: Record<string, Teacher>;
  toggleSelect: (teacher: Teacher) => void;
}
const ManagementTable: React.FC<ManagementTableProps> = ({
	filteredTeachers,
	selectedTeachers,
	toggleSelect,
}) => {
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
							<td className="py-3 pl-5">
								<input
									type="checkbox"
									checked={!!selectedTeachers[item.id]}
									onChange={() => toggleSelect(item)}
								/>
							</td>
							<td className="py-3 pl-5">{index + 1}</td>
							<td className="py-3 pl-5">
								{item.firstName} {item.lastName}{" "}
								{item.fatherName}
							</td>
							<td className="py-3 pl-5">{item.gender}</td>
							<td className="py-3 pl-5">{item.finCode}</td>
							<td className="py-3 pl-5">{item.birthdate}</td>
							<td className="py-3 pl-5">
								<div className="flex flex-wrap gap-1">
									{item &&
										item?.stateUnit?.map((unit) => (
											<span
												key={unit.value}
												className="border border-gray-500 p-1 rounded-lg text-xs"
											>
												{unit.label}
											</span>
										))}
								</div>
							</td>
							<td className="py-3 pl-5">{item.totalHour}</td>
							<td className="py-3 pl-5">
								<div className="flex flex-wrap gap-1">
									{item &&
										item?.languages?.map((lang) => (
											<span
												key={lang.value}
												className="border capitalize border-gray-500 p-0.5 px-2 rounded-2xl text-xs odd:bg-[#ABEFC6] odd:text-[#067647] odd:border-[#067647] even:bg-[#B2DDFF] even:text-[#175CD3]  even:border-[#175CD3]"
											>
												{lang.value}
											</span>
										))}
								</div>
							</td>
							<td className="py-3 pl-5">{item.department}</td>
							<td className="py-3 pl-5">
								{item.status ? (
									<span className="border border-[#067647] text-[#067647] bg-[#ABEFC660] rounded-2xl text-xs p-1 px-2">
										Əmr var
									</span>
								) : (
									<span className="border border-[#B42318] text-[#B42318] bg-[#FECDCA60] rounded-2xl text-xs p-1 px-2">
										Əmr yoxdur
									</span>
								)}
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

export default ManagementTable;
