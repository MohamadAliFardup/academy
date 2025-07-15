# Frontend

---

## 🧱 Tech Stack

- **Next.js 14** (App Router, SSR)
- **TypeScript**
- **TailwindCSS**
- **Redux Toolkit** (with RTK Query)
- **NextAuth** (JWT strategy)
- **Material UI (MUI)**

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/kingramx/IranianAcademy/your-repo-name.git

# 2. Navigate into the project
cd frontend

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
|Login| [http://localhost:3000/login](http://localhost:3000/login)                     |[x]|
|Register| [http://localhost:3000/register](http://localhost:3000/register)               |[x]|
|Forgot Password| [http://localhost:3000/forgot-password](http://localhost:3000/forgot-password) |[]|
|Dashboard| [http://localhost:3000/dashboard](http://localhost:3000/dashboard)             |[]|
|Lesson View| [http://localhost:3000/learn/1](http://localhost:3000/learn/1)                 |[]|

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

## 📌 Development Progress

- [x] Project bootstrapped with Next.js 14
- [x] Page routing & folder structure
- [ ] Login / Register form UI
- [ ] Connect authentication API
- [ ] Forgot password workflow
- [ ] Dashboard and lesson player
- [ ] Code execution integration (Judge)
- [ ] MVP Launch
