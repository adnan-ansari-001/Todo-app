# To-Do App

A simple to-do app that allows users to manage tasks with features like **Add**, **Delete**, **Edit**, and **Show Finished** tasks. The app enables efficient task management by marking tasks as completed, allowing you to keep track of your progress.

## Features

- **Add Task:** Create a new task by entering a task name and pressing the "Add" button.
- **Delete Task:** Remove tasks from the list when they are no longer needed.
- **Edit Task:** Modify task names if changes are required.
- **Show Finished:** Toggle between showing all tasks or only the completed tasks.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (React)
- **Backend:** Node.js, Express (for saving tasks persistently)
- **Database:** LocalStorage

## Installation

### 1. Clone the repository
```bash
git clone <your-repository-url>
2. Navigate to the project directory
bash
Copy
Edit
cd todo-app
3. Install dependencies (if needed)
If using a backend or additional dependencies:

bash
Copy
Edit
npm install
4. Run the app
For frontend-only apps:

Open index.html in your browser.
For backend-based apps:

bash
Copy
Edit
npm start
The app should now be running at http://localhost:3000 (or another port).

Usage
Add a new task:

Type the task name in the input field and click the "Add" button.
The task will appear in the list.
Mark a task as completed:

Click the checkbox next to a task to mark it as finished.
The task will be visually distinguished as completed.
Edit a task:

Click the "Edit" button next to a task to modify its name.
Save your changes by clicking "Save".
Delete a task:

Click the "Delete" button next to a task to remove it from the list.
Show finished tasks:

Toggle between showing all tasks and only showing completed tasks by clicking the "Show Finished" button.
