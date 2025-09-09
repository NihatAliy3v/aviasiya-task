import avatar from "@/assets/images/icons/avatar.svg";
import Step from "./Step";
import PersonalInfoForm from "./PersonalInfo";
import AcademicInfoForm from "./AcademicInfo";
import { useParams, useSearchParams } from "react-router";
import SubjectInfoForm from "./SubjectInfo";
import { Button } from "@/components/ui/button";
import SaveIcon from "@/assets/images/icons/save-icon.svg?react";
import { useRef } from "react";
const CreateTeacher = () => {
	const [searchParams] = useSearchParams();
	const step = searchParams.get("step");
	const ref = useRef<{ handleSave: () => void }>(null);
	const { id } = useParams();
	return (
		<section>
			<div className="container">
				<div className="px-[16px] py-[24px] border rounded-lg w-[1160px] h-full flex flex-col ">
					{id && (
						<Button
							className="w-fit ml-auto bg-[#346CDC] hover:bg-[#322CDC] "
							onClick={() => ref.current?.handleSave()}
						>
							<SaveIcon />
							Yadda saxla
						</Button>
					)}

					<div className="flex items-center border-b pb-2">
						<div className="w-[40px] h-[40px] rounded-full">
							<img
								src={avatar}
								alt="user image"
								className="w-full h-full"
							/>
						</div>
						<span className="ml-4 font-medium">
							Əli Məmmədov Həsən
						</span>
						<span className="text-red-600 bg-red-50 border border-red-400 rounded-lg text-sm font-medium px-[10px] py-[4px] ml-6">
							Əmr yoxdur
						</span>
					</div>

					<div className="flex w-full min-h-[500px] py-[24px]">
						<div className="border-r w-1/4 ">
							<Step />
						</div>

						<div className="w-3/4">
							{step === "academic" && <AcademicInfoForm ref={ref} />}
							{step === "subject" && <SubjectInfoForm ref={ref}/>}
							{!step && <PersonalInfoForm ref={ref} />}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CreateTeacher;
