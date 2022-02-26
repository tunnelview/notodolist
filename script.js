const taskList = [];

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
							<td>Watching Tv</td>
							<td>5hrs</td>
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
};
