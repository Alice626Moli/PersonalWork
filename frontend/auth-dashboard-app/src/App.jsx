import { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import Admin from "./routes/Admin";
import User from "./routes/User";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            {" "}
            <User />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredAdmin="admin">
            <Admin />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />

      {/* 这里 to = '/dashboard' 意思是navigate然后替换路径为/dashboard */}
    </Routes>
  );
}

export default App;
