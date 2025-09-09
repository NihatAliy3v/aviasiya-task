import Select, { type StylesConfig } from "react-select";
import { Controller, type Control } from "react-hook-form";

interface MultiSelectProps {
	control: Control<any>;
	name: string;
	options: Option[];
}

export interface Option {
	 value: string;
	 label: string;
	 isFixed?: boolean;
}



const styles: StylesConfig<Option, true> = {
	control: (styles) => ({ ...styles, backgroundColor: "white" }),
	option: (styles, { isDisabled, isSelected }) => {
		return {
			...styles,
			color: isDisabled ? "#ccc" : isSelected ? "white" : "black",
			cursor: isDisabled ? "not-allowed" : "default",
		};
	},
	multiValue: (styles) => {
		const color = "white";
		return {
			...styles,
			backgroundColor: color,
			border: `1px solid black`,
			borderRadius: 5,
		};
	},
	multiValueLabel: (styles) => ({
		...styles,
		color: "black",
	}),
	multiValueRemove: (styles) => ({
		...styles,
		color: "black",
		":hover": {
			color: "black",
		},
	}),
	clearIndicator: (styles) => ({
		...styles,
		display: "none",
	}),
};

const MultiSelect: React.FC<MultiSelectProps> = ({ control, name ,options}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Select
					closeMenuOnSelect={false}
					isMulti
					options={options}
					styles={styles}
					placeholder="Seçin"
					{...field}
				/>
			)}
		/>
	);
};
export default MultiSelect;
