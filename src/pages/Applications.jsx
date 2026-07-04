import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Applications() {

  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);

  useEffect(() => {

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const allApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const myApplications = allApplications.filter(
      (app) => app.userEmail === currentUser?.email
    );

    setApplications(myApplications);

  }, []);

  function deleteApplication(index) {

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const allApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const myApplications = allApplications.filter(
      (app) => app.userEmail === currentUser?.email
    );

    const applicationToDelete = myApplications[index];

    const updatedApplications = allApplications.filter(
      (app) => app !== applicationToDelete
    );

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    setApplications(
      myApplications.filter((_, i) => i !== index)
    );

  }

  return (

    <div className="applications-page">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1>My Applications</h1>

      {applications.length === 0 ? (

        <p>No Applications Yet</p>

      ) : (

        applications.map((app, index) => (

          <div className="application-card" key={index}>

            <h2>{app.jobTitle}</h2>

            <h3>{app.company}</h3>

            <p><strong>Name:</strong> {app.name}</p>

            <p><strong>Email:</strong> {app.email}</p>

            <p><strong>Phone:</strong> {app.phone}</p>

            <p><strong>Resume:</strong> {app.resume}</p>

            <p><strong>Applied:</strong> {app.appliedAt}</p>

            <button
              onClick={() => deleteApplication(index)}
            >
              Delete
            </button>

          </div>

        ))

      )}

    </div>

  );

}

export default Applications;