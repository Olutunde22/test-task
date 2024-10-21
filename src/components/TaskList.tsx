import { ITask } from "../App";
import Task from "./Task";
import TaskListHeader from "./TaskListHeader";
import TaskListPromotion from "./TaskListPromotion";

export default function TaskList({
	tasks,
	addTask,
	selectTask,
	checkTask,
}: {
	tasks: ITask[];
	addTask: () => void;
	selectTask: (id: string) => void;
	checkTask: (value: ITask) => void;
}) {
	return (
		<div className="w-[414px] h-[944px] relative bg-[#F3F3F3] box-shadow-list">
			<TaskListHeader />
			<TaskListPromotion />
			<div className="py-5 px-4 space-y-6 overflow-y-scroll max-h-[600px]">
				{tasks.map((task) => (
					<Task
						key={task.id}
						{...task}
						onSelect={selectTask}
						onCheck={checkTask}
					/>
				))}
			</div>
			<button
				onClick={() => addTask()}
				className="absolute button-inner-shadow bottom-[25px] rounded-full flex items-center justify-center right-[16px] h-[61px] w-[60px] bg-[#3556AB] border-2 border-[#123EB1] box-shadow-normal"
			>
				<span className="text-shadow text-4xl leading-[42.1px] text-white -mt-1">
					+
				</span>
			</button>
		</div>
	);
}
