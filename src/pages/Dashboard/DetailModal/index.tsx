import UserAvatar from "@/assets/images/icons/user-avatar.svg?react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Teacher } from "@/types/teacher";
import React from "react";
import { type Dispatch, type SetStateAction } from "react";
import PersonalDetail from "./PersonalDetail";
import AcademicDetail from "./AcademicDetail";
import SubjectDetail from "./SubjectDetail";
import { useSubjects } from "@/hooks/api/subject";
import DocDetail from "./DocDetail";
import PersonalUserIcon from "@/assets/images/icons/personal-user-icon.svg?react";
import { BookOpen, GraduationCapIcon } from "lucide-react";
import FileLineIcon from "@/assets/images/icons/file-line-icon.svg?react";
interface DetailModalProps {
	selectedTeacher: Teacher | null;
	setSelectedTeacher: Dispatch<SetStateAction<Teacher | null>>;
}

const DetailModal: React.FC<DetailModalProps> = ({
	setSelectedTeacher,
	selectedTeacher,
}) => {
	const { data: subjects, isLoading } = useSubjects();

	if (!selectedTeacher) return null;

	const personalData = [
		{ label: "Ad", value: selectedTeacher.firstName },
		{ label: "Soyad", value: selectedTeacher.lastName },
		{ label: "Ata adı", value: selectedTeacher.fatherName },
		{ label: "Cinsi", value: selectedTeacher.gender },
		{ label: "Doğum tarixi", value: selectedTeacher.birthdate },
		{ label: "ŞV seriya", value: selectedTeacher.seriaNo },
		{ label: "Finkod", value: selectedTeacher.finCode },
		{ label: "İstifadəçi adı", value: selectedTeacher.userName },
		{ label: "Vətəndaşlıq", value: selectedTeacher.citizenship },
		{ label: "Sosial statusu", value: selectedTeacher.socialStatus },
		{ label: "Sosial vəziyyəti", value: selectedTeacher.social },
		{
			label: "Hərbi status",
			value: selectedTeacher.militaryStatus ? "Var" : "Yoxdur",
		},
		{
			label: "Əlillik status",
			value: selectedTeacher.disabilityStatus ? "Var" : "Yoxdur",
		},
		{ label: "İşə başlama tarixi", value: selectedTeacher.startTime },
	];
	const connectionData = [
		{ label: "Mobil nömrə", value: selectedTeacher.tel },
		{ label: "Daxili nömrə", value: selectedTeacher.internalTel },
		{ label: "Ünvan", value: selectedTeacher.address },
		{ label: "Qeydiyyat", value: selectedTeacher.registerAddress },
		{ label: "E-Poçt", value: selectedTeacher.email },
	];

	const academicData = [
		{
			label: "Müəllimin əsas kafedrası ",
			value: selectedTeacher.department,
		},
		{ label: "Elmi dərəcə", value: selectedTeacher.academicDegree },
		{ label: "Elmi ad", value: selectedTeacher.academicName },
		{ label: "Maksimal saat", value: selectedTeacher.totalHour },
		{ label: "Ştat vahidi", value: selectedTeacher.stateUnit },
	];
	const languageData = [
		{ label: "Tədris apardığı dillər", value: selectedTeacher.languages },
		{
			label: "Xarici dil bilikləri",
			value: selectedTeacher.languageSkills,
		},
	];

	return (
		<div className="fixed inset-0 z-50 flex">
			<div
				className="flex-1 backdrop-blur-sm bg-black/30"
				onClick={() => setSelectedTeacher(null)}
			></div>

			<div className="w-2/5 bg-white shadow-lg p-6 overflow-y-auto">
				<div className="flex justify-between items-center border-b pb-3 mb-4">
					<h2 className="text-base font-semibold">
						Müəllim Detalları
					</h2>
					<button
						onClick={() => setSelectedTeacher(null)}
						className="text-gray-500 hover:text-black"
					>
						✕
					</button>
				</div>

				<div className="flex items-center gap-2">
					<UserAvatar />
					<div>
						<div className="flex gap-2 items-center">
							<span>
								{selectedTeacher.firstName}{" "}
								{selectedTeacher.lastName}{" "}
								{selectedTeacher.fatherName}
							</span>
							<span className="text-[#B42318] border border-red-500 bg-red-50 p-1 rounded-lg text-sm">
								Əmr yoxdur
							</span>
						</div>

						<div className="flex gap-2">
							{selectedTeacher.stateUnit?.map((unit) => (
								<span
									key={unit.value}
									className="border border-gray-500 p-1 rounded-lg text-xs"
								>
									{unit.label}
								</span>
							))}
						</div>
					</div>
				</div>

				<div>
					<Tabs defaultValue="personalTab">
						<TabsList className="my-3">
							<TabsTrigger
								value="personalTab"
								autoFocus
								className="flex gap-2"
							>
								<PersonalUserIcon />
								Şəxsi məlumat
							</TabsTrigger>
							<TabsTrigger
								value="academicTab"
								className="flex gap-2"
							>
								<GraduationCapIcon />
								Akademik məlumat
							</TabsTrigger>
							<TabsTrigger
								value="subjectTab"
								className="flex gap-2"
							>
								<BookOpen />
								Fənlər
							</TabsTrigger>
							<TabsTrigger value="docTab" className="flex gap-2">
								<FileLineIcon />
								Sənədlər
							</TabsTrigger>
						</TabsList>

						<TabsContent value="personalTab">
							<PersonalDetail
								personalData={personalData}
								connectionData={connectionData}
							/>
						</TabsContent>

						<TabsContent value="academicTab">
							<AcademicDetail
								academicData={academicData}
								languageData={languageData}
							/>
						</TabsContent>

						<TabsContent value="subjectTab">
							{isLoading ? (
								"Loading..."
							) : (
								<SubjectDetail subjectData={subjects ?? []} />
							)}
						</TabsContent>
						<TabsContent value="docTab">
							<DocDetail />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default DetailModal;
