# Modern Security Dashboard (React + Tailwind)

A modern, responsive Security Dashboard UI built with React and Tailwind CSS, inspired by real-world SaaS products like Linear, Vercel, and Notion.

---

## Features

- Dark / Light Mode Toggle (Tailwind v4 compatible)
- Fully Responsive Design
  - Mobile-first layout
  - Card-based UI for small screens
- Sidebar Navigation
  - Desktop sidebar
  - Mobile drawer (Topbar controlled)
- Search and Filtering UI
- Dashboard Stats Section
- Scans Table (Desktop)
- Card Layout (Mobile View)
- Toast Notifications
- Modern UI Design
  - Glassmorphism (blur and transparency)
  - Smooth transitions and subtle shadows

---

## Tech Stack

- React (Vite)
- Tailwind CSS v4
- React Router DOM
- Local State (useState, useEffect)

---

## Project Structure

src/
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │
│   ├── ui/
│   │   ├── ThemeToggle.jsx
│   │   ├── StatusChip.jsx
│   │   ├── Toast.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── ScanDetail.jsx
│
├── data/
│   ├── mockData.js
│
├── App.jsx
├── main.jsx

---

## Installation

git clone https://github.com/your-username/your-repo-name.git  
cd your-repo-name  
npm install  
npm run dev  

---

## Dark Mode Setup (Tailwind v4)

This project uses Tailwind v4 custom variant:

@import "tailwindcss";  
@custom-variant dark (&:where(.dark, .dark *));  

Theme toggle is implemented using:

document.documentElement.classList.toggle("dark")

---

## Responsive Behavior

Mobile  : Card-based scan list with drawer menu  
Tablet  : Mixed layout  
Desktop : Sidebar with table view  

---

## Key Highlights

- Component-based architecture  
- Clean and scalable UI  
- Real-world dashboard patterns  
- Mobile-first responsive design  
- Interview-ready frontend project  

---

## Future Improvements

- Authentication (JWT or OAuth)  
- Backend integration (Node.js or NestJS)  
- Real API data handling  
- Notifications system  
- Charts and analytics (Recharts or Chart.js)  
- Performance optimization  

---

## Preview

Add screenshots of:
- Dashboard (light mode)
- Dashboard (dark mode)
- Mobile view

---

## Author

Vishal

---

## License

This project is open-source and available under the MIT License.