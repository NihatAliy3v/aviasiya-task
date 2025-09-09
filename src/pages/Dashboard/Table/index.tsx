import { useState } from "react";
import { rows } from "./config";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useDeleteTeacher } from "@/hooks/api/teacher";
import DropdownIcon from "@/assets/images/icons/dropdown-icon.svg?react";
import BlackDocIcon from "@/assets/images/icons/black-doc-icon.svg?react";
import EditIcon from "@/assets/images/icons/edit-icon.svg?react";
import TrashIcon from "@/assets/images/icons/trash-icon.svg?react";
import type { Teacher } from "@/types/teacher";
import { useNavigate } from "react-router";

interface DashboardTableProps {
	filteredTeachers: Teacher[] | undefined;
	setSelectedTeacher: React.Dispatch<React.SetStateAction<Teacher | null>>;
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

	const navigate = useNavigate();

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
							<td>
								<Popover
									open={openPopoverId === item.id}
									onOpenChange={(isOpen) =>
										setOpenPopoverId(
											isOpen ? item.id : null
										)
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
										<button
											className="flex items-center gap-2"
											onClick={() =>
												navigate(
													`/update-teacher/${item.id}`
												)
											}
										>
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
