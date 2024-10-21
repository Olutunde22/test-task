import { useState } from "react";
import TaskDetails from "./components/TaskDetails";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";

export interface ITask {
	checked?: boolean;
	id: string;
	name?: string;
}

function App() {
	const [tasks, setTasks] = useState<ITask[]>([
		{
			id: uuidv4(),
			name: "Training at the Gym",
			checked: true,
		},
		{
			id: uuidv4(),
			name: "Play Paddle with friends",
			checked: false,
		},
		{
			id: uuidv4(),
			name: "Burger BBQ with family",
			checked: false,
		},
	]);
	const [selectedTask, setSelectedTask] = useState<ITask | undefined>();

	const handleAddTask = () => {
		const newTask = {
			id: uuidv4(),
			name: "",
			checked: false,
		};
		setTasks((prev) => [...prev, newTask]);
		setSelectedTask(newTask);
	};

	const handleDeleteTask = (id: string) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
		setSelectedTask(undefined);
	};

	const handleEditTask = (updatedTask: ITask) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === updatedTask.id ? { ...task, ...updatedTask } : task
			)
		);
		setSelectedTask(undefined);
	};

	const handleSelectTask = (id: string) => {
		setSelectedTask(tasks.find((task) => task.id === id));
	};

	return (
		<div className="flex justify-center h-screen w-screen">
			<TaskList
				tasks={tasks}
				addTask={handleAddTask}
				selectTask={handleSelectTask}
				checkTask={handleEditTask}
			/>
			<TaskDetails
				{...selectedTask}
				deleteTask={handleDeleteTask}
				editTask={handleEditTask}
			/>
		</div>
	);
}

export default App;
