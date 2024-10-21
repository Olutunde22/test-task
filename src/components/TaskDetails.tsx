import { useEffect, useState } from "react";
import { ITask } from "../App";
import TaskDetailsHeader from "./TaskDetailsHeader";

type TaskDetails = Partial<ITask> & {
	editTask: (value: ITask) => void;
	deleteTask: (value: string) => void;
};

export default function TaskDetails({
	id,
	name,
	checked,
	deleteTask,
	editTask,
}: TaskDetails) {
	const [editedName, setEditedName] = useState(name);

	useEffect(() => {
		setEditedName(name);
	}, [name]);

	return (
        // Added a border to right and bottom to see actual height and width of task details
		<div className="w-[635px] h-[944px] bg-[#F3F3F3] border-b border-r border-black">
			<TaskDetailsHeader />
			<div className="pl-[20px] pr-[33px] h-[821px] flex justify-between flex-col pt-[28px] pb-[25px]">
				<div className="w-full">
					<label
						htmlFor="taskName"
						className="text-base text-black leading-[19.44px] tracking-[0.115rem]"
					>
						Task Name
					</label>
					<input
						id="taskName"
						value={editedName}
						disabled={!id}
						onChange={(event) => {
							setEditedName(event.target.value);
						}}
						className="border-[#CBCBCB] px-[26.66px] pt-[20px] text-base leading-[24.3px] font-normal text-[#0D2972] pb-[25px] h-[69px] mt-[15px] border-2 w-full rounded-[9px] !ring-0 focus:ring-0"
					/>
				</div>

				<div className="flex space-x-5">
					<button
						onClick={() => {
							if (id) {
								deleteTask(id);
								setEditedName("");
							}
						}}
						className="rounded-[6px] button-inner-shadow box-shadow-normal flex items-center justify-center h-[61px] w-[121px] bg-[#AB3535] border-2 border-[#720D0D] "
					>
						<span className="text-shadow text-base leading-[21.09px] text-white -mt-1">
							Delete
						</span>
					</button>

					<button
						onClick={() => {
							if (id) {
								setEditedName("");
								editTask({
									id,
									checked,
									name: editedName,
								});
							}
						}}
						className="rounded-[6px] button-inner-shadow box-shadow-normal flex items-center justify-center h-[61px] w-[436px] bg-[#3556AB] border-2 border-[#123EB1]  "
					>
						<span className="text-shadow text-base leading-[21.09px] text-white -mt-1">
							Save
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
