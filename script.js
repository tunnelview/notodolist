const taskList = [];
const badList = [];
const taskListElm = document.getElementById("task-list");
const badListElm = document.getElementById("bad-list");

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

  taskList.map((array_item, array_index) => {
    str += `
        <tr>
							<td>
								<input type="checkbox"/>
							</td>
							<td>${array_item.task}</td>
							<td>${array_item.hr}</td>
							<td>
                            <button class ="btn btn-danger" onclick = "deleteTaskList(${array_index})">
								
									<i class="fa-solid fa-trash"></i>
								</button>
								<button class="btn btn-primary" onclick = "markAsNotToDo(${array_index})">
									<i class="fa-solid fa-arrow-right"></i>
									</i>
								</button>
							</td>
						</tr>
        `;
  });

  taskListElm.innerHTML = str;
};

// display bad task list in the dom
const displayBadlist = () => {
  let str = "";

  badList.map((array_item, array_index) => {
    str += `
      <tr>
						<td>
							<input type="checkbox"/>
						</td>
						<td>${array_item.task}</td>
						<td>${array_item.hr}</td>
						<td>
							<button class="btn btn-warning" onclick = "markAsTask(${array_index})">
								<i class="fa-solid fa-arrow-left"></i>
							</button>
							<button class="btn btn-danger" onclick = "deleteBadList(${array_index})">
								<i class="fa-solid fa-trash-can"></i>
							</button>
						</td>
					</tr>`;
  });
  badListElm.innerHTML = str;
};

//delete item from task list

const deleteTaskList = (item_index) => {
  const itm = taskList.splice(item_index, 1);
  display();
  return itm[0];
};

// mark task as to not to do item
const markAsNotToDo = (item_index) => {
  const baditm = deleteTaskList(item_index);
  badList.push(baditm);
  displayBadlist();
};

//delete item from bad list
const deleteBadList = (item_index) => {
  const itm = badList.splice(item_index, 1);
  displayBadlist();
  return itm[0];
};

// mark task as task item
const markAsTask = (item_index) => {
  const baditm = deleteBadList(item_index);
  taskList.push(baditm);
  //   displayBadlist();
  display();
};
