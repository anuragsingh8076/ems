# 🚀 Employee Management System (EMS)

A full-featured **Employee Management System** built with **React.js**, focused on role-based dashboards, task management, and data persistence using `localStorage`. The EMS supports both **Admin** and **Employee** interfaces, making it perfect for learning and demonstrating full-stack concepts on the frontend.

---

## 📂 Project Overview

This project includes:

- 👨‍💼 **Admin Dashboard** for managing employees and tasks  
- 👨‍🔧 **Employee Dashboard** for tracking assigned tasks  
- 🔐 Authentication system using **React Context API**  
- 🧠 Task management logic with proper state handling  
- 💾 Persistent data storage using `localStorage`  
- ✍️ Dummy employee/admin data created using ChatGPT  

---

## 🛠️ Features Implemented

1. ✅ **Project setup** with React and basic folder structure  
2. ⚛️ Using `useState` for local state management  
3. 👥 Creating **Employee Dashboard** UI & logic  
4. 👨‍💼 Creating **Admin Dashboard** UI & logic  
5. 🧠 Integrated **Context API** for global state  
6. 🔐 Created **Auth Context** to manage user login state  
7. 📦 Created **Task Context** to manage tasks globally  
8. 🤖 Generated initial data using **ChatGPT**  
9. 💾 **Stored employee & admin data in `localStorage`**  
10. 🔄 Set up **conditional routing** for Admin & Employee pages post-login  
11. 🔐 Separated user data for employees and admin  
12. 👤 Tracked **currently logged-in user** in `localStorage`  
13. 🔓 Implemented a **Logout** feature  
14. 🔁 Passed task data across components  
15. 📝 Created new tasks & assigned to employees  
16. 📥 Persisted all updates in `localStorage` automatically  

---

## 🧱 Tech Stack

- **Frontend:** React.js, Tailwind CSS (or your preferred CSS)  
- **State Management:** React Context API  
- **Data Storage:** `localStorage`  
- **Development Tools:** VS Code, Chrome DevTools  

---

## 📁 Folder Structure 

```

/src
/components
/AdminDashboard
/EmployeeDashboard
/Tasks
/Auth
/context
AuthProvider.jsx
TaskProvider.jsx
/data
dummyData.js
App.js
index.js

````

---

## 🧪 How to Run Locally

1. Clone this repo:
   ```bash
   git clone https://github.com/anuragsingh8076/employee-management-system.git
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. EMS will open at:

   ```
   http://localhost:3000
   ```

---

## 📌 Future Improvements 

* 🔄 Backend integration with Node.js/Express
* 📊 Task analytics with charts
* 🔐 Role-based routing using React Router
* 📨 Email notifications for task assignments

---

## 🙏 Acknowledgments

* Thanks to **ChatGPT** for helping generate employee data and logic ideas.
* Inspired by real-world employee management tools.

```

