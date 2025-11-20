document.addEventListener("DOMContentLoaded", () => {
  const taskform = document.getElementById("taskform");
  const taskinput = document.getElementById("taskinput");
  const tasklist = document.getElementById("tasklist");

  taskform.addEventListener("submit", (e) => {
    e.preventDefault();
    if (taskinput.value.trim() !== "") {
      addTask(taskinput.value, tasklist);
      taskinput.value = "";
    }
  });
});

function addTask(task, tasklist) {
  const li = document.createElement("li");
  li.textContent = task;

  const deletebutton = document.createElement("button");
  deletebutton.textContent = "Delete";

  deletebutton.addEventListener("click", () => {
    tasklist.removeChild(li);
  });

  li.appendChild(deletebutton);
  tasklist.appendChild(li);
}
