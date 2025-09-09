import React from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
	ChevronDownIcon,
	GraduationCapIcon,
	LanguagesIcon,
} from "lucide-react";
interface AcademicDetailProps {
	academicData: { label: string; value: any }[];
	languageData: { label: string; value: any }[];
}

const AcademicDetail: React.FC<AcademicDetailProps> = ({
	academicData,
	languageData,
}) => {
	return (
		<div className="flex flex-col gap-8">
			<Collapsible defaultOpen>
				<CollapsibleTrigger className="w-full">
					<h3 className="font-medium mb-4 flex justify-between items-center w-full">
						<span className="flex items-center gap-2">
							<GraduationCapIcon /> Akademik məlumatlar
						</span>
						<span>
							<ChevronDownIcon />
						</span>
					</h3>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<ul className="text-[#414651] flex flex-col gap-2">
						{academicData.map((data) => (
							<li
								key={data.label}
								className="flex justify-between"
							>
								<span className="font-medium">
									{data.label}
								</span>
								<div className="flex gap-2">
									{Array.isArray(data.value) ? (
										data.value.map((item) => (
											<span className="font-medium">
												{item.label}
											</span>
										))
									) : (
										<span className="font-medium">
											{data.value}
										</span>
									)}
								</div>
							</li>
						))}
					</ul>
				</CollapsibleContent>
			</Collapsible>
			<Collapsible defaultOpen>
				<CollapsibleTrigger className="w-full">
					<h3 className="font-medium mb-4 flex justify-between items-center w-full">
						<span className="flex items-center gap-2">
							<LanguagesIcon /> Dil bilikləri
						</span>
						<span>
							<ChevronDownIcon />
						</span>
					</h3>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<ul className="text-[#414651] flex flex-col gap-2">
						{languageData.map((data) => (
							<li
								key={data.label}
								className="flex justify-between"
							>
								<span className="font-medium">
									{data.label}
								</span>
								<div className="flex gap-2">
									{Array.isArray(data.value) ? (
										data.value.map((item) => (
											<span className="font-medium">
												{item.label}
											</span>
										))
									) : (
										<span className="font-medium">
											{data.value}
										</span>
									)}
								</div>
							</li>
						))}
					</ul>
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
};

export default AcademicDetail;
