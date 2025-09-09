import React from "react";
import PersonalUserIcon from "@/assets/images/icons/personal-user-icon.svg?react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {  ChevronDownIcon, Phone } from "lucide-react";

interface PersonalDetailProps {
    personalData: { label: string; value: string }[];
    connectionData: { label: string; value: string }[];
}

const PersonalDetail: React.FC<PersonalDetailProps> = ({ personalData, connectionData }) => {
	return (
		<div className="flex flex-col gap-8">
			<Collapsible defaultOpen>
				<CollapsibleTrigger className="w-full">
					<h3 className="font-medium mb-4 flex justify-between items-center w-full">
						<span className="flex items-center gap-2">
							<PersonalUserIcon /> Şəxsi məlumatlar
						</span>
						<span>
							<ChevronDownIcon />
						</span>
					</h3>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<ul className="text-[#414651] flex flex-col gap-2">
						{personalData.map((data) => (
							<li
								key={data.label}
								className="flex justify-between"
							>
								<span className="font-medium">
									{data.label}
								</span>
								<span>{data.value}</span>
							</li>
						))}
					</ul>
				</CollapsibleContent>
			</Collapsible>

			<Collapsible defaultOpen>
				<CollapsibleTrigger className="w-full">
					<h3 className="font-medium mb-4 flex justify-between items-center w-full">
						<span className="flex items-center gap-2">
							<Phone size={18} /> Əlaqə məlumatları
						</span>
						<span>
							<ChevronDownIcon />
						</span>
					</h3>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<ul className="text-[#414651] flex flex-col gap-2">
						{connectionData.map((data) => (
							<li
								key={data.label}
								className="flex justify-between"
							>
								<span className="font-medium">
									{data.label}
								</span>
								<span>{data.value}</span>
							</li>
						))}
					</ul>
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
};

export default PersonalDetail;
