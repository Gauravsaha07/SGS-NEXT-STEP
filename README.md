# Next Step 🎯

**Next Step** is a career guidance SaaS platform where students can register, explore career paths, and connect with peer counselors for 1:1 guidance. Verified students can apply to become counselors themselves — creating a peer-to-peer mentorship ecosystem, moderated by admins and powered by a credit-based access system.

---

## 🚀 Core Idea

- Students sign up and browse **career paths** organized under **categories**.
- Students can also apply to become **counselors** — once approved by an **admin**, they can guide other students.
- Guidance happens via **real-time chat**, restricted by a **credit system** (students spend credits to chat, and can top up via credit requests).
- Counselors are **rated and reviewed** by the students they help, building trust and visibility.

---

## ✨ Features

- 🔐 **Authentication & Authorization** — Role-based access for `STUDENT`, `COUNSELOR`, and `ADMIN`.
- 🧑‍🏫 **Counselor Onboarding** — Students apply to become counselors with qualification & experience details; admins approve/reject.
- 🗂️ **Career Explorer** — Browse careers grouped by category, with details like required qualification, duration, and salary.
- 💬 **Real-time Chat** — WebSocket-powered messaging between students and counselors.
- 💳 **Credit System** — Students spend credits to initiate/continue chats; credit top-ups go through a request → admin approval flow.
- ⭐ **Ratings & Reviews** — Students rate counselors after a session; ratings roll up into a counselor's average score.
- 🛠️ **Admin Dashboard** — Approve counselors, manage credit requests, moderate categories/careers, and oversee platform activity.

---

## 🏗️ Tech Stack

| Layer               | Technology                                      |
|---------------------|--------------------------------------------------|
| Frontend             | React (Vite)                                    |
| State Management     | Redux Toolkit                                   |
| Server State / Caching | TanStack Query (React Query)                  |
| Backend              | Node.js + Express.js                            |
| Database              | MongoDB + Mongoose                              |
| Real-time Chat        | WebSockets (Socket.IO)                          |
| Auth                   | JWT (Access + Refresh Tokens)                   |
| Styling                | Tailwind CSS *(update if different)*            |
| Deployment              | *(e.g. Vercel / Render / Railway / AWS — update)* |

> This stack follows the **MERN** architecture: **M**ongoDB, **E**xpress, **R**eact, **N**ode.js.

---

## 🗄️ Data Model (High-Level)

Based on the current schema design:

### `User`
```js
{
  id: ObjectId,
  name: String,
  email: String,
  phone: String,
  password: String,
  type: ["STUDENT", "COUNSELOR", "ADMIN"],
  isActive: Boolean,
  qualification: String,
  location: String,
  credits: Number
}
```

### `Category`
```js
{
  id: ObjectId,
  title: String
}
```

### `Career`
```js
{
  id: ObjectId,
  category: ObjectId,       // ref -> Category
  title: String,
  description: String,
  requiredQualification: String,
  duration: String,
  salary: String
}
```

### `Counselor`
```js
{
  id: ObjectId,
  category: ObjectId,       // ref -> Category
  user: ObjectId,           // ref -> User
  experience: Number,
  isActive: Boolean,
  ratings: Number,
  isAvailable: Boolean
}
```

### `Rating`
```js
{
  id: ObjectId,
  counselor: ObjectId,      // ref -> Counselor
  rating: Number,
  review: String
}
```

### `CreditRequest`
```js
{
  id: ObjectId,
  credits: Number,
  status: Boolean           // pending / approved (or use an enum: PENDING | APPROVED | REJECTED)
}
```

> 💡 Suggestion: consider changing `CreditRequest.status` to an enum (`"PENDING" | "APPROVED" | "REJECTED"`) instead of a `Boolean` for better auditability, and add a `user` reference so you know who raised each request.

---

## 📂 Project Structure

```
next-step/
├── client/                      # React frontend
│   ├── src/
│   │   ├── app/                 # Redux store setup
│   │   ├── features/            # Redux slices (auth, chat, credits, etc.)
│   │   ├── api/                 # TanStack Query hooks / API layer
│   │   ├── components/
│   │   ├── pages/
│   │   ├── sockets/              # Socket.IO client setup
│   │   └── main.jsx
│   └── package.json
│
├── server/                      # Express backend
│   ├── src/
│   │   ├── config/               # DB, env, socket config
│   │   ├── models/                # Mongoose schemas (User, Category, Career, Counselor, Rating, CreditRequest)
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middlewares/           # auth, role-based access, error handling
│   │   ├── sockets/                # WebSocket event handlers (chat)
│   │   ├── services/
│   │   └── server.js
│   └── package.json
│
├── .env.example
└── README.md
```

---

## 🔑 User Roles & Flow

1. **Student**
   - Registers → browses categories & careers → requests credits → chats with counselors → rates them after guidance.
   - Can apply to become a **Counselor** by submitting qualification, experience, and category expertise.

2. **Counselor** *(approved Student)*
   - Sets availability (`isAvailable`).
   - Receives and responds to chat requests from students.
   - Builds reputation via `ratings`.

3. **Admin**
   - Approves/rejects counselor applications.
   - Approves/rejects credit top-up requests.
   - Manages categories and careers (CRUD).
   - Monitors platform activity (users, chats, reports).

---

## 💬 Real-time Chat (WebSockets)

- Implemented using **Socket.IO** on top of the Express server.
- Each chat session is scoped to a `studentId` + `counselorId` room.
- Events (suggested):
  - `join_room`
  - `send_message`
  - `receive_message`
  - `typing`
  - `user_online` / `user_offline`
  - `credit_deducted` (emitted when a credit is consumed mid-chat)

---

## 💳 Credit System Flow

1. Every new student starts with a default number of free `credits`.
2. Starting/continuing a chat with a counselor deducts credits.
3. When credits run low, the student submits a `CreditRequest`.
4. Admin reviews the request and approves/rejects it.
5. On approval, the requested `credits` are added to the student's `User.credits`.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- npm / yarn / pnpm

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/next-step.git
cd next-step
```

### 2. Setup the backend
```bash
cd server
npm install
cp .env.example .env   # fill in your environment variables
npm run dev
```

### 3. Setup the frontend
```bash
cd client
npm install
npm run dev
```

### 4. Environment Variables (`server/.env`)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/next-step
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
CLIENT_URL=http://localhost:5173
SOCKET_CORS_ORIGIN=http://localhost:5173
```

---

## 🧩 State Management Strategy

- **Redux Toolkit** — handles global client-side state: auth session, current user, chat UI state, notifications.
- **TanStack Query** — handles all server-state: fetching/caching categories, careers, counselors, ratings, and credit requests, with built-in caching, retries, and background refetching.
- Socket events update Redux (for live chat UI) while REST data is managed by TanStack Query.

---

## 🗺️ Roadmap

- [ ] Student registration & auth (JWT)
- [ ] Category & Career CRUD (Admin)
- [ ] Counselor application & approval flow
- [ ] Credit request & approval flow
- [ ] Real-time chat via WebSockets
- [ ] Ratings & reviews system
- [ ] Counselor discovery/search & filters
- [ ] Admin analytics dashboard
- [ ] Notifications (in-app / email)
- [ ] Payment gateway integration for buying credits

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a PR or an issue.

---

## 📄 License

This project is licensed under the MIT License.
