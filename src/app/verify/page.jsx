"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/axios";

export default function Verify() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setSuccess("تم التحقق بنجاح!");
      router.push("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "الكود غير صحيح");
    }
  };

  const handleResend = async () => {
    setError("");
    setSuccess("");
    try {
      await api.post("/auth/verify-email/resend-code");
      setSuccess("تم إعادة إرسال الكود بنجاح!");
    } catch (err) {
      setError("حدث خطأ أثناء إعادة الإرسال");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="card-title text-center mb-4">Verify Account</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Verification Code</label>
            <input
              type="text"
              className="form-control"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter verification code"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">
            Verify
          </button>
        </form>
        <button className="btn btn-secondary w-100" onClick={handleResend}>
          Resend Code
        </button>
      </div>
    </div>
  );
}
