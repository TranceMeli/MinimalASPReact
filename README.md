# Minimal ASP.NET Core + React Starter

![ASP.NET Core](https://img.shields.io/badge/ASP.NET%20Core-8.0-512BD4?style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?style=flat-square)

A minimal full-stack starter with an ASP.NET Core Web API backend and a React + Vite frontend. Intended as a clean base to build on.

---

## Project Structure

```
/
├── backend/          # ASP.NET Core Web API
│   ├── Controllers/
│   │   └── HelloController.cs
│   └── Program.cs
└── frontend/         # React + Vite
    └── src/
        ├── components/
        │   └── Navbar.jsx
        ├── pages/
        │   ├── AdminDashboard.jsx
        │   └── UserDashboard.jsx
        ├── App.jsx
        └── main.jsx
```

---

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v18 or higher)

---

## Getting Started

### Backend

```bash
cd backend
dotnet run
```

The API will be available at `https://localhost:7xxx` and `http://localhost:5xxx`.  
Swagger UI: `https://localhost:7xxx/swagger`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## API Endpoints

| Method | Route         | Description          |
|--------|---------------|----------------------|
| GET    | /api/hello    | Returns a hello message |

---

## CORS

The backend is configured to accept requests from `http://localhost:5173`.  
To change the allowed origin, edit the `ReactPolicy` in `Program.cs`.

---

## Notes

- No authentication is implemented — this is intentional for a minimal starter.
- The frontend uses React Router v7 for client-side routing.
- `/` redirects to `/admin` by default.
