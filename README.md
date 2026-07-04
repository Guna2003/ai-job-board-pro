# 🚀 AI Job Board

A modern AI-powered Job Board built using React, Vite, and React Router. Users can browse jobs, create an account, log in, apply for jobs, and manage their applications through a clean and responsive interface.

---

## 🌟 Features

### Authentication
- User Signup
- User Login
- Logout
- Welcome message after login
- LocalStorage-based authentication

### Job Board
- View featured jobs
- Company logos
- Job title
- Location
- Salary
- Job type
- Responsive job cards

### Job Application
- Apply for jobs
- Application form
- Resume link
- Cover letter
- Automatic application date
- Applications saved in LocalStorage
- Users can view only their own applications
- Delete application

### User Experience
- Responsive design
- Modern UI
- Gradient buttons
- Navigation using React Router
- Back button on pages
- Search bar
- Company branding

---

## 🛠️ Technologies Used

- React
- Vite
- React Router DOM
- JavaScript (ES6)
- CSS3
- LocalStorage
- Git
- GitHub
- GitHub Actions
- Vercel

---

## 📁 Project Structure

```
src/
│
├── assets/
├── components/
├── data/
├── pages/
│
├── App.jsx
├── App.css
└── main.jsx

.github/
└── workflows/
    └── ci.yml
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Guna2003/ai-job-board-pro.git
```

Go to the project folder

```bash
cd ai-job-board-pro
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

---

## 🏗️ Build

```bash
npm run build
```

---

## 🚀 Deployment

The application is deployed on Vercel.

Every push to the **main** branch automatically triggers the GitHub Actions workflow.

---

## 🔄 CI/CD Pipeline

The project uses GitHub Actions.

Pipeline steps:

- Checkout Repository
- Setup Node.js
- Install Dependencies
- Build Project

Whenever code is pushed to **main**, GitHub Actions automatically builds the application.

Vercel automatically deploys the latest successful build.

---

## 🔮 Future Improvements

- Backend Integration
- Firebase Authentication
- Resume Upload
- Admin Dashboard
- Email Notifications
- Job Categories
- Advanced Search Filters

---

## 👨‍💻 Author

**Guna Sekhar**

B.Tech CSE

SRM University AP

GitHub: https://github.com/Guna2003

---

## 📄 License

This project is created for educational and assessment purposes.
