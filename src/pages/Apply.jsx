import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/jobs";

function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === Number(id));

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const [form, setForm] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: "",
    resume: "",
    cover: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    applications.push({
      ...form,
      userEmail: currentUser.email,
      jobTitle: job.title,
      company: job.company,
      appliedAt: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );

    alert("Application Submitted Successfully!");

    navigate("/applications");
  }

  return (
    <div className="apply-page">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1>Apply for {job.title}</h1>

      <h3>{job.company}</h3>

      <form onSubmit={handleSubmit} className="apply-form">

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />

        <input
          name="resume"
          value={form.resume}
          onChange={handleChange}
          placeholder="Resume Link"
        />

        <textarea
          name="cover"
          rows="6"
          value={form.cover}
          onChange={handleChange}
          placeholder="Cover Letter"
        />

        <button type="submit">
          Submit Application
        </button>

      </form>

    </div>
  );
}

export default Apply;