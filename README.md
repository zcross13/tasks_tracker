# 📝 Task Tracker App

A clean and responsive task management app built with **React + TypeScript + Vite**. Users can add, complete, and delete tasks—with state saved in `localStorage`. Supports **dark mode** and smooth UI transitions for a modern feel.

## 🚀 Live Demo

🌐 [Check it out on Vercel](https://tasks-tracker-mu.vercel.app/)

## ✨ Features

- Add and delete tasks
- Mark tasks as complete/incomplete
- Persistent data with `localStorage`
- Mobile-friendly and responsive

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel
- **State Management**: React Hooks (`useState`, `useEffect`)

## 📂 Project Structure

src/
├── components/
│ ├── AddTaskForm.tsx
│ └── TaskList.tsx
├── App.tsx
├── styles/
│ ├── AddTaskForm.css
│ └── TaskList.css
│ └── App.css
└── main.tsx


## 🧠 Lessons Learned

- How to structure a reusable React app with components
- Using `localStorage` for persistent frontend data
- Practicing the Feynman technique to understand concepts
- Adding UI polish with transitions

## 🔮 Future Improvements

- Add due dates or priorities
- Sort/filter functionality
- Drag-and-drop task reordering
- Backend integration (Firebase or Supabase)

---

## 📥 Getting Started Locally

```bash
git clone https://github.com/zcross13/tasks_tracker.git
cd tasks_tracker
npm install
npm run dev
