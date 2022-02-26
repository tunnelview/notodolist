const taskList = [];
const taskListElm = document.getElementById("task-list");

const handleOnSubmit = (event) => {
  const frmDt = new FormData(event);
  const task = frmDt.get("task");
  const hr = +frmDt.get("hr");

  console.log(task, hr);
  const obj = {
    task,
    hr,
  };
  taskList.push(obj);

  display();
};

// display task list in the dom
const display = () => {
  let str = "";

  // loop through the task list and convert in to tr string

  taskList.map((array_item, item_index) => {
    str += `
        <tr>
							<td>
								<input type="checkbox"/>
							</td>
							<td>${array_item.task}</td>
							<td>${array_item.hr}</td>
							<td>
								<button class="btn btn-danger">
									<i class="fa-solid fa-trash"></i>
								</button>
								<button class="btn btn-primary">
									<i class="fa-solid fa-arrow-right"></i>
									</i>
								</button>
							</td>
						</tr>
        `;
  });

  taskListElm.innerHTML = str;
};
