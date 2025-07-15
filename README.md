# 🚀 Coding Platform Frontend

---

## 🧱 Tech Stack

- ⚛️ **Next.js 14** (App Router, SSR)
- 📘 **TypeScript**
- 🎨 **TailwindCSS**
- 🧠 **Redux Toolkit** (with RTK Query)
- 🔐 **NextAuth** (JWT strategy)
- 📦 **Material UI (MUI)**

---

## 🛠 Getting Started

```bash
npx create-next-app@latest app-name --ts --app
```

Recommended options:

- Tailwind ✅
- ESLint ✅
- Prettier ✅
- src/ ✅
- App Router ✅
- Alias `@/*` ✅

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# 2. Navigate into the project
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Pages (Routes)

| Page              | Link                                                                           | Status        |
| ----------------- | ------------------------------------------------------------------------------ | ------------- |
| 🔐 Login           | [http://localhost:3000/login](http://localhost:3000/login)                     | ✅ Implemented |
| 📝 Register        | [http://localhost:3000/register](http://localhost:3000/register)               | ✅ Implemented |
| 🔁 Forgot Password | [http://localhost:3000/forgot-password](http://localhost:3000/forgot-password) | ⚠️ In Progress |
| 🧩 Dashboard       | [http://localhost:3000/dashboard](http://localhost:3000/dashboard)             | 🔜 Planned     |
| 📘 Lesson View     | [http://localhost:3000/learn/1](http://localhost:3000/learn/1)                 | 🔜 Planned     |

---

## 🗂 Project Structure

```bash
src/
├── app/                # Routes & Pages (App Router)
├── features/           # Feature modules (auth, courses, learn, etc)
├── store/              # Redux store config
├── components/         # UI components (shared or global)
├── lib/                # Libraries (auth, helpers, etc)
├── styles/             # Global styles (Tailwind)
├── types/              # TypeScript shared types
└── utils/              # Utility functions
```

---

## 👨‍💻 Developer

| Name      | Role                                     |
| --------- | ---------------------------------------- |
| Your Name | Frontend Developer (UI/UX, Architecture) |

---

## 📌 Development Progress

- [x] Project bootstrapped with Next.js 14
- [x] Page routing & folder structure
- [ ] Login / Register form UI
- [ ] Connect authentication API
- [ ] Forgot password workflow
- [ ] Dashboard and lesson player
- [ ] Code execution integration (Judge)
- [ ] MVP Launch
