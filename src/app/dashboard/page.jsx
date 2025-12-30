"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await api.get("/auth/user-data");
        setUser(response.data.data);
      } catch (err) {
        setError("Failed to load user data");
      }
    };

    fetchUser();
  }, [router]);

  if (!user) {
    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="card mx-auto shadow-sm" style={{ maxWidth: "500px" }}>
          <div className="card-body text-center">
            <h3 className="card-title mb-3">Welcome, {user.name}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
