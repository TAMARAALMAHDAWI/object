class ToDo {
    constructor() {
        // الخصائص
        this.todoList = document.getElementById('todo-list'); // قائمة المهام
        this.todoInput = document.getElementById('todo-input'); // حقل الإدخال
        this.addButton = document.getElementById('add-task-btn'); // زر الإضافة

        // ربط زر الإضافة مع وظيفة addTask
        this.addButton.addEventListener('click', () => this.addTask());
    }

    // وظيفة لإضافة المهام
    addTask() {
        const taskText = this.todoInput.value.trim(); // قراءة النص من حقل الإدخال
        if (taskText === '') return; // التحقق من أن الحقل ليس فارغًا

        // إنشاء عنصر <li> لعرض المهمة
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // زر الإكمال
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => this.toggleComplete(taskItem));

        // زر الحذف
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => this.deleteTask(taskItem));

        // إضافة الأزرار إلى المهمة
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);

        // إضافة المهمة إلى القائمة
        this.todoList.appendChild(taskItem);

        // تفريغ حقل الإدخال
        this.todoInput.value = '';
    }

    // وظيفة لتبديل حالة الإكمال
    toggleComplete(task) {
        task.style.textDecoration = task.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        task.style.color = task.style.color === 'gray' ? 'black' : 'gray';
    }

    // وظيفة لحذف المهمة
    deleteTask(task) {
        this.todoList.removeChild(task);
    }
}

// إنشاء كائن من الفئة ToDo
const myToDoList = new ToDo();




