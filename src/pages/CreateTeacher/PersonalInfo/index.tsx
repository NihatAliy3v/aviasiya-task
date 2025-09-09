import { useEffect } from "react";
import { useForm } from "react-hook-form";
import PersonalIcon from "@/assets/images/icons/personal-icon.svg?react";
import { Input } from "@/components/ui/input";
import Phone from "@/assets/images/icons/phone.svg?react";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/images/icons/arrow-icon.svg?react";
import { useNavigate, useParams } from "react-router";
import type { Teacher } from "@/types/teacher";
import { useGetTeacherById, useUpdateTeacher } from "@/hooks/api/teacher";
import { forwardRef, useImperativeHandle } from "react";

const STORAGE_KEY = "personalInfo";
const STORAGE_KEY_UPDATE = "personalInfoUpdate";

const PersonalInfoForm = forwardRef<{
	handleSave: () => void;
}>((props,ref) => {
	const savedData = localStorage.getItem(STORAGE_KEY);
	const defaultValues = savedData ? JSON.parse(savedData) : {};
	const { id } = useParams();
	const navigate = useNavigate();
	const { data: teacherData } = useGetTeacherById(id as string);
	const teacher = useUpdateTeacher(id as string);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm({
		defaultValues,
	});

	const isEditMode = Boolean(id);
	useEffect(() => {
		if (isEditMode) {
			teacherData && reset(teacherData);
		}
	}, [id, teacherData, reset]);

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

	const onSubmit = (data: Teacher) => {
		console.log("Form Data:", data);
		if (!isEditMode) {
			navigate({
				pathname: "/create-teacher",
				search: "?step=academic",
			});
		} else {
			navigate({
				pathname: `/update-teacher/${id}`,
				search: "?step=academic",
			});
		}
	};

	useEffect(() => {
		console.log(formValues);
	}, [formValues]);

	useImperativeHandle(ref, () => ({
		handleSave()  {
			teacher.mutate(formValues);
		},
	}));
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-6 p-6 border rounded-lg"
		>
			<h2 className="text-lg font-semibold flex items-center gap-2">
				<PersonalIcon /> Şəxsi məlumatlar
			</h2>

			<div className="grid grid-cols-3 gap-4">
				<div className="flex flex-col">
					<label>Ad</label>
					<Input
						{...register("firstName")}
						className="border rounded px-3 py-2"
					/>
				</div>
				<div className="flex flex-col">
					<label>Soyad</label>
					<Input
						{...register("lastName")}
						className="border rounded px-3 py-2"
					/>
				</div>
				<div className="flex flex-col">
					<label>Ata adı</label>
					<Input
						{...register("fatherName")}
						className="border rounded px-3 py-2"
					/>
				</div>

				<div className="flex flex-col">
					<div>
						Cinsi <span className="text-red-800">*</span>
					</div>
					<div className="flex gap-6">
						<label className="flex items-center gap-2">
							<Input
								type="radio"
								value="male"
								{...register("gender", { required: true })}
							/>
							Kişi
						</label>
						<label className="flex items-center gap-2">
							<Input
								type="radio"
								value="female"
								{...register("gender", { required: true })}
							/>
							Qadın
						</label>
					</div>
					{errors.gender && (
						<span className="text-red-500 text-sm">
							Zəhmət olmasa seçin
						</span>
					)}
				</div>

				<div>
					<label>
						Doğum tarixi <span className="text-red-800">*</span>
					</label>
					<Input
						type="date"
						{...register("birthdate", { required: true })}
						className="border rounded px-3 py-2"
					/>

					{errors.birthdate && (
						<span className="text-red-500 text-sm">
							Zəhmət olmasa daxil edin
						</span>
					)}
				</div>

				<div>
					<label>
						ŞV seriya nömrəsi{" "}
						<span className="text-red-800">*</span>
					</label>
					<Input
						{...register("seriaNo", { required: true })}
						placeholder="ŞV seriya nömrəsi"
						className="border rounded px-3 py-2"
					/>
					{errors.seriaNo && (
						<span className="text-red-500 text-sm">
							Zəhmət olmasa daxil edin
						</span>
					)}
				</div>

				<div>
					<label>
						Finkod <span className="text-red-800">*</span>
					</label>
					<Input
						{...register("finCode", { required: true })}
						placeholder="Finkod"
						className="border rounded px-3 py-2"
					/>
					{errors.finCode && (
						<span className="text-red-500 text-sm">
							Zəhmət olmasa daxil edin
						</span>
					)}
				</div>

				<div>
					<label>Vətəndaşlıq</label>
					<Input
						{...register("citizenship")}
						placeholder="Vətəndaşlıq"
						className="border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label>Ailə vəziyyəti</label>
					<Input
						{...register("family")}
						placeholder="Ailə vəziyyəti"
						className="border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label>Sosial vəziyyəti</label>
					<Input
						{...register("social")}
						placeholder="Sosial vəziyyəti"
						className="border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label>Sosial status</label>
					<Input
						{...register("socialStatus")}
						placeholder="Sosial status"
						className="border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label>İstifadəçi adı</label>
					<Input
						{...register("userName")}
						placeholder="İstifadəçi adı"
						className="border rounded px-3 py-2"
					/>
				</div>

				<div className="flex gap-[68px]">
					<div className="col-span-3 flex flex-col gap-6">
						Hərbi status
						<div className="flex gap-4">
							<label className="flex items-center gap-1">
								<Input
									type="radio"
									value="var"
									{...register("militaryStatus")}
								/>{" "}
								Bəli
							</label>
							<label className="flex items-center gap-1">
								<Input
									type="radio"
									value="yoxdur"
									{...register("militaryStatus")}
								/>{" "}
								Xeyr
							</label>
						</div>
					</div>
					<div className="col-span-3 flex flex-col gap-6">
						Əlillik statusu
						<div className="flex gap-4">
							<label className="flex items-center gap-1">
								<Input
									type="radio"
									value="var"
									{...register("disabilityStatus")}
								/>{" "}
								Bəli
							</label>
							<label className="flex items-center gap-1">
								<Input
									type="radio"
									value="yoxdur"
									{...register("disabilityStatus")}
								/>{" "}
								Xeyr
							</label>
						</div>
					</div>
				</div>
			</div>

			<h2 className="text-lg font-semibold flex items-center gap-3">
				<Phone /> Əlaqə məlumatları
			</h2>

			<div className="grid grid-cols-3 gap-4">
				<div>
					<label>Ünvan</label>
					<Input
						{...register("address")}
						placeholder="Ünvan"
						className="border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label>Qeydiyyat ünvanı</label>
					<Input
						{...register("registerAddress")}
						placeholder="Qeydiyyat ünvanı"
						className="border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label>Mobil nömrə</label>
					<Input
						{...register("tel")}
						placeholder="Mobil nömrə"
						className="border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label>Daxili nömrə</label>
					<Input
						{...register("internalTel")}
						placeholder="Daxili nömrə"
						className="border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label>E-poçt</label>
					<Input
						type="email"
						{...register("email")}
						placeholder="E-poçt"
						className="border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label>İşə başlama tarixi</label>
					<Input
						type="date"
						{...register("startTime")}
						className="border rounded px-3 py-2"
					/>
				</div>
			</div>

			<div className="flex justify-end">
				<Button
					variant="outline"
					type="submit"
					className="text-[#414651] px-6 py-2 rounded-lg flex items-center"
				>
					İrəli <ArrowIcon />
				</Button>
			</div>
		</form>
	);
});

export default PersonalInfoForm;
