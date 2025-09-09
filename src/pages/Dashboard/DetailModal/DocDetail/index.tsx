
import FileLineIcon from "@/assets/images/icons/file-line-icon.svg?react";
import PDFIcon from "@/assets/images/icons/pdf-icon.svg?react";
const DocDetail = () => {
	const data = [
		{
			docName: "Bakalavriat diplomu",
			docType: "PDF",
			docSize: "1 MB",
		},
		{
			docName: "Bakalavriat diplomu",
			docType: "PDF",
			docSize: "1 MB",
		},
		{
			docName: "Bakalavriat diplomu",
			docType: "PDF",
			docSize: "1 MB",
		},
		{
			docName: "Bakalavriat diplomu",
			docType: "PDF",
			docSize: "1 MB",
		},
		
	];

	return (
		<div>
			<h3 className="font-medium mb-4 flex justify-between items-center w-full">
				<span className="flex items-center gap-2">
					<FileLineIcon />
					Diplomlar və sertifikatlar
				</span>
			</h3>

			<div>
				{data.map((doc, index) => (
					<div key={index} className="flex items-center gap-4 mb-4 border p-2 rounded-lg">
						<PDFIcon />
						<div>
							<h4 className="font-medium">{doc.docName}</h4>
							<div className="flex items-center gap-1">
								<p className="text-sm text-gray-500">
									{doc.docType}
								</p>
                                |
								<p className="text-sm text-gray-500">
									{doc.docSize}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DocDetail;
