const form = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskList = document.querySelector<HTMLUListElement>(".list");

interface Task {
  description: string;
  isCompleted: boolean;
}
const loadTasks = (): Task[] => {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
};
const renderTasks = (): void => {
  taskList!.innerHTML = ""; // Clear the existing list
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.description;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.isCompleted;
    checkbox.addEventListener("change", () => {
      task.isCompleted = !task.isCompleted;
      //   Update the local storage
      updateStorage();
    });
    li.appendChild(checkbox);
    taskList?.appendChild(li);
  });
};
const tasks: Task[] = loadTasks();
renderTasks(); // Initial render of tasks
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formInput?.value) {
    const newTask: Task = {
      description: formInput.value,
      isCompleted: false,
    };
    formInput.value = ""; // Clear the input field after adding the task
    console.log("New Task:", newTask);

    // Add the new task to the tasks array
    createTask(newTask);
    // Render the updated task list
    renderTasks();
    // Update the local storage
    updateStorage();
    return;
  }
  alert("Please enter a task description.");
});
const createTask = (task: Task): void => {
  tasks.push(task);
  return;
};

const updateStorage = (): void => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return;
};
