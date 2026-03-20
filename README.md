# Security Dashboard

A modern, responsive security dashboard built with React and Tailwind CSS.  
Designed with a clean SaaS-style interface, focusing on usability, performance, and real-world frontend architecture.

---

## Overview

This project represents a production-style dashboard UI for managing and monitoring security scans. It demonstrates scalable component structure, responsive design, and modern UI patterns commonly used in real-world SaaS applications.

---

## Features

- Light and Dark mode (Tailwind CSS v4)
- Fully responsive design (mobile, tablet, desktop)
- Sidebar navigation (desktop) with mobile drawer
- Topbar with search and controls
- Dashboard statistics section
- Scan management interface
  - Table view for desktop
  - Card view for mobile
- Toast notification system
- Clean and minimal UI with modern design principles

---

## Tech Stack

- React (Vite)
- Tailwind CSS v4
- React Router DOM
- JavaScript (ES6+)

---

<!-- ## Project Structure

src/
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

--- -->

## Getting Started

### Installation

git clone https://github.com/your-username/security-dashboard.git  
cd security-dashboard  
npm install  
npm run dev  

---

## Dark Mode Configuration

Tailwind CSS v4 uses a custom variant for dark mode:

@import "tailwindcss";  
@custom-variant dark (&:where(.dark, .dark *));  

Theme switching is implemented by toggling the `dark` class on the root element:

document.documentElement.classList.toggle("dark");

---

## Responsive Design

Mobile  : Card-based layout with drawer navigation  
Tablet  : Adaptive responsive layout  
Desktop : Sidebar with table-based data view  

---

## Design Approach

- Mobile-first layout strategy  
- Minimal and clean interface  
- Consistent spacing and typography  
- Reusable component-based structure  
- Inspired by modern SaaS products  

---

## Future Enhancements

- Authentication (JWT or OAuth)  
- Backend integration (Node.js or NestJS)  
- API-based data handling  
- Role-based access control  
- Charts and analytics  
- Performance optimization  

---

## Author

Vishal

---

## License

This project is licensed under the MIT License.