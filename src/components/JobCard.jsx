import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="job-card">

      <div className="card-header">

        <div className="company">

          <img
            src={job.logo}
            alt={job.company}
            className="company-logo"
          />

          <div>
            <h3>{job.company}</h3>
            <p className="job-title">{job.title}</p>
          </div>

        </div>

      </div>

      <div className="job-info">
        <span>📍 {job.location}</span>
        <span>{job.type}</span>
      </div>

      <div className="salary">
        💰 {job.salary}
      </div>
      
      <Link to={`/apply/${job.id}`} className="apply-btn">
        Apply Now
      </Link>

    </div>
  );
}

export default JobCard;