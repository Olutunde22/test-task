import { ITask } from "../App";

type TaskProps = ITask & {
	onSelect: (id: string) => void;
	onCheck: (task: ITask) => void;
};

export default function Task({
	checked,
	name,
	id,
	onSelect,
	onCheck,
}: TaskProps) {
	return (
		<div className="bg-white pl-[23px] pr-[23px] h-[91px] rounded-[6px] justify-between flex items-center w-full border border-[#E7E7E7] box-shadow-task-card">
			<div className="flex items-center">
				<input
					type="checkbox"
					checked={checked}
					onChange={(event) =>
						onCheck({ id, name, checked: event.target.checked })
					}
					className="h-8 w-8 font-thin checked:bg-[#53DA69] checked:text-[#53DA69] border-[1.5px] checked:border-[#49C25D] rounded-full !ring-0"
				/>
				<p
					className={`ml-[17px] font-medium  text-[#071D55] ${
						checked ? "line-through text-[#8D8D8D]" : ""
					}`}
				>
					{name}
				</p>
			</div>
			<button
				onClick={() => onSelect(id)}
				className="border border-[#071D55] text-[#071D55] h-[45px] w-[51px] rounded text-base leading-[18.75px] font-medium"
			>
				Edit
			</button>
		</div>
	);
}
