import { useEffect, useState } from "react";
import { useTeachers } from "@/hooks/api/teacher";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/images/icons/search-icon.svg?react";
import ManagementTable from "./Table";
import Heading from "./Heading";
import type { Teacher } from "@/types/teacher";
import api from "@/services/api/axiosInstance";
import { queryClient } from "@/services/api/queryClient";

const TeacherManagement = () => {
	const { data: teacherData } = useTeachers();
	const [searchTerm, setSearchTerm] = useState("");
	const [toggleButton, setToggleButton] = useState(false);
	const [selectedTeachers, setSelectedTeachers] = useState<
		Record<string, Teacher>
	>({});

	const filteredTeachers = teacherData?.filter((item: Teacher) => {
		const fullName =
			`${item.firstName} ${item.lastName} ${item.fatherName}`.toLowerCase();
		return (
			fullName.includes(searchTerm.toLowerCase()) ||
			item.finCode?.toLowerCase().includes(searchTerm.toLowerCase())
		);
	});
	useEffect(() => {
		const selectedArray = Object.values(selectedTeachers);
		if (selectedArray.length === 0) {
			setToggleButton(false);
		} else {
			setToggleButton(true);
		}
	}, [selectedTeachers]);

	const handleButtonClick = async() => {
		const selectedArray = Object.values(selectedTeachers);
		for (const teacher of selectedArray) {
			await api.put(`/teachers/${teacher.id}`, {
				...teacher,
				status: true,
			});
		}

		queryClient.invalidateQueries({ queryKey: ["teachers"] });

		setSelectedTeachers({});
	};
	const toggleSelect = (teacher: Teacher) => {
		setSelectedTeachers((prev) => {
			const newSelected = { ...prev };
			if (newSelected[teacher.id]) {
				delete newSelected[teacher.id];
			} else {
				newSelected[teacher.id] = teacher;
			}
			return newSelected;
		});
	};
	return (
		<main>
			<section className="py-4">
				<div className="container">
					<Heading />
					<div className="py-4 flex justify-between items-center">
						<div className="flex gap-4">
							<div className="relative">
								<span className="absolute left-3 top-1/2 -translate-y-1/2">
									<SearchIcon />
								</span>
								<Input
									type="text"
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
									placeholder="Fin, ad və ya soyadı daxil edin"
									className="w-full pl-10"
								/>
							</div>
						</div>

						{toggleButton && (
							<div className="flex items-center gap-4">
								Statusu dəyiş
								<button
									onClick={handleButtonClick}
									className="bg-[#079455] text-white px-4 py-2 rounded "
								>
									Əmr var
								</button>
							</div>
						)}
					</div>

					<ManagementTable
						filteredTeachers={filteredTeachers}
						selectedTeachers={selectedTeachers}
						toggleSelect={toggleSelect}
					/>
				</div>
			</section>
		</main>
	);
};

export default TeacherManagement;
