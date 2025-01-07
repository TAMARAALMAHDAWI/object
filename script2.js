


class ToDo {
  constructor() {
      this.taskInput = document.getElementById("taskinput");
      this.addBtn = document.querySelector("#addTask");
      this.taskList = document.getElementById("taskList");

    
      this.addBtn.addEventListener("click", () => {
          this.addTask();
      });

      
      this.taskInput.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
              this.addTask();
          }
      });
  }

  addTask() {
      const inputTask = this.taskInput.value;

      if (inputTask === "") {
          window.alert("Please enter value first");
          return;
      }

      const listItem = document.createElement("li");
      const inputSpan = document.createElement("span");
      const completedBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      const editBtn = document.createElement("button");

      completedBtn.addEventListener("click", () => {
          this.toggleComplete(inputSpan);
      });

      deleteBtn.addEventListener("click", () => {
          this.deleteTask(listItem);
      });

      editBtn.addEventListener("click", () => {
          this.editTask(listItem, inputSpan);
      });

      completedBtn.classList.add("btn");
      completedBtn.classList.add("btn-success");

      deleteBtn.classList.add("btn");
      deleteBtn.classList.add("btn-danger");

      editBtn.classList.add("btn");
      editBtn.classList.add("btn-warning");// 

      listItem.classList.add("mb-4");

      inputSpan.innerText = inputTask;
      completedBtn.innerText = "complete";
      deleteBtn.innerText = "delete";
      editBtn.innerText = "edit";

      listItem.appendChild(inputSpan);
      listItem.appendChild(completedBtn);
      listItem.appendChild(deleteBtn);
      listItem.appendChild(editBtn);
      this.taskList.appendChild(listItem);

      this.taskInput.value = "";
  }

  toggleComplete(task) {
      task.classList.toggle("completed");
  }

  deleteTask(task) {
      task.remove();
  }

 
  editTask(listItem, inputSpan) {
    
      const inputField = document.createElement("input");
      inputField.value = inputSpan.innerText;

  
      listItem.insertBefore(inputField, inputSpan);
      listItem.removeChild(inputSpan);

     
      inputField.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
              inputSpan.innerText = inputField.value; // 
              listItem.insertBefore(inputSpan, inputField);
              listItem.removeChild(inputField); // 
          }
      });


      inputField.addEventListener("blur", () => {
          inputSpan.innerText = inputField.value;
          listItem.insertBefore(inputSpan, inputField);
          listItem.removeChild(inputField);
      });
  }
}

const todoTask = new ToDo();