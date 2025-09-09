import type { Subject } from "@/types/subject";
import { BookOpen } from "lucide-react";

interface SubjectDetailProps {
  subjectData: Subject[];
}


const SubjectDetail: React.FC<SubjectDetailProps> = ({ subjectData }) => {
	console.log("AAA", subjectData && subjectData);
	return (
		<div>
			<h3 className="font-medium mb-4 flex justify-between items-center w-full">
				<span className="flex items-center gap-2">
					<BookOpen /> Tədris etdiyi fənlər
				</span>
				
			</h3>
			{subjectData.length === 0 ? (
				<p className="text-center py-4 text-gray-500">tapilmadi</p>
			) : (
				<ul>
					{subjectData.map((subject, index) => (
						<li key={index}>
							{index + 1}. {subject.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SubjectDetail;
