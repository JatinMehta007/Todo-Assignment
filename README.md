<h1 align="center">📝 Todo Board – Full Stack App</h1>

<p align="center">
A modern task management web app where users can create boards and manage todos efficiently.
</p>

---

## ✨ Features

- 🔐 User Authentication (Signup / Login)
- 📂 Create & Delete Boards
- 📝 Create, Delete & Complete Todos
- 📊 Board-wise Todo Organization
- ⚡ Responsive UI
- 🔔 Toast Notifications

---

## 🛠 Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios
- React Router
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt

---

## 📁 Folder Structure

```
todo-board/
├── backend/
│   ├── index.js
│   ├── db.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   └── package.json
```
---

## ⚙️ Environment Variables

- Create a .env file based on .env.example inside **backend** folder:
- Update the .env file with your MongoDB connection string and JWT secret.


### Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas account) - [Download](https://www.mongodb.com/try/download/community) or [Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Todo
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```



### Running the Application


1. **Start the backend server**
   ```bash
   cd backend
   node index.js
   ```
   The backend will run on `http://localhost:3000`

   For development with auto-reload:
   ```bash
   npm run dev
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173` to use the application



## Support

For issues or questions, please check the code comments or create an issue in the repository.