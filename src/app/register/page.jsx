"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/axios";
import Navbar from "../components/Navbar";
export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    mobile_country_code: "971",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/auth/register", form);
      localStorage.setItem("token", response.data.data.token);
      router.push("/verify");
    } catch (err) {
      setError(err.response?.data?.message || "حدث خطأ ما");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card p-4 shadow-sm"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h2 className="card-title text-center mb-4">Register</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-flex gap-2">
              <input
                type="text"
                className="form-control"
                name="mobile_country_code"
                value={form.mobile_country_code}
                onChange={handleChange}
                placeholder="Code"
              />
              <input
                type="text"
                className="form-control"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password_confirmation"
                value={form.password_confirmation}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
