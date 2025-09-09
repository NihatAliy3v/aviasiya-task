import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import ArrowIcon from "@/assets/images/icons/arrow-icon.svg?react";
import GraduateIcon from "@/assets/images/icons/graduate-icon.svg?react";
import LangIcon from "@/assets/images/icons/lang-icon.svg?react";
import { useNavigate, useParams } from "react-router";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { useGetTeacherById, useUpdateTeacher } from "@/hooks/api/teacher";
import MultiSelect from "@/components/common/MultiSelect";
import {
	academicLangugageOptions,
	languageSkillsOptions,
	stateUnitOptions,
} from "./data";
import type { Teacher } from "@/types/teacher";

type FormValues = Teacher;

const STORAGE_KEY = "academicInfo";
const STORAGE_KEY_UPDATE = "academicInfoUpdate";

const AcademicInfo = forwardRef<{ handleSave: () => void }>((props, ref) => {
	const savedData = localStorage.getItem(STORAGE_KEY);
	const defaultValues: Partial<FormValues> = savedData
		? JSON.parse(savedData)
		: { totalHour: 750, colors: [] };
	const { id } = useParams();
	const isEditMode = Boolean(id);
	const { data: teacherData } = useGetTeacherById(id as string);

	const teacher = useUpdateTeacher(id as string);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
		control,
	} = useForm<FormValues>({ defaultValues });

	const navigate = useNavigate();

	const formValues = watch();
	useEffect(() => {
		if (!isEditMode) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
		} else {
			localStorage.setItem(
				STORAGE_KEY_UPDATE,
				JSON.stringify(formValues)
			);
		}
	}, [formValues]);

	useEffect(() => {
		if (isEditMode) {
			teacherData && reset(teacherData);
		}
	}, [id, teacherData, reset]);

	const onSubmit = (data: FormValues) => {
		if (isEditMode) {
			navigate({
				pathname: `/update-teacher/${id}`,
				search: "?step=subject",
			});
		} else {
			navigate({
				pathname: "/create-teacher",
				search: "?step=subject",
			});
		}
	};

	const handlePrev = () => {
		if (isEditMode) {
			navigate({
				pathname: `/update-teacher/${id}`,
				search: "",
			});
		} else {
			navigate({
				pathname: "/create-teacher",
				search: "",
			});
		}
	};
	useEffect(() => {
		console.log(formValues);
	}, [formValues]);
	useImperativeHandle(ref, () => ({
		handleSave() {
			if (teacherData) {
				teacher.mutate({ ...teacherData, ...formValues });
			}
		},
	}));

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mx-auto p-6 space-y-6 text-[#414651]"
		>
			<div className="space-y-4">
				<h2 className="font-medium text-black flex items-center gap-2">
					<GraduateIcon /> Akademik məlumatlar
				</h2>

				<div className="space-y-2">
					<label className="text-[#414651] text-sm font-medium">
						Müəllimin əsas kafedrası
					</label>
					<input
						type="text"
						{...register("department")}
						placeholder="Kafedra adı"
						className="w-full border rounded-md px-3 py-2"
					/>
				</div>

				<div className="space-y-2">
					<label className="text-sm font-medium">Elmi dərəcə</label>
					<select
						{...register("academicDegree")}
						className="w-full border rounded-md px-3 py-2"
					>
						<option value="">Elmi dərəcə</option>
						<option value="phd">PhD</option>
						<option value="doktor">Doktor</option>
					</select>
				</div>

				<div className="space-y-2">
					<label className="text-sm font-medium">Elmi ad</label>
					<select
						{...register("academicName")}
						className="w-full border rounded-md px-3 py-2"
					>
						<option value="">Elmi ad</option>
						<option value="dosent">Dosent</option>
						<option value="professor">Professor</option>
					</select>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<label className="text-sm font-medium">
							Maksimal saat *
						</label>
						<input
							type="number"
							{...register("totalHour", { required: true })}
							className="w-full border rounded-md px-3 py-2"
						/>
						{errors.totalHour && (
							<p className="text-red-500 text-sm">
								Maksimal saat tələb olunur
							</p>
						)}
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">
							Ştat vahidi *
						</label>

						<MultiSelect
							control={control}
							name={"stateUnit"}
							options={stateUnitOptions}
						/>

						{errors.stateUnit && (
							<p className="text-red-500 text-sm">
								Ştat vahidi tələb olunur
							</p>
						)}
					</div>
				</div>
			</div>

			<div className="space-y-4">
				<h2 className="font-medium flex items-center gap-2 text-black">
					<LangIcon /> Dil bilikləri
				</h2>

				<div className="space-y-2">
					<label className="text-sm font-medium">
						Tədris apardığı dillər *
					</label>
					<MultiSelect
						control={control}
						name={"languages"}
						options={academicLangugageOptions}
					/>
					{errors.languages && (
						<p className="text-red-500 text-sm">
							Tədris apardığı dillər tələb olunur
						</p>
					)}
				</div>

				<div className="space-y-2">
					<label className="text-sm font-medium">
						Xarici dil bilikləri
					</label>
					<MultiSelect
						control={control}
						name={"languagesSkills"}
						options={languageSkillsOptions}
					/>
				</div>
			</div>

			<div className="flex justify-between pt-6">
				<Button
					variant="outline"
					type="button"
					className="px-4 py-2 border text-[#414651] rounded-md hover:bg-gray-100"
					onClick={handlePrev}
				>
					<div className="rotate-180">
						<ArrowIcon />
					</div>
					Geri
				</Button>
				<Button
					variant="outline"
					type="submit"
					className="px-4 py-2 text-[#414651] rounded-md hover:bg-gray-100"
				>
					İrəli <ArrowIcon />
				</Button>
			</div>
		</form>
	);
});

export default AcademicInfo;
