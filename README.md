# JavaScript To-Do List Application

A simple and interactive **To-Do List application** built using **HTML, CSS, and JavaScript**. This project demonstrates DOM manipulation, event handling, CRUD operations, task filtering, and browser-based data persistence using `localStorage`.

## 🚀 Features

* ✅ Add new tasks
* ✅ View all tasks
* ✅ Edit existing tasks
* ✅ Delete tasks
* ✅ Mark tasks as completed
* ✅ Unmark completed tasks
* ✅ Filter tasks by:

  * All
  * Active
  * Completed
* ✅ Automatically save tasks using `localStorage`
* ✅ Tasks remain available after refreshing the browser
* ✅ Dynamic DOM element creation
* ✅ Event delegation for task actions
* ✅ Responsive and simple user interface

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive layout
* **JavaScript** – Application logic and DOM manipulation
* **LocalStorage** – Persistent browser data storage

## 📁 Project Structure

```text
todo-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in any modern web browser.
4. Start adding tasks.

No server or additional installation is required.

## 📝 How It Works

### 1. Create

Users can enter a task in the input field and click the **Add Task** button.

The task is stored as a JavaScript object containing:

```javascript
{
    id: Date.now(),
    text: "Example Task",
    completed: false
}
```

### 2. Read

All saved tasks are displayed dynamically on the webpage using JavaScript DOM manipulation.

### 3. Update

Users can:

* Edit the task text
* Mark a task as completed
* Unmark a completed task

### 4. Delete

Users can remove a task by clicking the **Delete** button.

### 5. Filter

Tasks can be filtered using three options:

```text
All
Active
Completed
```

### 6. Local Storage

Tasks are automatically saved in the browser using:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

When the application loads, saved tasks are retrieved using:

```javascript
JSON.parse(localStorage.getItem("tasks"))
```

This allows tasks to remain available even after refreshing or reopening the browser.

## 🧠 JavaScript Concepts Demonstrated

This project demonstrates the following JavaScript concepts:

* Variables and arrays
* Objects
* Functions
* Arrow functions
* DOM manipulation
* `addEventListener()`
* Event handling
* Event delegation
* `filter()`
* `find()`
* `forEach()`
* `JSON.stringify()`
* `JSON.parse()`
* Browser `localStorage`
* Conditional statements
* Dynamic HTML elements
* State management

## 🔄 CRUD Operations

The application implements complete CRUD functionality:

| Operation | Function             |
| --------- | -------------------- |
| Create    | Add a new task       |
| Read      | Display saved tasks  |
| Update    | Edit/complete a task |
| Delete    | Remove a task        |

## 🎯 Learning Objectives

The main objective of this project is to understand how JavaScript can be used to create an interactive client-side application.

Through this project, the following concepts are practiced:

1. DOM manipulation
2. Event handling
3. State management
4. CRUD functionality
5. Event delegation
6. Data filtering
7. Local data persistence
8. Dynamic UI updates

## 📌 Expected Outcome

The final application provides a fully functional task management system where users can create, view, update, delete, complete, and filter tasks.

All task data is automatically stored in the browser using `localStorage`, allowing the application to retain data across browser reloads.

## 👩‍💻 Author

**Sowmiya R**

BCA – Data Science

## 📄 License

This project is created for educational and internship purposes.
