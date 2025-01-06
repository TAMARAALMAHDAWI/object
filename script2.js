
class ToDo {
    constructor() {
        this.todoList = document.getElementById('todo-list'); // القائمة
        this.todoInput = document.getElementById('todo-input'); // حقل الإدخال
        this.addButton = document.getElementById('add-task-btn'); // زر الإضافة

        // ربط زر الإضافة بوظيفة إضافة المهام
        this.addButton.addEventListener('click', () => this.addTask());
    }

    addTask() {
        const taskText = this.todoInput.value.trim(); // قراءة النص
        if (taskText === '') return; // التأكد من أن النص ليس فارغًا

        const taskItem = document.createElement('li'); // إنشاء عنصر <li>
        taskItem.textContent = taskText;

        const completeBtn = document.createElement('button'); // زر الإكمال
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => this.toggleComplete(taskItem));

        const deleteBtn = document.createElement('button'); // زر الحذف
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => this.deleteTask(taskItem));

        taskItem.appendChild(completeBtn); // إضافة زر الإكمال
        taskItem.appendChild(deleteBtn); // إضافة زر الحذف
        this.todoList.appendChild(taskItem); // إضافة المهمة إلى القائمة

        this.todoInput.value = ''; // تفريغ حقل الإدخال
    }

    toggleComplete(task) {
        task.style.textDecoration = task.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        task.style.color = task.style.color === 'gray' ? 'black' : 'gray';
    }

    deleteTask(task) {
        this.todoList.removeChild(task); // 
        const myToDoList = new ToDo(); //
    }
}